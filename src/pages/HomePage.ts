import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class homePage extends BasePage{

private readonly logout:Locator;
private readonly headers:Locator;

constructor(page:Page){
    super(page);
    this.logout=page.getByRole('link',{name:'Logout'});
    this.headers=page.getByRole('heading',{level: 2});
}

async getTitle():Promise<String>{

  return  await this.page.title();

}

async isLogoutLinkExist():Promise<boolean>{
   return await this.logout.isVisible();
}

async getHomePageHeader():Promise<String[]>{
    return await this.headers.allInnerTexts();
}
    
}