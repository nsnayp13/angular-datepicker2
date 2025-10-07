# 🚀 Инструкция по настройке автоматической публикации в NPM

## ✅ Что уже настроено

1. **npm скрипты** для сборки и публикации библиотеки
2. **GitHub Actions workflows** для автоматической публикации
3. **Semantic Release** для автоматического версионирования
4. **Package.json** с правильными настройками для публикации

## 🔧 Что нужно сделать вручную

### 1. Настроить NPM_TOKEN

#### Создание NPM Access Token:
1. Зайдите на [npmjs.com](https://www.npmjs.com/) и войдите в аккаунт
2. Перейдите в **Account Settings** → **Access Tokens**
3. Нажмите **"Generate New Token"**
4. Выберите тип **"Automation"** (для CI/CD)
5. Скопируйте созданный токен

#### Добавление токена в GitHub:
1. Откройте репозиторий на GitHub
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **"New repository secret"**
4. Имя: `NPM_TOKEN`
5. Значение: вставьте NPM токен
6. Нажмите **"Add secret"**

### 2. Проверить права доступа к пакету
Убедитесь, что ваш NPM аккаунт имеет права на публикацию пакета `angular-datepicker2`.

## 🎯 Как работает автоматическая публикация

### Два варианта workflow:

#### 1. **publish.yml** - Простая публикация
- Срабатывает при push в main/master
- Проверяет изменение версии в package.json
- Публикует при изменении версии

#### 2. **release.yml** - Semantic Release (РЕКОМЕНДУЕТСЯ)
- Автоматически определяет тип изменений по commit сообщениям
- Автоматически увеличивает версию
- Генерирует CHANGELOG.md
- Создает GitHub Release
- Публикует в NPM

## 📝 Conventional Commits для автоматического версионирования

Используйте эти префиксы в commit сообщениях:

- `feat:` - новая функциональность → **minor** версия (1.0.0 → 1.1.0)
- `fix:` - исправление бага → **patch** версия (1.0.0 → 1.0.1)
- `perf:` - улучшение производительности → **patch** версия
- `refactor:` - рефакторинг → **patch** версия
- `docs:`, `style:`, `test:`, `chore:` - не влияют на версию

Для **major** версии добавьте `BREAKING CHANGE:` в описание коммита или используйте `!`:
```
feat!: change API structure
feat: add new feature

BREAKING CHANGE: API structure has changed
```

### Примеры commit сообщений:
```bash
feat: add date range selection feature
fix: resolve timezone calculation bug
docs: update README with new examples
chore: update dependencies
feat!: redesign component API (breaking change)
```

## 🚀 Процесс публикации

### Автоматическая публикация:
1. Сделайте изменения в коде
2. Commit с правильным префиксом (feat:, fix:, etc.)
3. Push в main/master ветку
4. GitHub Actions автоматически:
   - Запустит тесты
   - Определит новую версию
   - Соберет библиотеку
   - Опубликует в NPM
   - Создаст GitHub Release

### Ручная публикация:
```bash
# Обновить версию
npm run version:patch   # 1.0.0 → 1.0.1
npm run version:minor   # 1.0.0 → 1.1.0
npm run version:major   # 1.0.0 → 2.0.0

# Собрать и опубликовать
npm run publish:lib
```

## 🧪 Тестирование настройки

Запустите скрипт для проверки:
```bash
./scripts/test-publish.sh
```

Этот скрипт проверит:
- Структуру проекта
- Запустит тесты
- Соберет библиотеку
- Покажет готовность к публикации

## 📋 Чек-лист перед первой публикацией

- [ ] NPM_TOKEN добавлен в GitHub Secrets
- [ ] У вас есть права на публикацию пакета `angular-datepicker2`
- [ ] Тесты проходят успешно
- [ ] Библиотека собирается без ошибок
- [ ] Версия в package.json корректна

## 🔍 Мониторинг публикации

1. **GitHub Actions**: Проверяйте статус в разделе "Actions" репозитория
2. **NPM**: Новые версии появятся на https://www.npmjs.com/package/angular-datepicker2
3. **GitHub Releases**: Автоматически создаются релизы с changelog

## ❗ Важные моменты

- Версионирование происходит **автоматически** на основе commit сообщений
- Пакет публикуется **только при изменении версии**
- Используйте **conventional commits** для правильного версионирования
- Тесты **должны проходить** перед публикацией
- Можно запустить workflow **вручную** через GitHub Actions UI

## 🆘 Решение проблем

### Ошибка "npm ERR! 403 Forbidden"
- Проверьте NPM_TOKEN в GitHub Secrets
- Убедитесь, что токен имеет права на публикацию

### Ошибка "Version already exists"
- Увеличьте версию в package.json
- Или используйте semantic-release для автоматического версионирования

### Тесты не проходят
- Исправьте ошибки в тестах
- Workflow не будет публиковать пакет с падающими тестами