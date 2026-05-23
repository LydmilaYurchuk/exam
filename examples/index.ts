import { Singleton } from '../src/creational/singleton/singleton';

function runSingletonExample() {
    console.log("--- Старт демонстрації Singleton ---");

    // Спроба отримати екземпляр перший раз
    const s1 = Singleton.getInstance();
    s1.setValue(42);
    console.log(`s1 значення: ${s1.getValue()}`); // Виведе 42

    // Спроба отримати екземпляр другий раз
    const s2 = Singleton.getInstance();
    console.log(`s2 значення (одразу після отримання): ${s2.getValue()}`); // Теж виведе 42!

    // Змінюємо значення через s2
    s2.setValue(100);

    // Перевіряємо, чи змінилося воно в s1
    console.log(`Перевірка s1 після зміни в s2: ${s1.getValue()}`); // Виведе 100

    // Перевіряємо, чи s1 і s2 — це один і той самий об'єкт в пам'яті
    if (s1 === s2) {
        console.log("Успіх: Змінні s1 та s2 посилаються на один і той самий екземпляр класу!");
    } else {
        console.log("Помилка: Об'єкти різні.");
    }
}

// Запуск прикладу
runSingletonExample();