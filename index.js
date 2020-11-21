'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Returns <value> unchanged 
 * @param: {*} value: the value to be returned        //astric means it can be any possible datatype(you need to specify it cant)
 * @returns:{*} Returns the value unchagned 
 */
 
 function identity(value){
      //input: any value
    //output: that value unchagned 
    //constraints: n/a
    //edge cases: n/a
    return value;
 }
 
 module.exports.each = identity; 
 
 
 /**
 * typeOf: The typeof operator returns a string indicating the type of the unevaluated operand.
 * 
 * @param {*} value (operand): An expression representing the object or primitive whose type is to be returned. 
 * 
 */
function typeOf(value){
if(Array.isArray(value)) {
    return "array"; 
} else if (value === null) {
    return "null"; 
}
return typeof value; 
  };

module.exports.each = typeOf;


/**
 * first: Returns the first element of an array
 * 
 * @param {array} array: An expression representing the object or primitive whose type is to be returned. 
 * @param {number} number: Passing number will return the first number elements of the array.
 */
function first(array,number) {
    let arr = [];
    if (!Array.isArray(array)) {
        return [];
    } else if (typeof number !== 'number') {
        return array[0];
    } else {
        return array.splice(0, number); 
    }
}; 

module.exports.each = first;


 /**
 * last: Returns the last element of an array
 * 
 * @param {array} array: An expression representing the object or primitive whose type is to be returned. 
 * @param {number} number: Passing number will return the last number elements of the array.
 */
function last(array, number) {
    if(!Array.isArray(array) || number < 0) {
        return []; 
    }else if (typeof number !== "number"){
        return array[array.length - 1]
    } else if (number > array.length){
        return array; 
    } else {
        return array.slice(array.length - number); 
    }
}

module.exports.each = last; 


 /**
 * indexOf: Returns the index at which value can be found in the array, or -1 if value is not present in the array.
 * 
 * @param {array} array: Array to be searched.
 * @param {*} value: Value that you want to locate in array
 */
function indexOf(array, value){
     for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    } return -1;
};

module.exports.each = indexOf;


/**
 * contains: Returns true if the value is present in the list.
 * 
 * @param {array} array: Array to be searched.
 * @param {*} value: Value that you want to locate in array
 */
function contains(array, value){ 
    array.includes(value) ? true : false; 
}
module.exports.each = contains; 


/**
 * unique: Return a new array of all elements from <array> with duplicates removed
 * 
 * @param {array} array: Array to be searched to be searched for duplicates.
 */
function unique(array){
    return array.filter((a, b) => array.indexOf(a) === b);
}
module.exports.unique = unique;


/**
 * filter: filter creates a new array with all elements that pass the test implemented by the provided function.
 * 
 * @param {array} array: The array filter is to be called apon. 
 * @param {func} function: function to be called on each element in the array. 
 */
function filter(array, func) {
    const arr = []; // empty array
    // loop though array
    for (let i = 0; i < array.length; i++) {
         let result = func(array[i], i, array);
        // push the current element if result is true
        if(result) {
        arr.push(array[i]);
        }
    } return arr;
};

module.exports.unique = filter; 


/**
 * reject: Returns the values in list without the elements that the truth test (predicate) passes.
 * 
 * @param {array} array: The array filter is to be called apon. 
 * @param {func} function: function to be called on each element in the array. 
 */
function reject(a, func) {
const newArr = []; 
each(a, function(elem, index, a){
    let result = func(elem, index, a);
    if(result !== true) {
        newArr.push(elem);
    }
});
return newArr; 
};

module.exports.unique = reject; 


/**
 * partition: Split list into two arrays: one whose elements all satisfy function predicate and one whose elements all do not satisfy function predicate.
 * 
 * @param {array} array: The array filter is to be called apon. 
 * @param {func} function: function to be called on each element in the array. 
 */
function partition(array, func) {
    let newArr =[[], []];
    filter(array, function(e, k, a){
        let result = func(e, k, a);
        if(result === true){
            newArr[0].push(e);
        } else if (result === false){
            newArr[1].push(e);
        }
    }); return newArr;
};

module.exports.unique = partition; 


/**
 * map: Produces a new array of values by mapping each value in list through a transformation function (iteratee).
 * 
 * @param {array or object} collection: The collection that contais the elements that the function is to be called apon. 
 * @param {func} function: function to be called on each element in the array. 
 */
function map(collection, func) {
    let resultArr = []; 
    each(collection, function(e, i, a){
        resultArr.push(func(e, i, a));
    });
    return resultArr; 
}; 

module.exports.unique = map; 


/**
 * pluck: extracts a list of property values.
 * 
 * @param {array or object} collection: The collection that contains the properties you would like to access
 * @param property: property that you want to access the values of. 
 */
function pluck(array, prop) {
    let newArr = [];
    map(array, function(e, i, a){
        newArr.push(array[i][prop]);
    }); return newArr;
};

module.exports.unique = pluck; 


/**
 * every: Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found
 * 
 * @param {array or object} collection: The collection that contains the elements that the truthy falsy function will be called on
 * @param {function}: function: function to be called on each element in the array. 
 */
function every(collect, func) {
    let result = true; 
    each(collect, function(e, i, c){
        if(typeof func === "function"){
            if(!func(e, i, c)){
                result = false;
            }
        }
        else if (!e){
            result = false; 
        }
            
        });
        return result; 
        
    };

module.exports.unique = every; 


/**
 * every: Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found.
 * 
 * @param {array or object} collection: The collection that contains the elements that the truthy falsy function will be called on
 * @param {function}: function: function to be called on each element in the array. 
 */
function some(collection, func) {
    let result = false;
    each(collection, function(e, i, c){
        if(typeof func === 'function'){
            if(func(e, i, c)){
                result = true;
            }
        } else if(e){
            result = true;
        }
    });
    return result;
};

module.exports.unique = some; 


/**
 * reduce: reduce executes a reducer function (that you provide) on each element of the array, resulting in single output value.
 * 
 * @param {array} collection: The collection that contains the elements that the function is to be called on
 * @param {function}: function: function to be called on each element in the array. 
 * @param {seed} number: A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the
 * first element in the array will be used as the initial accumulator value and skipped as currentValue
 */
function reduce(array, func, seed){
  let previousResult;
  if(seed !== undefined){
    previousResult = seed;
    each(array, function (e,i,a){
      previousResult = func(previousResult, e, i,a);
    });
  }else {
    previousResult = array[0];
    for (let i = 1; i < array.length; i++){
      previousResult = func(previousResult, array[i], i, array);
    }
  }
  return previousResult;
}; 

module.exports.unique = reduce;


/**
 * extend: Shallowly copy all of the properties in the source objects over to the destination object, and return
 * the destination object. Any nested objects or arrays will be copied by reference, not duplicated. It's in-order,
 * so the last source will override properties of the same name in previous arguments.
 * 
 * @param {object} collection: the destination object 
 * @param {object} collection: sources to get the information from that will be added to the 1st object. 
 */
const extend = (obj1, ...obj2) => Object.assign(obj1, ... obj2); 

module.exports.unique = extend;