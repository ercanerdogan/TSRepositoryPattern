import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result = _productService.getProducts();
console.log(result);

let product = _productService.getById(1);
console.log("get by id : {id : 1} ", product);

let newProduct = new Product();
newProduct.name = "Iphone X11";
newProduct.category = "Phone";
newProduct.price = 1500;

_productService.saveProduct(newProduct);
result=_productService.getProducts();


let productWillDelete = _productService.getById(3);
if(productWillDelete !=null){
    _productService.deleteProduct(productWillDelete);
}

let updatedProduct = new Product();

updatedProduct.id=1;
updatedProduct.name = "Iphone X11";
updatedProduct.category = "Phone";
updatedProduct.price = 1500;
_productService.saveProduct(updatedProduct);

console.log("updated result : ", result);
