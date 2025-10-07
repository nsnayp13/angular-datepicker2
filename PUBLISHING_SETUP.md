# Настройка автоматической публикации

## Требуемые секреты в GitHub

### NPM_TOKEN
1. Войдите в [npmjs.com](https://www.npmjs.com/)
2. Перейдите в настройки профиля → Access Tokens
3. Создайте новый токен с правами "Automation"
4. Добавьте его как секрет `NPM_TOKEN` в настройках GitHub репозитория

## Настройка GitHub Pages

1. В настройках репозитория: Pages → Source: "GitHub Actions"

## Автоматическая публикация

При пуше в `main`/`master`:
- Выполняются тесты и сборка
- Semantic-release анализирует коммиты
- При наличии изменений создается новая версия
- Публикуется в npm и деплоится демо на GitHub Pages

## Формат коммитов

- `feat:` - новая функциональность (minor версия)
- `fix:` - исправление бага (patch версия)  
- `BREAKING CHANGE:` - breaking changes (major версия)

## Ручная публикация

```bash
npm run build:lib
cd dist/angular-datepicker2
npm publish
```