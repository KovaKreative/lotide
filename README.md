# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kovakreative/lotide`

**Require it:**

`const _ = require('@kovakreative/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays(array1, array2)`: Takes two arrays as parameters and goes through them comparing lengths, and the values at each index value. Evaluates if there are any differences between them and returns true or false.
* `eqObjects(object1, object2)`: Takes two objects as parameters and goes through them, comparing keys and values. Evaluates if there are any differences between two objects and returns true or false.
* `assertArraysEqual(array1, array2)`: Takes two arrays as parameters and goes through them comparing lengths, and the values at each index value. Evaluates if there are any differences between them and prints to console the results of the evaluation as well as returns true or false.
* `assertObjectsEqual(object1, object2)`: Takes two objects as parameters and goes through them, comparing keys and values. Evaluates if there are any differences between two objects and prints to console the results of the evaluation as well as returns true or false.
* `assertEqual(actual, expected)`: Takes two primitives as parameters and does a strict comparison to see if they're identical. Prints the results to console and returns true or false.
* `findKey(object, value)`: Takes in an object, goes through it, searching for the passed in value, and returning the key name as a string, for the first matching value. Returns undefined if no key has the value specified.
* `findKey(object, callback)`: Takes in an object, goes through it and performs a callback function which takes in the value as a parameter. Returns the key whose value returns true as per the callback function, or undefined if no key is found.
* `flatten(array)`: Takes in a multi-dimensional array and flattens it, bringing all the values into one single, continuous array. Works with multiple layers of arrays.
* `head(array)`<a id = 1.1></a>: Takes in an array and returns the first (index 0) item of that array.
* `middle(array)`: Takes in an array. If the array has 3 or more elements returns the middle item. If it has an even number of items, returns two of the middle items. If the array has fewer than 3 items, an empty array is returned.
* `tail(array)`: Lops off the [head](#1.1) of the array, returning a new array with all the values except for the one that was originally located at index 0.
* `takeUntil(array, callback)`: Returns a copy of the array from the beginning, until (and not including) the condition stated in the callback function.
* `without(sourceArray, itemsToRemove)`: Takes in two arrays, iterates through the sourceArray and removes any items that are listed in the itemsToRemove array. Returns a new array which omits only the items listed in the second parameter.