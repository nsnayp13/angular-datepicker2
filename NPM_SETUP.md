# Настройка автоматической публикации в NPM

## Что было настроено

### 1. Обновлены npm скрипты в основном package.json:
- `build:lib` - сборка библиотеки
- `publish:lib` - ручная публикация библиотеки
- `version:patch/minor/major` - обновление версии

### 2. Обновлен package.json библиотеки:
- Добавлены поля для правильной публикации (main, module, typings, exports)
- Настроен semantic-release для автоматического версионирования
- Добавлен publishConfig для публичного доступа

### 3. Созданы GitHub Actions workflows:
- `publish.yml` - простая публикация при изменении версии
- `release.yml` - автоматическое версионирование с semantic-release

## Как настроить NPM_TOKEN

### Шаг 1: Создать NPM Access Token
1. Зайдите на [npmjs.com](https://www.npmjs.com/)
2. Войдите в свой аккаунт
3. Перейдите в настройки профиля → Access Tokens
4. Нажмите "Generate New Token"
5. Выберите "Automation" (для CI/CD)
6. Скопируйте созданный токен

### Шаг 2: Добавить токен в GitHub Secrets
1. Откройте ваш репозиторий на GitHub
2. Перейдите в Settings → Secrets and variables → Actions
3. Нажмите "New repository secret"
4. Имя: `NPM_TOKEN`
5. Значение: вставьте скопированный NPM токен
6. Нажмите "Add secret"

## Как работает автоматическая публикация

### Вариант 1: Простая публикация (publish.yml)
- Срабатывает при push в main/master ветку
- Проверяет, изменилась ли версия в package.json
- Если версия изменилась - публикует пакет
- Создает Git тег и GitHub Release

### Вариант 2: Semantic Release (release.yml) - РЕКОМЕНДУЕТСЯ
- Автоматически определяет тип изменений по commit сообщениям
- Автоматически увеличивает версию (patch/minor/major)
- Генерирует CHANGELOG.md
- Публикует в NPM
- Создает GitHub Release

## Conventional Commits для semantic-release

Используйте следующие префиксы в commit сообщениях:

- `feat:` - новая функциональность (увеличивает minor версию)
- `fix:` - исправление бага (увеличивает patch версию)
- `docs:` - изменения в документации
- `style:` - форматирование кода
- `refactor:` - рефакторинг без изменения функциональности
- `test:` - добавление тестов
- `chore:` - обновление зависимостей, настройки

Для major версии добавьте `BREAKING CHANGE:` в описание коммита.

Примеры:
```
feat: add new date range picker component
fix: resolve timezone calculation issue
feat!: change API structure (BREAKING CHANGE)
```

## Ручная публикация

Если нужно опубликовать вручную:

```bash
# Обновить версию
npm run version:patch  # или version:minor, version:major

# Собрать и опубликовать
npm run publish:lib
```

## Проверка настройки

1. Убедитесь, что NPM_TOKEN добавлен в GitHub Secrets
2. Сделайте commit с префиксом `feat:` или `fix:`
3. Push в main/master ветку
4. Проверьте Actions tab в GitHub - должен запуститься workflow
5. После успешного выполнения пакет появится на npmjs.com

## Важные моменты

- Версионирование происходит автоматически на основе commit сообщений
- Пакет публикуется только при изменении версии
- Используйте conventional commits для правильного версионирования
- Тесты должны проходить перед публикацией
- Можно запустить workflow вручную через GitHub Actions UI