import { test,expect } from "../src/fixtures/pageFixtures";
import { CsvHelper } from "../src/Utility/CsvHelper";


test.beforeEach(async({loginPage})=>{
    
    await loginPage.goToLoginPage();
//login.doLogin('testing1@open.com','testing');
})

test("verify Login page title ",async({loginPage})=>{
//wait login.goToLoginPage();
let title= await loginPage.getpageTitle();
console.log("Title of the page: "+title);
expect(title).toBeTruthy();
//page.setDefaultTimeout(50000);
})

test("Verify forgot pwd link available ",async({loginPage})=>{  
    let value= await loginPage.verifyfogotlinkPresent();
    console.log(value);
    //expect(value).toBeTruthy();
})

test("Verify to login page ",async({loginPage})=>{  

await loginPage.doLogin(process.env.USERNAME!,process.env.PASSWORD!)//! is null checkes in ts & in js it is ?
 
})



//Approach 1=Sequence Mode - Only 1 testcase is running with test data one by one using testdata from fixture

test("verify invalid details",async({testdata,loginPage})=>{
    for(let row of testdata){

        await loginPage.doLogin(row.username,row.username);
        expect(await loginPage.invalidUserTest).toBeTruthy();
    }

})

//Approach 2= without fixture,parallel mode read csv data directly and loop the test method row wise

let testdata=CsvHelper.readCsv("./src/data/LogintestData.csv");

for(let row of testdata){
test(`invalid user login ${row.username} - ${row.password}`,async({loginPage})=>{
await loginPage.doLogin(row.username,row.password);
})


}