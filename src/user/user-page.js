import { log, Ramda } from "../common/util";
import template from './user-page.html';

const name = 'userPage';  // <user-page></user-page>
const bindings = {};
const controller = function(userService, filterFilter, $scope) {
  'ngInject'
  this.userTitle = 'I am user.......';
  this.users = [];
  this.allUsers = [];
  this.allRoles = [];
  this.nameFilter = 'work';
  this.adminAction = false;
  this.searchRole = window.atob(window.location.search.substr((window.location.search).indexOf("=")+1));
  userService.fetch().then(resp => {
    // log(resp);
    log(this);
    if(this.searchRole!='admin'){
      this.users = filterFilter(resp.data, this.searchRole);
     }else{
      this.users = filterFilter(resp.data, '');
      this.adminAction = true;
    }
    this.allUsers = resp.data;
  });
    
     this.filterUserName = function () {
       if(this.searchRole!='admin'){
         this.users = filterFilter(filterFilter(this.allUsers, this.searchRole), this.nameFilter);
       }else{
         this.users = filterFilter(this.allUsers, this.nameFilter);
       }
    } 
};

export default {
  name,
  template,
  bindings,
  controller,
}
