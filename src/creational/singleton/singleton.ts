export class Singleton {
    // 1. Створюємо приватне статичне поле для зберігання єдиного екземпляру
    private static instance: Singleton | null = null;

    // Тимчасові дані всередині класу для демонстрації (наприклад, лічильник)
    private value: number = 0;

    // 2. Робимо конструктор ПРИВАТНИМ. 
    // Це забороняє створювати об'єкт через "new Singleton()" ззовні класу.
    private constructor() {
        console.log("Конструктор викликано! Створено єдиний екземпляр Singleton.");
    }

    // 3. Статичний метод, який контролює доступ до екземпляру.
    public static getInstance(): Singleton {
        // Якщо об'єкта ще немає — створюємо його
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }
        // Якщо вже є — просто повертаємо існуючий
        return Singleton.instance;
    }

    // Методи для роботи з даними всередині об'єкта
    public setValue(newValue: number): void {
        this.value = newValue;
    }

    public getValue(): number {
        return this.value;
    }
}