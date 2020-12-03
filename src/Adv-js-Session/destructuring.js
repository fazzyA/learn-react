// let name = 'hira';
// let batch = '2';
// let city = 'sukkur';

// Object Destructuring

const student = {
    name: 'faiza',
    batch: '1',
    city: 'karachi'
};

const { name, batch, city } = student;

// const { name, batch, city='sam' } = student; //1

//({ name, batch, city } = student); //2

console.log(name, batch, city);
