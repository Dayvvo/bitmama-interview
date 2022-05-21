import Router  from "next/router";
import { useEffect } from "react";


const useIsAuth = (setUserObj?:any)=>{

    useEffect(()=>{

        const checkIfLoggedIn = ()=>{
            let userToken = JSON.parse(localStorage.getItem('bitmama-logs'));

            if (userToken) {
                let userTokenArr = [];
                for (const key in userToken) {
                    userTokenArr.push({ 
                        username:key,  
                        last_seen:userToken[key]?.last_seen
                });
                }
                setUserObj && setUserObj(userTokenArr.sort((a,b)=>b?.last_seen-a?.last_seen));
                Router.pathname!=='home' && Router.push('/home')                
            }
            else{

            }

        }

        checkIfLoggedIn()



    },[])


}

export default useIsAuth;