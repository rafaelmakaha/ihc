export default class Auth {
    static handleLoginAuth;
    static login(){
        localStorage.setItem('login', true);
    }
    static logged(){
        return (localStorage.getItem('login'));
    }
    static logout(){
        localStorage.setItem('login', false);
    }
}