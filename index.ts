const name = 'Jonghyun'
    , age = 40
    , gender = "male";

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you ar ${age}, you are ${gender? gender:'unknown'}`);
}

sayHi(name, age);

export {}