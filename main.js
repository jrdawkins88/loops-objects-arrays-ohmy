
var amanda = {
	firstName:'Amanda',
	lastName:'Harris',
	age: 42,
	gender:'F',
	children:[
		{
			name: 'Ben',
			age: 18,
			gender: 'M'
		},
		{
			name: 'Lisa',
			age: 15,
			gender: 'F'
		},
	]
};

var brian = {
	firstName:'Brian',
	lastName:'Hall',
	age: 36,
	gender:'M',
	children:[
		{
			name: 'Erica',
			age: 11,
			gender: 'F'
		},
		{
			name: 'Jenny',
			age: 8,
			gender: 'F'
		},
	]
};

var terrence = {
	firstName:'Terrence',
	lastName:'Smith',
	age: 49, 
	gender:'M',
	children:[
		{
			name:'David',
			age: 17,
			gender: 'M'
		},
		{	name: 'Alex',
			age: 23,
			gender: 'F'
		},
		{	name: 'Joe',
			age: 25,
			gender: 'M'
		},
	]
};

var alyssa = {
	firstName: 'Alyssa',
	lastName: 'Ingram ',
	age: 28, 
	gender: 'F',
	children:[
		{
			name: 'Jamie',
			age: 3,
			gender: 'F'
		},
		{
			name: 'Lori',
			age: 2,
			gender: 'F'
		},
	]
}; 

var people = [amanda, brian, terrence, alyssa];

// // Exercise 1 - Add a child with a name and age to each parent. 
// amanda.children[amanda.children.length] = { name: 'Josh', age: 18, gender: 'F' };
// brian.children[brian.children.length] = { name: 'Timmy', age: 4, gender: 'M' };
// terrence.children[terrence.children.length] = { name: 'Lil T', age: 5, gender: 'M' };
// alyssa.children[alyssa.children.length] = { name: 'Zoey', age: 4, gender: 'F' };

// // Exercise 2 increasing the age of each 'M' parent by five years
// for (var i = 0; i < people.length; i++) {
// 	 if (people[i].gender ==='M') {
// 	 	people[i]['age'] += 5; 
// 	 } 
// 	console.log(people[i].firstName, people[i].age);
// }
// // // Exercise 3 
// var ageSum = 0; 
// var averageAge; 

// for (var i = 0; i < people.length; i++) {
// 	ageSum += people[i].age;
// }
// averageAge = ageSum / people.length;
// console.log('average age :', averageAge);

// // // Exercise 4
// for (var i = 0; i < people.length; i++) {
// 	for (var j = 0; j < people[i].children.length; j++) {
// 		console.log(people[i].children[j].name + '(' + people[i].children[j].age + ',' + people[i].children[j].gender + ')');
// 	}
// 	// console.log(people[i].children);
// }
// Exercise 5

var maleSum = 0;
var maleCount = 0;
var femaleSum = 0;
var femaleCount = 0;

for (var i = 0; i < people.length; i++) {
	for (var j = 0; j < people[i].children.length; j++) {
		if (people[i].children[j].gender === 'M') {
			maleSum += people[i].children[j].age;
			maleCount++;
		} else if (people[i].children[j].gender === 'F' && people[i].children[j].age < 12) {
			femaleSum += people[i].children[j].age;
			femaleCount++;
		}
	}
}

var averageAge = maleSum / maleCount;
console.log(averageAge);

var averageFemale = femaleSum / femaleCount;
console.log(averageFemale);

