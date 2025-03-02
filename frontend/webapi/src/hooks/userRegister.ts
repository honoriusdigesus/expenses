import {Profile} from "../model/Profile.ts";
import {useState} from "react";
import {createProfile} from "../services/auth-service.ts";


export const userRegister=() =>{
    const [error, setError] = useState<string>('');
    const [isLoading, setLoader] = useState<boolean>(false);
    const [toast,setToast] = useState<string>('');

    const singup=(profile:Profile)=>{
        setLoader(true);
        createProfile(profile)
            .then(response => {
                if (response && response.status === 201) {
                    setToast("User registered successfully.");
                    console.log("response", response);
                    setError('');
                }
            })
            .catch(error => {
                console.log("error", error);
                setError(error.message);
                setLoader(false);
            })
            .finally(() => setLoader(false));
    }
    return {singup,error,isLoading,toast};
}