# 📚 Media Library System

This project implements a simple **Media Library System** using JavaScript classes. It models different types of media items—like books and movies—and allows for functionality such as checking items in/out and adding user ratings.

## 🚀 Features

- Inheritance-based design for code reusability
- Toggle check-in/check-out status of media
- Add and retrieve user ratings
- Calculate average rating (fix included below 🔧)

## 📦 Classes

### `Media`
- Base class for all media types
- Properties: `title`, `isCheckedOut`, `ratings`
- Methods:
  - `toggleCheckOutStatus()`
  - `addRating(review)`
  - `getAverageRating()` — *returns average of all ratings*

### `Book` (extends `Media`)
- Additional properties: `author`, `pages`

### `Movie` (extends `Media`)
- Additional properties: `director`, `runTime`

## 🔧 Minor Fix

The method `getAverageRating()` doesn't return the result currently. You can fix it by adding a `return` statement:

```js
getAverageRating() {
  let ratingsum = this._ratings.reduce(
    (currentSum, rating) => currentSum + rating,
    0
  );
  return ratingsum / this._ratings.length;
}
```

## 📌 Example

```js
const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);

console.log(historyOfEverything.author); // Output: Bill Bryson
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(5);
historyOfEverything.addRating(4);
console.log(historyOfEverything.getAverageRating()); // Output: 4.5
```

## 🛠️ How to Use

1. Clone or copy the script.
2. Run in any JavaScript environment (Node.js or browser console).
3. Modify or extend the media classes as needed.

---
Happy coding! 🎉
