import axios from 'axios';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

export function registerPartner (params, cb, errorCb){
    // console.log(params)
    const request = axios.post('api/v1/partner/',params)
    .then(res => {
        console.log(res.data)
        cb()
        return res.data
    })
    .catch(e => {
        console.log(e)
        errorCb()
        return e.response.data
    })

    return{
        type:"REGISTER_PARTNER",
        payload:request    
    }
}

export function loginPartner (params, cb, errorCb){
    console.log(params)
    const request = axios.post('api/v1/partner/login',params)
    .then(res => {
        console.log(res.data)
        localStorage.setItem('auth', res.data.token)
        if (cb) cb() 
        return res.data
    })
    .catch(e => {
        console.log(e.response ? e.response : null)
        if (errorCb) errorCb() 
        return e.response.data
       
    })

    return{
        type:"LOGIN_PARTNER",
        payload:request    
    }
}



export function getAuthenticatedPartner (id, token, cb, errorCb){
    // console.log(id)
    const request = axios.get(`api/v1/partner/${id}`)
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
        type:"GET_AUTHENTICATED_PARTNER",
        payload:request    
    }
}
// Field is partner doesn't have a default value

export const createDiscount = (params, cb, errorCb) =>{
    const request = axios.post('api/v1/partner/discount-offer', params)
    .then(res => {
        console.log(res.data)
        if(cb) cb()
        return res.data
    })
    .catch(e => {
        console.log(e.response)
        if(errorCb) errorCb()
       return  e.response ? e.response.data : null
    })

    return{
        type:"CREATE_DISCOUNT",
        payload:request
    }
    
}

export const getDiscount = (id, cb, errorCb) =>{
    const request = axios.get(`api/v1/partner/discount-offer/${id}`)
    .then(res => {
        console.log(res.data)
        if(cb) cb()
        return res.data
    })
    .catch(e => {
        console.log(e.response)
        if(errorCb) errorCb()
       return  e.response ? e.response.data : null
    })

    return{
        type:"GET_DISCOUNT",
        payload:request
    }
    
}

export const getAllDiscountsProtected = (params, id, cb, errorCb) =>{
    const request = axios.get(`api/v1/partner/discounts/offers`)
    .then(res => {
        console.log(res.data)
        if(cb) cb()
        return res.data
    })
    .catch(e => {
        console.log(e.response)
        if(errorCb) errorCb()
       return  e.response ? e.response.data : null
    })

    return{
        type:"GET_ALL_DISCOUNTS_PROTECTED",
        payload:request
    }
    
}


export const deleteDiscount = (id, cb, errorCb) =>{
    const request = axios.delete(`api/v1/partner/discount-offer/${id}`)
    .then(res => {
        console.log(res.data)
        if(cb) cb()
        toast.success( res.data.message)
        return res.data
    })
    .catch(e => {
        console.log(e.response)
        if(errorCb) errorCb()
        toast.error( e.response ? e.response.data.message : null)
        // Swal.fire({
        //     title: e.response ? e.response.data.message : null,
        //     icon: 'error',
        //     confirmButtonColor: '#3085d6',
        // })
       return  e.response ? e.response.data : null
    })

    return{
        type:"DELETE_DISCOUNT",
        payload:request
    }
    
}

export const updateDiscount = (params, id, cb, errorCb) =>{
    const request = axios.put(`api/v1/partner/discount-offer/${id}`, params)
    .then(res => {
        console.log(res.data)
        toast.success(res.data.message)
        if(cb) cb()
        return res.data
    })
    .catch(e => {
        console.log(e.response)
        toast.error(e.response ? e.response.data : null)
        if(errorCb) errorCb()
       return  e.response ? e.response.data : null
    })

    return{
        type:"UPDATE_DISCOUNT",
        payload:request
    }
    
}

export const updatePartnerDetails = (params, id, cb, errorCb) =>{
    const request = axios.put(`api/v1/partner/${id}`, params)
    .then(res => {
        console.log(res.data)
        toast.success(res.data.message)
        if(cb) cb()
        return res.data
    })
    .catch(e => {
        console.log(e.response)
        toast.error(e.response ? e.response.data : null)
        if(errorCb) errorCb()
       return  e.response ? e.response.data : null
    })

    return{
        type:"UPDATE_PARTNER_DETAILS",
        payload:request
    }
}

export function partnerChangePassword (id, params, cb, errorCb){
    const request = axios.put(`api/v1/partner/change_password/${id}`, params)
    .then(res => {
        console.log(res.data)
        if (cb) cb() 
        return res.data
    })
    .catch(e => {
        console.log(e.response)
        if (errorCb) errorCb() 
        return e.response.data
       
    })

    return{
        type:"CHANGE_PARTNER_PASSWORD",
        payload:request    
    }
}
export function resendActivationCode (email, cb, errorCb){
    const request = axios.put(`api/v1/partner/resend_activation_code/email/${email}`)
    .then(res => {
        console.log(res.data)
        if (cb) cb() 
        return res.data
    })
    .catch(e => {
        console.log(e.response)
        if (errorCb) errorCb() 
        return e.response.data
       
    })

    return{
        type:"RESEND_ACTIVATION_CODE",
        payload:request    
    }
}

export function verifyActivationCode (email, code, cb, errorCb){
    const request = axios.get(`api/v1/partner/verify_activation_code/${email}/${code}`)
    .then(res => {
        console.log(res.data)
        if (cb) cb() 
        return res.data
    })
    .catch(e => {
        console.log(e.response)
        if (errorCb) errorCb() 
        return e.response.data
       
    })

    return{
        type:"VERIFY_ACTIVATION_CODE",
        payload:request    
    }
}