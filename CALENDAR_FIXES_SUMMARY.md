# Исправления обновления календаря при изменении weekStart и weekends

## Проблема
При изменении входных параметров `weekStart` и `weekends` календарь не обновлялся автоматически. Это происходило из-за отсутствия обработки этих изменений в методе `ngOnChanges` компонента.

## Внесенные изменения

### 1. AngularDatepicker2Component (`angular-datepicker2.component.ts`)

**Добавлены новые методы обработки изменений:**
```typescript
private _weekStart(simpleChange) {
  if (simpleChange.weekStart.currentValue !== simpleChange.weekStart.previousValue) {
    this.calendarService.setWeekStart(simpleChange.weekStart.currentValue);
    setTimeout(() => this.recountWidth(), 10);
  }
}

private _weekends(simpleChange) {
  if (simpleChange.weekends.currentValue !== simpleChange.weekends.previousValue) {
    this.calendarService.setWeekends(simpleChange.weekends.currentValue);
    setTimeout(() => this.recountWidth(), 10);
  }
}

private _disabledDates(simpleChange) {
  if (simpleChange.disabledDates.currentValue !== simpleChange.disabledDates.previousValue) {
    this.calendarService.setDisabledDates(simpleChange.disabledDates.currentValue);
    this.calendarService.getShownMonths(this.shownDate);
    setTimeout(() => this.recountWidth(), 10);
  }
}
```

**Обновлен метод ngOnChanges:**
```typescript
ngOnChanges(simpleChange) {
  simpleChange.viewMode && this._viewMode(simpleChange);
  simpleChange.selectMode && this._selectMode(simpleChange);
  simpleChange.shownDate && this._shownDate(simpleChange);
  simpleChange.weekStart && this._weekStart(simpleChange);
  simpleChange.weekends && this._weekends(simpleChange);
  simpleChange.disabledDates && this._disabledDates(simpleChange);
  simpleChange.days && this.calendarService.days.next(this.days);
  simpleChange.selectedDates && this.calendarService.setSelectedDates(this.selectedDates);
}
```

**Обновлена инициализация в ngOnInit:**
```typescript
this.calendarService.setWeekStart(this.weekStart);
this.calendarService.setWeekends(this.weekends);
```

### 2. CalendarService (`calendar.service.ts`)

**Добавлены реактивные субъекты:**
```typescript
// Add reactive subjects for weekStart and weekends
weekStartSubject = new BehaviorSubject<number>(0);
weekendsSubject = new BehaviorSubject<number[]>([0, 6]);
```

**Добавлены новые методы:**
```typescript
setWeekStart(weekStart: number) {
  if (this.weekStart !== weekStart) {
    this.weekStart = weekStart;
    this.weekStartSubject.next(weekStart);
    // Trigger calendar recalculation
    this.getShownMonths(this.shownDate);
  }
}

setWeekends(weekends: number[]) {
  if (!this.arraysEqual(this.weekends, weekends)) {
    this.weekends = weekends;
    this.weekendsSubject.next(weekends);
    // Trigger calendar recalculation
    this.getShownMonths(this.shownDate);
  }
}

private arraysEqual(a: number[], b: number[]): boolean {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
}
```

### 3. MonthViewComponent (`month-view.component.ts`)

**Добавлена подписка на изменения weekStart:**
```typescript
ngOnInit() {
  this.sub.add(
    this.calendarService.animationStep.subscribe((data) => {
      this.animationStep = data;
    })
  );

  // Subscribe to weekStart changes to recalculate weeks
  this.sub.add(
    this.calendarService.weekStartSubject.subscribe(() => {
      this.recalculateWeeks();
    })
  );

  this.recalculateWeeks();
}

private recalculateWeeks() {
  this.weeks = this.monthService.getMonth(this.date);

  let weekDays = [];
  for (let i = 0; i < 7; i++) {
    weekDays.push(DateUtils.adjustDate(this.weeks[0] as Date, i));
  }
  this.weekDays = weekDays;
}
```

### 4. DayService (`day.service.ts`)

**Добавлена подписка на изменения weekends:**
```typescript
constructor(private calendarService: CalendarService) {
  // Subscribe to weekends changes to update weekend status
  this.subscriptions.add(
    this.calendarService.weekendsSubject.subscribe(() => {
      // Trigger calendar recalculation when weekends change
      if (this.day && this.day.date) {
        this.updateWeekendStatus(this.day.date);
      }
    })
  );
}

private updateWeekendStatus(date: Date) {
  if (this.day) {
    this.day.isWeekEnd = this.calendarService.weekends.includes(date.getDay());
  }
}

ngOnDestroy() {
  this.subscriptions.unsubscribe();
}
```

## Преимущества внесенных изменений

1. **Реактивность**: Календарь теперь автоматически обновляется при изменении любых входных параметров
2. **Эффективность**: Обновление происходит только при реальных изменениях значений
3. **Современные подходы**: Использование RxJS BehaviorSubject для реактивного программирования
4. **Полнота**: Обработка всех важных параметров календаря (weekStart, weekends, disabledDates)
5. **Производительность**: Избежание ненужных пересчетов календаря

## Как тестировать

1. Запустите приложение: `npx ng serve`
2. Откройте браузер на `http://localhost:4200`
3. Измените параметр "weekStart" в выпадающем списке - календарь должен обновиться
4. Измените параметр "weekends" в выпадающем списке - календарь должен обновиться
5. Проверьте, что выходные дни правильно выделяются после изменения
6. Проверьте, что первый день недели изменяется при изменении weekStart

## Заключение

Все проблемы с обновлением календаря при изменении параметров `weekStart` и `weekends` были исправлены. Теперь календарь использует современные реактивные подходы и эффективно обновляется при любых изменениях входных параметров.