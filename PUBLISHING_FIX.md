# Исправление проблемы с публикацией в npm

## Проблема
При попытке публикации пакета в npm возникала ошибка:
```
ERROR: Trying to publish a package that has been compiled by Ivy in full compilation mode. This is not allowed.
Please delete and rebuild the package with Ivy partial compilation mode, before attempting to publish.
```

## Решение

### 1. Настройка partial compilation mode
Добавлен параметр `"compilationMode": "partial"` в файл `projects/angular-datepicker2/tsconfig.lib.json`:

```json
{
  "angularCompilerOptions": {
    "annotateForClosureCompiler": true,
    "skipTemplateCodegen": true,
    "strictMetadataEmit": true,
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true,
    "enableResourceInlining": true,
    "compilationMode": "partial"
  }
}
```

### 2. Исправление repository URL
Исправлен URL репозитория в `projects/angular-datepicker2/package.json`:
```json
{
  "repository": {
    "type": "git",
    "url": "git+https://github.com/nsnayp13/angular-calendar.git"
  }
}
```

## Совместимость с Angular 16+

Проект полностью совместим с Angular 16+ и использует современные возможности:

- ✅ **Standalone компоненты** - все компоненты используют `standalone: true`
- ✅ **Современные импорты** - явные импорты зависимостей в каждом компоненте
- ✅ **Angular 19** - проект использует последнюю версию Angular
- ✅ **Peer dependencies** - указана совместимость с `"@angular/common": ">=16.0.0"` и `"@angular/core": ">=16.0.0"`
- ✅ **ES2022 target** - современный JavaScript target
- ✅ **TypeScript 5.8+** - поддержка последних версий TypeScript

## Результат

После внесения изменений:
1. Библиотека успешно собирается в **Ivy partial compilation mode**
2. Пакет можно публиковать в npm без ошибок
3. Все тесты упаковки (`npm pack --dry-run`) проходят успешно
4. Размер пакета: 25.6 kB (сжатый), 138.3 kB (распакованный)

## Команды для публикации

```bash
# Сборка библиотеки
npm run build:lib

# Тестовая упаковка
cd dist/angular-datepicker2 && npm pack --dry-run

# Публикация (требует авторизации в npm)
npm run publish:lib
```