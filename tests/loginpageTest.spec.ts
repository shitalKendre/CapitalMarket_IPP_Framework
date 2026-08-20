import test, { expect } from "@playwright/test";
import { LoginPage }  from '../src/pages/LoginPage';

 let login:LoginPage;

test.beforeEach(async({page})=>{
    login=new LoginPage(page);
await login.goToLoginPage();
//login.doLogin('testing1@open.com','testing');
})

test("verify Login page title ",async()=>{
//wait login.goToLoginPage();
let title= await login.getpageTitle();
console.log("Title of the page: "+title);
expect(title).toBeTruthy();
//page.setDefaultTimeout(50000);
})

test("Verify forgot pwd link available ",async()=>{  
    let value= await login.verifyfogotlinkPresent();
    console.log(value);
    expect(value).toBeTruthy();
})

test("Verify to login page ",async()=>{  

await login.doLogin('testing1@open.com','testing')
 
})