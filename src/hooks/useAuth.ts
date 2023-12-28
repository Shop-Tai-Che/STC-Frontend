import api from 'zmp-sdk'; 
import { setCurrentUser } from '@store/action';
import setDataToStorage from '@store/setStorage';
import { FetchState } from '@utils/type/FetchState';
import { useState } from 'react';

const useAuth = () => { 
    const login = (actionGetOrCreateUser) => { 

        api.login({
            success: async () => {
                const { userInfo } = await api.getUserInfo({
                    fail: error => {
                        console.error('getUserInfo|error', error);
                    },
                });
                console.log("login" ,userInfo)
                await actionGetOrCreateUser(userInfo)
              
            },
            fail: error => {
                console.error('login error', error);
            },
        });
    };
  
    
    return { login,   };
};
export default useAuth;
