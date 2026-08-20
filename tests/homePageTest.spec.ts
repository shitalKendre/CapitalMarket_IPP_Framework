import test, { expect } from "@playwright/test";
import { LoginPage }  from '../src/pages/LoginPage';
import { HomePage }  from '../src/pages/HomePage';

let login:LoginPage;
let home:HomePage;

test.beforeEach(async ({page})=>{

login=new LoginPage(page);
await login.goToLoginPage();
await login.doLogin('testing1@open.com','testing');
home=new HomePage(page);

})

test("verify Login page title ",async()=>{
//wait login.goToLoginPage();
let title= await home.getTitle();
console.log("Title of the page: "+title);
expect(title).toBe('Account Login');

})

test("Verify Logout Link",async()=>{
expect(await home.isLogoutLinkExist()).toBeTruthy();

})

test("home page header exist",async()=>{
  let header= await home.getHomePageHeader();
  console.log(header);
  expect.soft(header).toEqual([
   'New Customer',
'Returning Customer'
  ])
})
