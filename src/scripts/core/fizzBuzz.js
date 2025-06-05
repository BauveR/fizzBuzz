

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
        }


    }catch{


    }



}