const getName = () => {  // array function 
    return "Fariha";
}

/* shudhu ekta jinishke export korte chaile , 
  
exports.getName = () => {
    return "Fariha";
}
  
*/

const getAge = () => {
    return 22;
}

const cgpa = 3.50;

//exports.name = getName;
//exports.result = cgpa;

// bar bar exports use na kore module use kore ekbare shob export kora jai.

 module.exports = { name: getName, age: getAge, result: cgpa};
