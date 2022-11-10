import Mock from "mockjs";
import jsBasicInfo from "./tpl/javaScript/index";
import navbar from "./tpl/navbar";
const requestMethod = 'post';
const BASE_URL = process.env.VUE_APP_BASE_API + '/';
const mocks = [jsBasicInfo];


/**
 * mock API
 * 1: /barry/jsBasicInfo
 * 2: /barry/jsBasicInfo/infoTreeNode
 */

for (let i of mocks) {
    Mock.mock(BASE_URL + i.name, requestMethod, i.jsBasicInfo);
    Mock.mock(BASE_URL + i.name + '/infoTreeNode', requestMethod, i.treeNode);
}

// System Navbar : /infoNavbar
Mock.mock(BASE_URL + navbar.name, requestMethod, navbar.navbarInfo);


export default Mock