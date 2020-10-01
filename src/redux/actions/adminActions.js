import axios from 'axios'
export const getAllUsers = (token, cb, errorCb) => {
    const request = axios.get(`api/v1/users`)
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
        type:"ADMIN_GET_ALL_USERS",
        payload:request
    }
        
}

export const deactivateUser = (id, params, cb, errorCb) => {
    // "reason": "user is just crazy"
    const request = axios.put(`api/v1/admin/deactivate_user/${id}`, params)
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
        type:"ADMIN_DEACTIVATE_USER",
        payload:request
    }
        
}

export const getAllPartners = (token, cb, errorCb) => {
    const request = axios.get(`api/v1/partners`)
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
        type:"ADMIN_GET_ALL_PARTNERS",
        payload:request
    }
        
}

export const adminGetAllDiscounts = (token, cb, errorCb) => {
    const request = axios.get(`api/v1/admin/partner-discount-offers`)
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
        type:"ADMIN_GET_ALL_DISCOUNTS",
        payload:request
    }
        
}