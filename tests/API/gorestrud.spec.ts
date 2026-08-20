import {test,expect, request} from  '@playwright/test'

const Token='7e3699a174f53a72646e9e25143ca5b6ebfabc0daf71d8e107a0fb483c813be3';
const URl='https://gorest.co.in/public/v2/users';
const headers={
'Authorization':`Bearer ${Token}`,
'Content-Type':'application/json',
'Accept':'application/json'

};

test('get-CRUD Operation',async({request})=>{
    let data=await request.
    get(URl,{headers});
   // expect(data.status).toBe(200);
   const testData=await data.json();
   console.log(testData);
})


test('Post call of CRUP operation',async({request})=>{
let response =
    { "name": "Ramakrishna", 
    "email": `pwtest${Date.now()}@example.com`,
     "gender": "male", 
     "status": "active" 
};

let postcall=await request.post(URl,{headers,data:response})
;
let data= await postcall.json();
let userid=data.id;
console.log(data);
})


test('Put call update',async({request})=>{


    let response =
    {  
     "status": "Inactive" 
};

const tdata=await request.put(`${URl}/${userid}`,{headers,data:response});

const storedata= await tdata.json();
console.log(storedata);
})



test('Delete CRUD Operation',async({request})=>{
let userid=8564250;
   const deletedata= await request.delete(`${URl}/${userid}`,{headers});
   console.log(deletedata);



})
