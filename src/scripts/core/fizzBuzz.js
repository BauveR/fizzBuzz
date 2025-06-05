import { responsesRejected } from "../data/results";


export const fizzBuzz = (userData) => {

    let response = {
        status: "ok",
        message: "",
        data:{
            input: userData,
            ouput: "",
        }
    };

    try { 
        if(
             userData !== "number" || !Number.isIntegrer(userData) || userData < 0
        ){
            throw new Error ("only positive numbers allowed");

        } if (userData % 5 === 0 && userData % 3 === 0 ){
            response.message = "Number duvidible by 3 & 5";
            response.data.ouput = "FizzBuzz";
        } else if (userData % 3 === 0){
            response.message = "Number dividible by 3";
            response.data.ouput = "Fizz";
        } else if (userData % 5 === 0){
            response.message = "Number dividible by 5";
            response.data.ouput = "Buzz";
        } else {
            response.message = "Number not dividible by 5 or 3";
            response.data.ouput = userData;
        }
        responsesOk.push (response);
        return response;

    }catch(error){
        console.error (`error on input data ${error}`)
            response.status = "Invalid Request"
            response.message = "Unprocessable Input"
            response.data.ouput = "Invalid input"

            responsesRejected.push (response);
            return response;
    }
};