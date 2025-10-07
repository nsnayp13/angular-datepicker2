#!/bin/bash

# Скрипт для тестирования процесса публикации локально

echo "🔍 Проверка настройки проекта для публикации в NPM..."

# Проверяем наличие необходимых файлов
if [ ! -f "projects/angular-datepicker2/package.json" ]; then
    echo "❌ Не найден package.json библиотеки"
    exit 1
fi

if [ ! -f ".github/workflows/publish.yml" ] && [ ! -f ".github/workflows/release.yml" ]; then
    echo "❌ Не найдены GitHub Actions workflows"
    exit 1
fi

echo "✅ Структура проекта корректна"

# Проверяем версию в package.json
CURRENT_VERSION=$(node -p "require('./projects/angular-datepicker2/package.json').version")
echo "📦 Текущая версия: $CURRENT_VERSION"

# Устанавливаем зависимости
echo "📥 Установка зависимостей..."
npm install

# Запускаем тесты
echo "🧪 Запуск тестов..."
npm run test-once

if [ $? -ne 0 ]; then
    echo "❌ Тесты не прошли"
    exit 1
fi

echo "✅ Тесты прошли успешно"

# Собираем библиотеку
echo "🔨 Сборка библиотеки..."
npm run build:lib

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке библиотеки"
    exit 1
fi

echo "✅ Библиотека собрана успешно"

# Проверяем содержимое dist папки
if [ -d "dist/angular-datepicker2" ]; then
    echo "📁 Содержимое dist/angular-datepicker2:"
    ls -la dist/angular-datepicker2/
    
    # Проверяем наличие основных файлов
    if [ -f "dist/angular-datepicker2/package.json" ]; then
        DIST_VERSION=$(node -p "require('./dist/angular-datepicker2/package.json').version")
        echo "📦 Версия в собранном пакете: $DIST_VERSION"
    fi
else
    echo "❌ Папка dist/angular-datepicker2 не найдена"
    exit 1
fi

echo ""
echo "🎉 Проект готов к публикации!"
echo ""
echo "Следующие шаги:"
echo "1. Настройте NPM_TOKEN в GitHub Secrets"
echo "2. Сделайте commit с conventional commit сообщением (feat:, fix:, etc.)"
echo "3. Push в main/master ветку"
echo "4. GitHub Actions автоматически опубликует пакет"
echo ""
echo "Для ручной публикации выполните:"
echo "  npm run publish:lib"