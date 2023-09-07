# json_creator
A little code that turns string lists into an formatted json

## Instructions:
1. Open your terminal in the root directory and run npm init;
2. Open config.js and put the string and you want (as many objects as well);
3. Put the operations you want to act on the data (allow multiples operators in the array)
4. Run node index.js
5. The code will create the jsons folder and the build.json file

## Operations:
1 = Remove blank spaces <br>
2 = Remove numerals <br>
3 = Remove special characters or punctuation <br>

## Example config.js Input:
```javascript
module.exports = dataConfig = {
    column1: {
        operations: [1, 2, 3],
        name: "First Name",
        data:
        `
            1	Miguel	1	Sophia
            2	Davi	2	Alice
            3	Arthur	3	Julia
        `
    },
}
```
## Example build.json Output:
```json
[
    {
        "name": "First Name",
        "data": [
            "Miguel",
            "Sophia",
            "Davi",
            "Alice",
            "Arthur",
            "Julia"
        ]
    },
]
