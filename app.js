"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result = _productService.getProducts();
console.log(result);
var product = _productService.getById(1);
console.log("get by id : {id : 1} ", product);
var newProduct = new Product_1.Product();
newProduct.name = "Iphone X11";
newProduct.category = "Phone";
newProduct.price = 1500;
_productService.saveProduct(newProduct);
result = _productService.getProducts();
var productWillDelete = _productService.getById(3);
if (productWillDelete != null) {
    _productService.deleteProduct(productWillDelete);
}
var updatedProduct = new Product_1.Product();
updatedProduct.id = 1;
updatedProduct.name = "Iphone X11";
updatedProduct.category = "Phone";
updatedProduct.price = 1500;
_productService.saveProduct(updatedProduct);
console.log("updated result : ", result);
