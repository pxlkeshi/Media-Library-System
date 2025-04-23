class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(yes) {
    this._isCheckedOut = yes;
  }
  toggleCheckOutStatus() {
    if (this._isCheckedOut) {
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }

  getAverageRating() {
    let ratingsum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    ratingsum = ratingsum / this._ratings.length;
  }
  addRating(review) {
    this._ratings.push(review);
  }
}
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}
const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);
console.log(historyOfEverything.author)
