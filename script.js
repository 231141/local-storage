// Store data in Local Storage
localStorage.setItem('username', 'user123');
localStorage.setItem('theme', 'dark');
// Retrieve data from Local Storage
const username = localStorage.getItem('username');
console.log(username);  // Output: user123

const theme = localStorage.getItem('theme');
console.log(theme);  // Output: dark
// Remove a specific item
localStorage.removeItem('username');
// Clear all items in Local Storage
localStorage.clear();
// Store an object
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieve the object
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name);  // Output: John
