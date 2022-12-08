// Meal Maker Assignment from Code Academy

const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's special is ${this._meal} for ${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.meal = "Chicken";
menu.price = 4.99;

console.log(menu.todaysSpecial);
