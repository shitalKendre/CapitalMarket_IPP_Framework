
import {test,expect} from  '@playwright/test'


test("get all users data",async({request})=>{

    let TOKEN="3f11257386dde7b8f18a618cfdd872603b3b407a342dae3ff4d752038670bd5d"

   const responses= await request.get("https://gorest.co.in/public/v2/users",
        {
            headers:{Authorization: `Bearer ${TOKEN}`

            }
        })
   expect(responses.status()).toBe(200);
    const data=await responses.json();
    console.log(data);
})


test("fetech sing user detail",async({request})=>{
let TOKEN="3f11257386dde7b8f18a618cfdd872603b3b407a342dae3ff4d752038670bd5d"

   const responses= await request.get("https://gorest.co.in/public/v2/users/8577270",
    {
        headers:{
            Authorization: `Bearer ${TOKEN}`
        }
    })

    expect(responses.status()).toBe(200);
   const data= await responses.json();
   console.log(data);

})


test("create data of user",async({request})=>{

let TOKEN="3f11257386dde7b8f18a618cfdd872603b3b407a342dae3ff4d752038670bd5d"
let testdata = {
  name: 'shiatl Sharma',
  email: `shital_apsara${Date.now()}@grady-morar.example`,
  gender: 'female',
  status: 'inactive'
}

   const responses= await request.post("https://gorest.co.in/public/v2/users",
    {
        headers:{ 
                Authorization: `Bearer ${TOKEN}`
        },
        data:testdata
    })

    expect(responses.status()).toBe(201);
    const data=await responses.json();
    console.log(data);


})


