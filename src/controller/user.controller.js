
import UserModal from "../models/user.model.js";
import ProductModel from "../models/product.model.js";

export default class UserRegistretion{

    getRegister(req, res) {
        res.render('registretion', {errorMassage: null});
    }

    getLogin(req, res){
        res.render('login',{errorMassage: null });
    }

    postRegiter(req, res){
       const { name , email, password } = req.body;
   
        UserModal.add(name , email, password);
        res.render('login',{errorMassage: null });
    }

    postLogin(req, res){
        const { email, password} = req.body;
        
        let user = UserModal.isValid(email, password);
        
        if(!user){
           return res.render("login" ,{errorMassage: "Invlid Credential" })
        }

        req.session.userEmail = email;
      
        let products= ProductModel.get();
       return res.render('products', {products , userEmail : req.session.userEmail})


    }

    logout(req, res){
        // on logout , distroy the session
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/login')
            }
        })

        res.clearCookie('lastVisit');
    }

}