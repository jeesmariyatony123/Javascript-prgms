str = "Company Name"
console.log(`total character count of str: ${str.length}`);
substring = str.substring(0, 4)
console.log(`Sub string of str: ${substring}`);
console.log(`check str starts with 'c': ${str.startsWith('Com')}`);
console.log(`check str end with 'me': ${str.endsWith('me')}`);
console.log(`After applying slice: ${str.slice(0, -5)}`);
console.log(str.split(' '));
console.log(str.split(''));
newStr = "   Monday    "
console.log(`total character count of str: ${newStr.length}`);
console.log(`total character count of str after trim(): ${newStr.trim().length}`);
console.log(`str in small letter: ${str.toLowerCase()}`);
console.log(`str in small letter: ${str.toUpperCase()}`);

