# Инструкция по деплою на GitHub Pages

## Автоматический деплой

Проект настроен для автоматического деплоя на GitHub Pages при каждом push в ветку `master` или `main`.

### Что происходит автоматически:

1. **При push в master/main ветку:**
   - Устанавливаются зависимости
   - Собирается библиотека `angular-datepicker2`
   - Собирается демо-приложение для GitHub Pages
   - Деплоится на GitHub Pages (ветка `gh-pages`)
   - Публикуется в NPM (если настроены токены)

### Настройка GitHub Secrets

Для корректной работы автоматического деплоя нужно настроить следующие секреты в GitHub:

1. **GITHUB_TOKEN** - автоматически создается GitHub (не требует настройки)
2. **NPM_TOKEN** - токен для публикации в NPM (опционально)

#### Как добавить секреты:
1. Перейдите в Settings → Secrets and variables → Actions
2. Нажмите "New repository secret"
3. Добавьте необходимые токены

### Структура проекта

```
/workspace/
├── .github/workflows/nodejs.yml  # GitHub Actions workflow
├── src/                          # Демо-приложение
├── projects/angular-datepicker2/  # Библиотека
├── dist/
│   ├── angular-datepicker2/      # Собранная библиотека
│   └── angular-datepicker/       # Собранное демо для GitHub Pages
└── package.json
```

## Ручной деплой

Если нужно задеплоить вручную:

### 1. Установка зависимостей
```bash
npm install --legacy-peer-deps
```

### 2. Сборка библиотеки
```bash
npm run build angular-datepicker2
```

### 3. Сборка демо для GitHub Pages
```bash
npm run build:gh-pages
```

### 4. Деплой на GitHub Pages (вручную)
```bash
# Установить gh-pages если не установлен
npm install -g gh-pages

# Задеплоить
gh-pages -d dist/angular-datepicker
```

## Команды package.json

- `npm start` - запуск dev сервера
- `npm run build` - сборка основного приложения
- `npm run build angular-datepicker2` - сборка библиотеки
- `npm run build:gh-pages` - сборка демо для GitHub Pages
- `npm test` - запуск тестов
- `npm run lint` - проверка кода

## Требования

- **Node.js**: 20+
- **Angular CLI**: 19+
- **TypeScript**: ~5.8.3 (совместимость с Angular 19)

## Troubleshooting

### Проблема с TypeScript версией
Если возникают ошибки с версией TypeScript, убедитесь что используется версия ~5.8.3:
```bash
npm install typescript@~5.8.3 --save-dev
```

### Проблема с zone.js
Если возникают ошибки с zone.js, убедитесь что в `src/polyfills.ts` используется:
```typescript
import 'zone.js';  // Не 'zone.js/dist/zone'
```

### Проблема с peer dependencies
Используйте флаг `--legacy-peer-deps` при установке:
```bash
npm install --legacy-peer-deps
```

## URL демо

После успешного деплоя демо будет доступно по адресу:
https://nsnayp13.github.io/angular-datepicker2/

## Обновление демо

Чтобы обновить демо на GitHub Pages:
1. Внесите изменения в код
2. Сделайте commit и push в ветку master/main
3. GitHub Actions автоматически соберет и задеплоит обновленную версию

Процесс займет 2-3 минуты после push.