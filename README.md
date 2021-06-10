# Gilded Rose - JS/JEST

This is the Gilded Rose kata in JavaScript with Jest

## Description

A code kata that involves:

- writing unit tests for suitable test cases
- refactoring of legacy code into higher quality code
- implementing a new feature into the existing code

The original Gilded Rose Refactoring Kata repository:
https://github.com/kdolic/GildedRose-Refactoring-Kata

## Trello Board

Created Trello Board to document user stories, process/task breakdown:
https://trello.com/c/mvITGf3t/8-readmemd

## File/Function Structure

- GildedRoseRequirements.txt
  - file outlining the all requirements for this code kata
- test
  - gilded_rose.test.js
    - includes all written unit tests for each suitable test case outlined in the requirements
  - texttest_fixture.js
    - includes examples of items from the Gilded Rose shop, along with information on properties of Item, Shop
- src
  - gilded_rose.js
    - Functions:
      - updateQuality - function that loops through the shop's items and calculates if an item's quality/sellIn properties update based on functions passed in or conditional logic
      - sellInDecrease - function that decreases sellIn property by 1 if item name is not 'Sulfuras, Hand of Ragnaros'
      - qualityDecrease - function that decreases quality property by 1 of an item if: quality greater than 0, item isn't 'Sulfuras, Hand of Ragnaros', item is 'Conjured Mana Cake'
      - qualityIncrease - function that increases quality property by 1 of an item if it is 'Aged Brie' or 'Backstage passes' (more conditions in code)
      - sellInExpiredQualityUpdate - function that updates the quality property if the sellIn property is less than 0

## Screenshots

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```
