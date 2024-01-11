export default class ProductModel{
    constructor(_id, _name, _desc, _price, _imgUrl){
        this.id=_id;
        this.name=_name;
        this.desc= _desc;
        this.price=_price;
        this.imgUrl=_imgUrl;
    }

    static get(){
        return products;
    }

    static add(name, desc, price, imgUrl){
        let newProduct= new ProductModel(
            products.length+1,
            name,
            desc, 
            price,
            imgUrl
        );
        products.push(newProduct);

    }

    static getById(id){
        return products.find((p)=> p.id == id);
    }

    static update(id,name, desc, price, imgUrl){
       let index= products.findIndex((p)=> p.id == id);
        let newObj={
            id:id,
            name : name,
            desc : desc,
            price : price,
            imgUrl : imgUrl
        }

        products[index] = newObj;
    }

    static delete(id){
        const index =products.findIndex((p)=> p.id == id);

        products.splice(index,1);
    }

   

}


var products = [
    new ProductModel(1,"Product_1","this is the Product_1", 15.55, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXD4O07nqZ4mOhxDhErP9Y1yxrjlhob1bbA&usqp=CAU"),
    new ProductModel(2,"Product_1","this is the Product_2", 16.55, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zRrfPRojkiRY51ivaRTZjxBJasTfP4JPRw&usqp=CAU"),
    new ProductModel(3,"Product_1","this is the Product_3", 13.55, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXD4O07nqZ4mOhxDhErP9Y1yxrjlhob1bbA&usqp=CAU"),
    new ProductModel(4,"Product_1","this is the Product_4", 12.55, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-W6ziGGO-8yiMnM4IMC51NbyluBx-7JOI7A&usqp=CAU")
]