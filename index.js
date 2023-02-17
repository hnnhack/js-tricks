let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]

/* 
You can now filter the array of objects using the age to return a new array 
whose age is greater than 40 and whose occupation is equal to programmer:
*/


/*
Solution 1 
*/

let filteredUsers = [];
for (let i= 0; i<users.length; i++) {
    if (users[i].age > 40 && users[i].occupation === 'programmer' ) {
        filteredUsers = [...filteredUsers, users[i]];
    }
}
console.log(filteredUsers);