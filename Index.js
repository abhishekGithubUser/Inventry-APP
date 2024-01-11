
import express from "express";
import ProductController from "./src/controller/product.controller.js";
import path from 'path';
import ejsLayouts from "express-ejs-layouts";
import { formValidater } from "./src/middelware/validation.middelware.js";
import { uploadFile } from "./src/middelware/file-uplode.middelware.js";
import UserRegistretion from "./src/controller/user.controller.js";
import userRegiterValidation from './src/middelware/registretion.middelware.js'
import session from "express-session";
import {auth} from './src/middelware/auth.middelware.js'
import { setLastVisit } from "./src/middelware/lastVisit.middelware.js";
import cookieParser from "cookie-parser";



const server = express();

//===============================================

// the public make static location 
server.use(express.static("public"))

// cookis parser 
//==============================================
server.use(cookieParser())
// server.use(setLastVisit)

// session creat the session - cookie
//===============================================

server.use(session({
    secret:"secretKey",
    saveUninitialized: false,
    resave:false,
    cookie: {secure: false}
}))


//===============================================

// ejs layouting middilware 
server.use(ejsLayouts)

server.use(express.json())
server.use(express.urlencoded({extended:true}))


//================================================

// ejs view engine 
server.set("view engine", "ejs");


//===============================================

// ejs file path 
server.set("views", path.join(path.resolve() , 'src' ,'view'))

//===============================================

// creat the intence of ProductController
const productController = new ProductController();
server.get('/',setLastVisit,auth, productController.getProduct );

// Regitretion 
//===============================================
const userRegister = new UserRegistretion();
server.get('/register', userRegister.getRegister )
server.post('/register',userRegiterValidation,userRegister.postRegiter );
// Login 
server.get('/login',userRegister.getLogin );
server.post('/login', userRegister.postLogin);

//Logout
server.get('/logout', userRegister.logout)

//===============================================

// Add Product 
server.get('/new',auth, productController.getAddFrom);
server.post('/' ,auth, uploadFile.single('imgUrl') , formValidater ,  productController.postAddProduct)

//===============================================


// Delete product  
server.post("/delete-product/:id",auth, productController.deleteProduct);

//=================================================

// update product 
server.get('/update/:id',auth, productController.getUpdateProductView)
server.post('/update',auth,uploadFile.single('imgUrl'), productController.updateProduct);

//===============================================


// default file views path middelware 
server.use(express.static('src/view'))

server.listen(5000, ()=>{

    console.log("This server listen at port 5000");
})