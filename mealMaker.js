// Meal Maker Assignment from Code Academy

// Creating menu obj to store special information
const menu = {
  _meal: "",
  _price: 0,
  //   meal name setter
  set meal(mealToCheck) {
    // conditional to check it type String
    if (typeof mealToCheck === "string") {
      // Assing the value
      this._meal = mealToCheck;
    }
  },
  //   meal price setter
  set price(priceToCheck) {
    // conditional to check it tpye Number
    if (typeof priceToCheck === "number") {
      // Assign price to meal
      this._price = priceToCheck;
    }
  },
  //   getter to get specials
  get todaysSpecial() {
    // Conditional to check if the values are not nill
    if (this._meal && this._price) {
      // return message if true
      return `Today's special is ${this._meal} for ${this._price}!`;
    } else {
      // return message is false
      return "Meal or price was not set correctly!";
    }
  },
};

// Setting values for menu name and price
menu.meal = "Chicken";
menu.price = 4.99;

// Calling todaysSpecial() getter from the menu obj
console.log(menu.todaysSpecial);
