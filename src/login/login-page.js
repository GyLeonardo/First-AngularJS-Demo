import template from './login-page.html';
import { log } from "../common/util";

const name = 'loginPage';
const bindings = {};
const controller = function (loginService) {
  'ngInject'
  this.logins = [];
  let role;
  let flag = false;
  loginService.fetch().then(resp => {
    // log(resp);
    //log(this);
    this.logins = resp.data;
    log(this.logins);
  })

  this.login = function () {
    alert(this.username);
    this.logins.forEach(loginuser => {
      if (loginuser.username == this.username && loginuser.password == this.password) {
        log("login successfully");
        role = loginuser.role;
        flag = true;
      }
    });
    if(flag){
      
      window.location=("http://localhost:8000/pages/user?user_role="+window.btoa(role));
    }else{
      log("登录失败");
      alert("登录失败");
    }
  }
};

export default {
  name,
  template,
  bindings,
  controller,
}