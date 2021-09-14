import React from "react";
import {Login, User} from "../Components/Login/Login";

export const LoginPage = () => {
    const submit = (user:User) =>{
        console.log('Usuario', user);
    }
    return(
        <Login onSubmit={submit}/>
    )
}