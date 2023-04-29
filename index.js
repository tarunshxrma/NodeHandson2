const express=require("express");

const dotenv=require("dotenv");

dotenv.config();

const app=express();

app.get("/api/main",(request,response)=>{
    response.send("Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks")
})


const port=process.env.PORT;

app.listen(port,()=>console.log(`Server is connected at port ${port}`))