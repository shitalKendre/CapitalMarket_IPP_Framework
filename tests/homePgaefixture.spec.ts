import { test,expect } from "../src/fixtures/pageFixtures";



test.beforeEach(async ({loginPage,homePage})=>{


await loginPage.goToLoginPage();
await loginPage.doLogin('testing1@open.com','testing');


})

test("verify Login page title ",async({homePage})=>{
//wait login.goToLoginPage();
let title= await homePage.getTitle();
console.log("Title of the page: "+title);
expect(title).toBe('Account Login');

})

test("Verify Logout Link",async({homePage})=>{
expect(await homePage.isLogoutLinkExist()).toBeTruthy();

})

test("home page header exist",async({homePage})=>{
  let header= await homePage.getHomePageHeader();
  console.log(header);
  expect.soft(header).toEqual([
   'New Customer',
'Returning Customer'
  ])
})
