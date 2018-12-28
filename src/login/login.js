import Mdle from '../common/mdle';
import loginPage from './login-page';
import loginService from '../provider/service-login';

const name = 'login';
let mdle = Mdle(name, []);
mdle.registService(loginService);
// mdle.registComponent(loginPage);

const page = loginPage;

export default{
    name,
    mdle,
    page
};
