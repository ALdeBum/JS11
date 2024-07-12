// JavaScript код для работы с маркерами
class SimpleMarker {
    constructor(color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
    }

    print(text) {
        let printedText = '';
        for (let i = 0; i < text.length; i++) {
            if (this.inkAmount > 0) {
                if (text[i] !== ' ') {
                    this.inkAmount -= 0.5;
                }
                printedText += text[i];
            } else {
                console.log('Маркер закончил чернила!');
                break;
            }
        }
        console.log('%c' + printedText, `color: ${this.color}`);
    }
}

class RefillableMarker extends SimpleMarker {
    constructor(color, inkAmount) {
        super(color, inkAmount);
    }

    refill(amount) {
        if (this.inkAmount + amount <= 100) {
            this.inkAmount += amount;
            console.log(`Маркер успешно заправлен. Текущее количество чернил: ${this.inkAmount}%`);
        } else {
            console.log('Нельзя заправить маркер более 100% чернил.');
        }
    }
}

// Создаём экземпляры маркеров
let simpleMarker = new SimpleMarker('red', 50);
let refillableMarker = new RefillableMarker('blue', 70);

// Функции для обработки событий кнопок
function printSimpleMarker() {
    simpleMarker.print('Hello, world! Этот текст напечатан простым маркером.');
}

function printRefillableMarker() {
    refillableMarker.print('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
}

function refillMarker() {
    let refillAmount = parseInt(document.getElementById('refillAmount').value);
    if (!isNaN(refillAmount)) {
        refillableMarker.refill(refillAmount);
    } else {
        console.log('Введите корректное количество чернил для заправки.');
    }
}
