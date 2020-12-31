import { DataSource } from "./DataSource";
import { IProductService } from "./IProductService";
import { Product } from "./Product";

export class ProductService implements IProductService{


    private dataSource : DataSource;
    private products : Array<Product>;

    constructor(){
        this.dataSource = new DataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(element => this.products.push(element));
    }

    getById(id: number): Product {
        return this.products.filter(p=>p.id===id)[0];
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.id==0 || product.id ==null ){
            product.id = this.generateId();
            this.products.push(product);
        }
        else{
            let index;
            for(let i=0;i<this.products.length;i++){
                if(this.products[i].id === product.id){
                    index=i;
                }
            }
            this.products.splice(index,1,product);
        }
    }
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        if(index>0){
            this.products.splice(index,1);
        }

    }

    private generateId():number{
        let key=1;
        while(this.getById(key)!=null){
            key++;
        }

        return key;
    }

}