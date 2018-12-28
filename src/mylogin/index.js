import './index.css';
import { InitApp } from '../common/app';
import { generateLangs } from '../common/i18n';
import enUS from './languages/en-US.json';
import zhCN from './languages/zh-CN.json';
import myLoginPage from './myLogin-page';

const dependencies = [];

const app = InitApp(generateLangs(enUS, zhCN), dependencies, myLoginPage);

export default app;