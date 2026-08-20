import {test,expect} from  '@playwright/test'
let TOKEN="3f11257386dde7b8f18a618cfdd872603b3b407a342dae3ff4d752038670bd5d";
let headers= {    
    'Authorization': `Bearer ${TOKEN}`, 
    'content-type':'application/json',
    'accept' :'application/json'
}
let BASE_URL="https://gorest.co.in/public/v2/users";
let User_ID=8577270;

test("get all users data",async({request})=>{
   const responses= await request.get(`${BASE_URL}`,{headers})
   expect(responses.status()).toBe(200);
    const data=await responses.json();
    console.log(data);
})

test("fetech sing user detail",async({request})=>{
   const responses= await request.get(`${BASE_URL}/${User_ID}`,{headers})
    expect(responses.status()).toBe(200);
   const data= await responses.json();
   console.log(data);

})

//post

test("create data of user",async({request})=>{

let testdata = {
  name: 'shiatl Sharma',
  email: `shital_apsara${Date.now()}@grady-morar.example`,
  gender: 'female',
  status: 'inactive'
}

   const responses= await request.post(`${BASE_URL}`,{headers,data:testdata})
    expect(responses.status()).toBe(201);
    const data=await responses.json();
    console.log(data);
})

test("Update the user",async({request})=>{

    let testdata={
        status:'active'
    }
    const responses= await request.put(`${BASE_URL}/${User_ID}`,{headers,data:testdata})
    expect(responses.status()).toBe(200);
    const data=await responses.json();
    console.log(data);
})
       
test("Delete the user",async({request})=>{

    const responses= await request.delete(`${BASE_URL}/${User_ID}`,{headers})
    expect(responses.status()).toBe(204);
   
})



    