# 📝 Примеры правильных коммитов для semantic-release

## 🎯 Подход 1: Подписывать merge коммиты (текущий)

### Feature ветка:
```bash
git commit -m "добавил темную тему"
git commit -m "исправил баги"
git commit -m "обновил тесты"
```

### При мердже PR:
```bash
# ✅ Правильно:
"feat: Merge pull request #63 from feature/dark-theme"
"fix: Merge pull request #64 from bugfix/calendar-issue"

# ❌ Неправильно:
"Merge pull request #63 from feature/dark-theme"  # Без префикса
```

**Результат:** semantic-release увидит `feat:` в merge коммите → minor версия

---

## 🚀 Подход 2: Подписывать коммиты в ветках (рекомендуемый)

### Feature ветка:
```bash
git commit -m "feat: добавил темную тему"
git commit -m "fix: исправил баг с календарем" 
git commit -m "test: добавил тесты для новой функции"
```

### При мердже PR (без префикса):
```bash
"Merge pull request #63 from feature/dark-theme"
```

**Результат:** semantic-release увидит `feat:` и `fix:` в истории → minor версия

---

## 📊 Что semantic-release анализирует:

### Все коммиты с последнего релиза:
```bash
git log v3.4.3..HEAD --oneline
```

### Semantic-release ищет:
- `feat:` → minor версия (1.0.0 → 1.1.0)
- `fix:` → patch версия (1.0.0 → 1.0.1)  
- `feat!:` или `BREAKING CHANGE:` → major версия (1.0.0 → 2.0.0)
- `docs:`, `style:`, `test:` → НЕ меняет версию

---

## 🎯 Рекомендация:

### Используйте Подход 2 (коммиты в ветках):

1. **В feature ветке делайте правильные коммиты:**
   ```bash
   git commit -m "feat: добавил поддержку Angular 19"
   git commit -m "fix: исправил баг с выбором даты"
   git commit -m "docs: обновил README"
   ```

2. **При создании PR используйте обычный merge:**
   ```bash
   "Merge pull request #65 from feature/angular19-support"
   ```

3. **Semantic-release автоматически:**
   - Найдет `feat:` коммит → определит minor версию
   - Найдет `fix:` коммит → учтет в changelog
   - Проигнорирует `docs:` коммит

### Настройка GitHub для автоматических merge коммитов:

В настройках репозитория → Settings → General → Pull Requests:
- ✅ Allow merge commits
- ✅ Allow squash merging  
- ✅ Allow rebase merging

**Выберите стратегию по умолчанию:** "Create a merge commit"

---

## 🔄 Миграция с текущего подхода:

Если хотите перейти на Подход 2:
1. Начните делать правильные коммиты в feature ветках
2. При мердже используйте обычные merge коммиты без префиксов
3. Semantic-release будет анализировать коммиты из веток

**Оба подхода работают!** Выберите тот, который удобнее для команды.