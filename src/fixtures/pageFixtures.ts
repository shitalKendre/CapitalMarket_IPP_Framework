import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import{test as baseTest} from '@playwright/test' 
import { CsvHelper } from "../Utility/CsvHelper"

type pagesfixures={


    loginPage:LoginPage,
    homePage:HomePage,
    testdata: Record<string, string>[],
}

export let test=baseTest.extend<pagesfixures>({


loginPage:async({page},use)=>{

    let login=new LoginPage(page);
    await use(login);
},
homePage: async({page},use)=> {

    let home=new HomePage(page);
    await use(home);

},
testdata:async({},use)=>{

    let test=CsvHelper.readCsv("./src/data/LogintestData.csv");
    use(test);
}



})

export {expect} from '@playwright/test'



