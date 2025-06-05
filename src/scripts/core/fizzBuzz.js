

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
            throw new Error ("only positive numbers allowed")

        } if (userData % 5 === 0 && userData % 3 === 0 ){
            response.message = "Number dubidible by 3 & 5"
        } else if 


    }catch(error();
    ){


    }



}