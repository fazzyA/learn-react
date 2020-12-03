var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10
};

alert(plan1.name);
//alert(plan1.discount);

plan1.discount = 20;

alert(plan1.discount);

delete plan1.pages;

alert(plan1.pages);
//////////////////////////
var plan2 = {
    name: "ADV",
    price: 34.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    calculateAnnualPrice : function (a,b){
        return a*b;
    }
};

// var plan1 ={
//     name:'value',
// }
var annual = plan2.calculateAnnualPrice(3.99,12)
alert(annual);
///////////////constructors
function Plan(name, price, space, transfer, pages) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    };
 Plan.prototype.calculateCharges = function (months){
    return this.price * months;
};
//alert(plan1.hasOwnProperty("calculateCharges"));

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);

alert(plan1.price);
var charges = plan1.calculateCharges(8);
alert(charges);
///////////////
function Student(name, age){
    this.name = name;
    this.age = age;
}

var b = new Student("Arsalan",20);
var c = new Student("Ali",25);
var d = new Student("Usman",30);
alert(b.name);
alert(c.name);
alert(d.name);
alert(b.hasOwnProperty("name"));
///////////////////////