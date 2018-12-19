import template from './login-page.html';

const name = 'loginPage';  //<login-page></loagin-page>
const bindings = {};
const controller = function(){
    this.loginTitle = 'I am login.....';
};

export default{
    name,
    template,
    bindings,
    controller,
}
