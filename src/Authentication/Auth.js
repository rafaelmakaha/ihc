export default class Auth {
    static login(){
        localStorage.setItem('login', 1);
    }
    static logged(){
        if (localStorage.getItem('login') === 1) {
            return true;
        }else {
            return false;
        }
    }
    static logout(){
        localStorage.setItem('login', 0);
    }
}