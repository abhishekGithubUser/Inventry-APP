import ProductModel from '../models/product.model.js'


 class ProductController{

    getProduct(req, res){

        let products = ProductModel.get()
        res.render('products', {products ,userEmail : req.session.userEmail })

    //    return  res.sendFile(path.join(path.resolve() , 'src' ,'view', 'products.html'));
    }

    getAddFrom(req, res){
        res.render('new-product', {errorMassage: null  ,userEmail : req.session.userEmail })
    }

    postAddProduct(req , res){
        // access the data from 
        const {name, desc, price} = req.body;
        const imgUrl = 'images/'+ req.file.filename;
        console.log('images/'+ req.file.filename);
        ProductModel.add(name, desc, price,imgUrl)

        let products = ProductModel.get()
        res.render('products', {products ,userEmail : req.session.userEmail })
        
    }


    // Update Product 
     getUpdateProductView(req, res, next){
        const id = req.params.id;
        const foundProduct= ProductModel.getById(id);
    
        // if product is present return the new Views 
        if(foundProduct){

            res.render("update-products",{product:foundProduct, errorMassage: null ,userEmail : req.session.userEmail })

        }else{

            // through the error
            res.status(401).send("product was not found ")
        }


    }

    updateProduct(req, res){
        const {id, name, desc, price} = req.body;
        console.log(req.body);
       
        
        const imgUrl = 'images/'+ req.file.filename;
        ProductModel.update(id, name, desc, price, imgUrl)
        
        let products= ProductModel.get();
        res.render('products', {products ,userEmail : req.session.userEmail })
       
    
        

    }

    // update End

    // delete Product
    deleteProduct(req, res){
        const id = req.params.id;
        const foundProduct= ProductModel.getById(id);

        // if product is present return the new Views 
        if(!foundProduct){

           return res.status(401).send("product was not found ")

        }
        ProductModel.delete(id);
        var products= ProductModel.get();
        res.render('products', {products ,userEmail : req.session.userEmail })
        
    }

}

export default ProductController;