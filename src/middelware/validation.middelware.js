 // Hosted Declariation => a function

 import {body, validationResult} from 'express-validator'
 
// Second way data validater using express validato
export const  formValidater = async (req, res, next) => {
   
    // create a rules 
    const rules= [
        body('name').notEmpty().withMessage('Name is Require'),
        body('price').isFloat({gt:0}).withMessage('Price should be positive'),
        body('imgUrl').custom((value , {req} )=>{
            if(!req.file){
                throw new Error("File ii require")
            }

            return true;
        })
    ]

    // run those rules 
      await  Promise.all( rules.map((rule) => rule.run(req) ))
    
    //   if check any error, return the error massage 
    var validatorError= validationResult(req);

    if(!validatorError.isEmpty()){
       return res.render('new-product',{errorMassage:validatorError.array()[0].msg})
    }

   
    next()
} 







 // frist way to validater using own 
export const validateForm=(req, res, next)=>{
    const {name, price, imgUrl} = req.body;
    let error =[];
    if(!name || name == ''){
        error.push("Nmae is Invalid")
    }
    if(!price || price < 1){
        error.push("Price Should be Postive ")
    }

    try {
        const validUrl = new URL(imgUrl);
    } catch (err) {
        error.push("URL is Invalid ")
    }
    
    if(error.length > 0){
        res.render("new-product", {errorMassage: error[0]})
        return;
    }

    next();
}