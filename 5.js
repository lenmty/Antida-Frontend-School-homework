// Написать функцию-конструктор, создающую объект прямоугольника.
// Объект должен иметь: размеры сторон, единицы измерения (например “см.”), метод, 
// возвращающий информацию о прямоугольнике в формате “ширина: 100 см., высота: 100 см.”.
// Написать функции: getArea - расчет площади, getPerimetr - расчет периметра прямоугольника.
// Создать объект прямоугольника и вывести в консоль: информацию о нём, площадь и периметр,
// используя getArea и getPerimetr (использовать call, apply или bind).


function Rectangle(a, b, measure="см"){
    this.a = a;
    this.b = b;
    this.measure = measure;

    this.getInfo = function(){ 
        return `Ширина: ${this.a} ${this.measure}, высота: ${this.b} ${this.measure}.` 
    };
}

function getArea(){
    return this.a * this.b;
}

function getPerimeter(){
    return (this.a + this.b) * 2;
}

let rect = new Rectangle(5, 10);
console.log("Создан прямоугольник.", rect.getInfo());
console.log(`Площадь: ${getArea.call(rect)}, периметр: ${getPerimeter.call(rect)}`);

// let getRectArea = getArea.bind(rect);
// let getRectPerimeter = getPerimeter.bind(rect)
