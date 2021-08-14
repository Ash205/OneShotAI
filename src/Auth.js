// import { Redirect } from 'react-router-dom';

class Auth{
    constructor(){
        this.authenticated = false;
    }
    
    login(){
        this.authenticated = true;
        console.log('status = '+this.authenticated);
        // cb();
    }

    logout(){
        this.authenticated = false;
        console.log('status = '+this.authenticated);
        // cb();
    }

    isAuthenticated(){
        return this.authenticated;
    }
}

export default new Auth();