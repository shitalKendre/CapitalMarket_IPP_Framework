
import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{

private readonly emailid:Locator;
private readonly password:Locator;
private readonly logibtn:Locator;
private readonly forgotpassword:Locator;
private readonly errormsg;


constructor( page:Page){
super(page);
this.page = page;
this.emailid = page.getByRole('textbox', { name: 'E-Mail Address' });
this.password = page.getByRole('textbox',{ name:'Password' });
this.logibtn = page.getByRole('link',{ name:'Login' }).first();
this.forgotpassword = page.getByRole('link',{ name:'Forgotten Password' });
this.errormsg=page.locator('.alert .alert-danger .alert-dismissible');
}

async goToLoginPage():Promise<void>{

await this.page.goto('opencart/index.php?route=account/login');
}

async getpageTitle():Promise<String>{

return await this.page.title();
}
async verifyfogotlinkPresent():Promise<boolean>
{

    return await this.forgotpassword.isVisible();
}
async doLogin(uname:string,pwd:string):Promise<void>{

    console.log();
    await this.emailid.fill(uname);
    await this.password.fill(pwd);
    await this.logibtn.click();

}

async invalidUserTest(): Promise<string|null>{

 return await this.errormsg.textContent();
}

}
