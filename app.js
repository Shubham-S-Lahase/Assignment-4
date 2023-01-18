const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello World")
})
     
    

app.post("/add", (req, res) => {
    // write the code for addition
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(num1 == "" || num2 == ""){
        return res.status(400).json({
            status : "failure",
            message : "Please provide Inputs"
        });
    }

    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({
            status : "error",
            message : "Invalid Datatype"
        });
    }

    let sum = Number(num1) + Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || sum < -1000000 ){
        res.status(400).json({
            status : "error",
            message : "Underflow"
        })
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || sum > 1000000){
        res.status(400).json({
            status : "error",
            message : "Overflow"
        })
    }

    res.status(200).json({
        status: "success",
        message:"the sum of given two numbers",
        sum: sum
    })
})

app.post("/sub", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(num1 == "" || num2 == ""){
        return res.status(400).json({
            status : "failure",
            message : "Please provide Inputs"
        });
    }

    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({
            status : "error",
            message : "Invalid Datatype"
        });
    }
    
    let sub = Number(num1) - Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || sub < -1000000 ){
        res.status(400).json({
            status : "error",
            message : "Underflow"
        })
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || sub > 1000000){
        res.status(400).json({
            status : "error",
            message : "Overflow"
        })
    }

    res.status(200).json({
        status: "success",
        message:"the difference of given two numbers",
        difference: sub
    })
})

app.post("/multiply", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(num1 == "" || num2 == ""){
        return res.status(400).json({
            status : "failure",
            message : "Please provide Inputs"
        });
    }

    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({
            status : "error",
            message : "Invalid Datatype"
        });
    }
    
    let product = Number(num1) * Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || product < -1000000 ){
        res.status(400).json({
            status : "error",
            message : "Underflow"
        })
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || product > 1000000){
        res.status(400).json({
            status : "error",
            message : "Overflow"
        })
    }


    res.status(200).json({
        status: "success",
        message:"the product of given two numbers",
        result: product
    })
})

app.post("/divide", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(num1 == "" || num2 == ""){
        return res.status(400).json({
            status : "failure",
            message : "Please provide Inputs"
        });
    }

    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({
            status : "error",
            message : "Invalid Datatype"
        });
    }

    if(Number(num2) == 0){
        return res.status(400).json({
            status: "error",
            message : "Divide by Zero"
        })
    }
    
    let division = Number(num1) / Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || division < -1000000 ){
        res.status(400).json({
            status : "error",
            message : "Underflow"
        })
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || division > 1000000){
        res.status(400).json({
            status : "error",
            message : "Overflow"
        })
    }


    res.status(200).json({
        status: "success",
        message:"the division of given two numbers",
        result: division
    })
})

app.get("*", async (req, res) => {
    res.status(404).json({
        status: "Failed",
        message: "API not found"
    })
})

app.listen(port, ()=>{console.log("The server is up at", {port})});