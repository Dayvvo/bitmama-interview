import Router  from "next/router";
import { useEffect } from "react";


const useIsAuth = ()=>{

    useEffect(()=>{
        const checkIfLoggedIn = ()=>{
            let userToken = JSON.parse(localStorage.getItem('bitmama-logs'));

            if ( (userToken)  && Object.keys( userToken ).length) {
                Router.push('/home')                
            }
            else{
                Router.push('/')
            }

        }
        checkIfLoggedIn();

    },[ ])


}

export default useIsAuth;