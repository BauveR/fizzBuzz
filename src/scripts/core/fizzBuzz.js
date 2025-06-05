import { responsesOk, responsesReject } from "../data/results.js";

export const fizzBuzz =  (userData) => {
    let response = {
        status: "ok",
        message: "",
        data:{
            input: userData,
            output: "",
        },
    };

    try {
        if(
            typeof userData !== "number"|| !Number.isInteger(userData)||userData < 0
        ) {
            throw new Error("Only positive numbers allowed")
        }

        if(userData % 5 === 0 && userData % 3 === 0){
            response.message = "Number divisible by 3 & 5";
            response.data.output = "FizzBuzz";
        }else if (userData % 3 === 0) {
            response.message = "Number divisible by 3"
            response.data.output = "Fizz"
        }else if (userData % 5 === 0){
            response.message = "Number divisible by 5"
            response.data.output = "Buzz"
        }else {
            response.message = "Number no divisible by 3 of 5"
            response.data.output = userData;
        }
        responsesOk.push (response);
        return response;
        
        
        
    }catch (error) {
        console.error(`Error on input data ${error}`)
        response.status = "Invalid request";
        response.message = "Unprocessable input"
        response.data.output = "Invalid input"
        responsesReject.push (response);
        return response;
    }
};