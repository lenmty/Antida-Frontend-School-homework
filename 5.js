// Написать функцию-конструктор, создающую объект прямоугольника.
// Объект должен иметь: размеры сторон, единицы измерения (например “см.”), метод, 
// возвращающий информацию о прямоугольнике в формате “ширина: 100 см., высота: 100 см.”.
// Написать функции: getArea - расчет площади, getPerimetr - расчет периметра прямоугольника.
// Создать объект прямоугольника и вывести в консоль: информацию о нём, площадь и периметр,
// используя getArea и getPerimetr (использовать call, apply или bind).


function Rectangle(a, b){
    this.a = a;
    this.b = b;
    this.measure = "см."

    this.getInfo = function(){ 
        return `Ширина: ${a} см., высота: ${b} см.` 
    };
}

function getArea(){
    return `Площадь: ${this.a * this.b} ${this.measure}`;
}

function getPerimeter(){
    return `Периметр: ${(this.a + this.b) * 2} ${this.measure}`;
}

let rect = new Rectangle(5, 10);
console.log("Создан прямоугольник.", rect.getInfo());
console.log(getArea.call(rect), getPerimeter.call(rect));

// let getRectArea = getArea.bind(rect);
// let getRectPerimeter = getPerimeter.bind(rect)
