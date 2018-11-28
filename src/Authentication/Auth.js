export default class Auth {
    static handleLoginAuth;
    static login(){
        localStorage.setItem('login', 'true');
    }
    static logged(){
        var status = localStorage.getItem('login');

        console.log('status = ', status);
        if(status){
            return status;
        } else {
            return false
        }
    }
    static logout(){
        localStorage.setItem('login', 'false');
    }
}