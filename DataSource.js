"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var DataSource = /** @class */ (function () {
    function DataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung Galaxy S7", "Phone", 1000), new Product_1.Product(2, "Samsung Galaxy S8", "Phone", 1200), new Product_1.Product(3, "Samsung Galaxy S9", "Phone", 1300), new Product_1.Product(4, "Samsung Galaxy Note 10", "Phone", 2000));
    }
    DataSource.prototype.getProducts = function () {
        return this.products;
    };
    return DataSource;
}());
exports.DataSource = DataSource;
