// 1
const student = { 
    name: "Ivan", 
    age: 21, 
    skills: ["js", "css"] 
};

const {name, age} = student;
console.log(name); 
console.log(age);

const [skills1, skills2] = student.skills;
console.log(skills1);
console.log(skills2);

function printStudent({name, age}) {
    console.log(`Student ${name}, age ${age}`);
}   

printStudent(student);

// 2

function sumAndMultiply(first, ...numbers) {
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }

  return sum * first
}

console.log(sumAndMultiply(2, 1, 2, 3)) // 12
console.log(sumAndMultiply(5, 10, 20)) // 150


// 3
const arrayFirst = [4, 5, 6]
const arraySecond = [1, 2]
const arrayThird = [9, 10]
const arrayFourth = [3]
const arrayFiveth = [7, 8]

const newArray = [...arraySecond, ...arrayFourth, ...arrayFirst, ...arrayFiveth, ...arrayThird]

console.log(newArray) 