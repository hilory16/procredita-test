import axios from 'axios';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
// import {Router} from 'next/router';

export function registerUser(params, router, successCb, errorCb){
        const result = axios.post('users', params)
        .then(res => {
            toast.success(`${res.data.message}, you'll be redirected in 3 secs`) 
            localStorage.setItem('auth', res.data.token)
            setTimeout(() =>{
                if(false){
                    router.back()
                }else{
                    window.location = '/user'
                }
            },3000)
            if(successCb) successCb()
            return res.data
        })
        .catch(e => {
            // console.log(router)
            toast.error(e.response ? e.response.data.message : "An error occured!")
            if(errorCb) errorCb()
            // Swal.fire({
            //     // position: 'top-end',
            //     icon: 'error',
            //     title: '',
            //     html:`${e.response ? e.response.data.message : "An error occured!"}`,
            //     showConfirmButton: true
            //     // timer: 1000
            // })
        })
   
    return{
        type:"REGISTER_USER",
        payload:result

    }
}


export function loginUser(params, router, successCb, errorCb){
    // const router = Router()
    // const result = ""
    const result = axios.post('auth', params)
    .then(res => {
        console.log(res.data)
        localStorage.setItem('auth', res.data.token)
        // return result = res.data
        if(successCb) successCb()
            // router.push("/user")
            window.location = "/user"
       
        return res.data

        //  router.back()
    })
    .catch(e => {
        if(errorCb) errorCb()
        toast.error(e.response ? e.response.data.message : "An error occured!")
        // Swal.fire({
        //     // position: 'top-end',
        //     icon: 'error',
        //     title: '',
        //     html:`${e.response ? e.response.data.message : "An error occured!"}`,
        //     showConfirmButton: true
        //     // timer: 1000
        // })
    })

    return{
        type:"LOGIN_USER",
        payload:result

    }
}

export function getAuthenticatedUser (token, cb, errorCb){
    const request = axios.get(`users/profile`)
    .then(res => {
        // console.log(res.data)
       if(cb) cb()
        return res.data
    })
    .catch(e => {
        console.log(e.response)
        // Swal.fire({
        //     icon: 'error',
        //     title: '',
        //     html:e.response ? e.response.data.message : e,
        //     showConfirmButton: true,
        // })
        // errorCb()
       return  e.response ? e.response.data : null
    })

    return{
        type:"GET_AUTHENTICATED_USER",
        payload:request    
    }
}


export function ChangePassword (params, cb, errorCb){
    const request = axios.put(`users/reset-password`, params)
    .then(res => {
        toast.success(res.data.message)
        // console.log(res.data)
       if(cb) cb()
        return res.data
    })
    .catch(e => {
        console.log(e.response)
        toast.error(e.response ? e.response.data.message : "An error occured!")
        if(errorCb) errorCb()
       return  e.response ? e.response.data.message : null
    })

    return{
        type:"CHANGE_PASSWORD",
        payload:request    
    }
}


export async function getOrderForCustomer(successCb, errorCb){
    try{
        const user = await axios.get(`users/profile`)
        const result = await axios.get(`order/user?sortBy=-_id`)
        // console.log(result.data)
        if(successCb) successCb()
        return{
            type:"GET_ORDER_FOR_CUSTOMER",
            payload:result.data
    
        }
    }
    catch(e){
        if(errorCb) errorCb()
        toast.error(e.response ? e.response.data.message : "An error occured!")
    }
    
}