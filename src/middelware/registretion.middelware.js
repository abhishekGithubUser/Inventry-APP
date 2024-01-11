
import {body, validationResult} from 'express-validator'

const userRegiterValidation = async (req, res, next)=>{

        const rules = [
            body('name').notEmpty().withMessage("Name is Required! "),
            // body('email').isEmail().whitelist('Invalid Email! '),
            // body('password').isStrongPassword().withMessage("Plese enter the valid STRONG PASSWORD!")
        ]

        await Promise.all(rules.map((rule)=> rule.run(req)));

        const validationResults= validationResult(req);

        if(!validationResults.isEmpty()){
          return  res.render("registretion" ,{errorMassage : validationResults.array()[0].msg})
        }

        next()
}


export default userRegiterValidation;