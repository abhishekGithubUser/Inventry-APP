
export default class UserModal{

    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static add(name, email, password){

        const newUser= new UserModal(users.length+1, name, email, password)
        console.log(newUser)
        users.push(newUser);
    }

    static isValid(email, password){
        const foundUser = users.find((user)=> user.email == email && user.password == password );
       
        return foundUser;
    }
}


var users = []; 