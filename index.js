


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

// Step 0: Require datejs
const datejs = require('datejs');

// Step 1: Create combineUsers function
function combineUsers(...args) {
    // Step 2: Initialize the return object
    const combinedObject = {
        users: []
    };

    // Step 3 & 4: Loop through args and merge arrays
    for (const userArray of args) {
        combinedObject.users.push(...userArray);
    }

    // Step 5: Add today's date
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    // Step 7: Return object
    return combinedObject;
}

// Example usage:
const result = combineUsers(
    ['alice', 'bob'],
    ['carol', 'dave'],
    ['eve']
);

console.log(result);