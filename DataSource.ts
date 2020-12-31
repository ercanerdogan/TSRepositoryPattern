import { Product } from "./Product";

export class DataSource{
    private products : Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Samsung Galaxy S7", "Phone", 1000),
            new Product(2, "Samsung Galaxy S8", "Phone", 1200),
            new Product(3, "Samsung Galaxy S9", "Phone", 1300),
            new Product(4, "Samsung Galaxy Note 10", "Phone", 2000)
        );

    }

    getProducts() : Product[] {
        return this.products;
    }


}