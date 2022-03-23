const conversions = require("./currency_conversions.json");

let products = [
  { product: "car", price: "17452", moneda: "cad" },
  { product: "banana", price: "52", moneda: "jpy" },
  { product: "apple", price: "2", moneda: "gbp" },
  { product: "monkey", price: "6000", moneda: "cny" },
];

class Product {
  constructor(name, price, currency) {
    this.name = name;
    this.price = price;
    this.currency = currency.toUpperCase();
  }
  getCantidad() {
    console.log(`son ${this.price} ${this.name}`);
  }
}

class ConvertProduct extends Product {
  constructor(name, price, currency) {
    super(name, price, currency);
  }
  getInEur() {
    let value;
    let key = Object.entries(conversions);
    if (this.currency == "EUR") {
      console.log(` ${value}`);
    } else {
      key.forEach((el) => {
        if (el[0].slice(0, 3) == this.currency) {
          value = el[1] * this.price;
        }
      });
    }
    console.log(
      `\n ${this.name} costs ${this.price} ${
        this.currency
      } equal to: ${value.toFixed(2)} EUR`
    );
  }
}

function calculatePrices(products) {
  return products.map((element) => {
    let prod = new ConvertProduct(
      element.product,
      element.price,
      element.moneda
    );
    prod.getInEur();
  });
}

calculatePrices(products);
