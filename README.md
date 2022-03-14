# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tfarles/lotide`

**Require it:**

`const _ = require('@tfarles/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`assertArraysEqual(arr1, arr2):` Print assertion of equality between two arrays
`assertEqual(actual, expected):` Print assertion of equality between values.
`assertObjectsEqual(actual, expected):` Print assertion of equality between two objects.
`countLetters(str):` Return an object with letter count
`countOnly(allItems, itemsToCount):` With a given array only counts values that have a 'true value.
`eqArrays(arr1, arr2):` returns true if two arrays are deeply equal
`eqObjects(object1, object2):` returns true if two objects are deeply equal
`findKey(obj, cb):` return key from object whose value satisfies cb function
`findKeyByValue(object, value):` return key from object whose value is equal to input value.
`flatten(array):` flattens an array with nested values.
`head(actual):` Return the head element of an array.
`letterPostions(sentence):` returns an object with the index of each letter
`middle(array):` Return the middle elements of an array.
`tail(arr):` Return the tail element of an array. 
`takeUntil(arr, cb):` returns an array that contains elements up until cb function.
`without(source, itemsToRemove):` removes unwanted elements.


module.exports = {
  assertArraysEqual,
  assertEqual,
  // countLetters,
  // countOnly,
  eqArrays,
  // eqObjects,
  // findKey,
  // findKeyByValue,
  // flatten,
  head,
  // letterPostions,
  middle,
  tail,
  // takeUntil,
  // without,
};
