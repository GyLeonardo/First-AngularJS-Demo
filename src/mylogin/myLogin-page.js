import template from './myLogin-page.js';


const name = 'myLoginPage';  //<login-page></loagin-page>
const bindings = {};
const controller =  function(){
    this.loginTitle = 'I am login.....';
};

export default{
    name,
    template,
    bindings,
    controller,
}
