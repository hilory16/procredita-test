import axios from 'axios';
import Swal from 'sweetalert2';
// import {Router} from 'next/router';
import {toast } from 'react-toastify';

export function fetchAllProducts(category, categoryId, successCb, errorCb){
        const route = category === 'all' ? 'product' : `product/category/${categoryId}`
        // console.log(category, categoryId)

        const result = axios.get(route)
        .then(res => {
            console.log(res.data)
            if(successCb) successCb()
            return res.data
        })
        .catch(e => {
            Swal.fire({
                // position: 'top-end',
                icon: 'error',
                title: '',
                html:`${e.response ? e.response.data.message : "An error occured!"}`,
                showConfirmButton: true
                // timer: 1000
            })
            if(errorCb) errorCb()

        })


       
        // console.log(result)
    return{
        type:"GET_ALL_PRODUCTS",
        payload:result

    }
}

export function fetchSingleProduct(id,successCb, errorCb){
    const result = axios.get(`product/${id}`)
    .then(res => {
        // console.log(res.data)
        if(successCb) successCb()
        
        return res.data
    })
    .catch(e => {
        Swal.fire({
            // position: 'top-end',
            icon: 'error',
            title: '',
            html:`${e.response ? e.response.data.message : "An error occured!"}`,
            showConfirmButton: true
            // timer: 1000
        })
        if(errorCb) errorCb()
    })

    // console.log(result)
   

    return{
        type:"GET_SINGLE_PRODUCT",
        payload:result

    }
}

export function fetchAllReviews(id,successCb, errorCb){
    // console.log(id)
    const result = axios.get(`comment/product/${id}`)
    .then(res => {
        // console.log(res.data)
        // successCb()
        return res.data
    })
    .catch(e => {
        Swal.fire({
            // position: 'top-end',
            icon: 'error',
            title: '',
            html:`${e.response ? e.response.data.message : "An error occured!"}`,
            showConfirmButton: true
            // timer: 1000
        })
        // errorCb()
    })

   

    return{
        type:"GET_ALL_REVIEWS",
        payload:result

    }
}

export function fetchAllCategories(id,successCb, errorCb){
    const result = axios.get(`category`)
    .then(res => {
        // console.log(res.data)
        // successCb()
        return res.data
    })
    .catch(e => {
        Swal.fire({
            icon: 'error',
            title: '',
            html:`${e.response ? e.response.data.message : "Couldn't fetch product categories"}`,
            showConfirmButton: true
        })
    })

   

    return{
        type:"GET_ALL_CATEGORIES",
        payload:result

    }
}

export function addToCart(id, quantity, name, price){
    // console.log(id, quantity,name)
    const cart = localStorage.getItem('cart')

    if(cart === null || cart == ""){
        const data = []
        const product = {
            id,
            quantity,
            name,
            price
        }
        data.push(product)
        // console.log(data)
        localStorage.setItem('cart', JSON.stringify(data) )
        return{
            type:"ADD_TO_CART",
            payload:data
        }
    }

    const parseCart = JSON.parse(cart)

    const exist = parseCart.filter(item =>{
        return item.id === id
    })

    
    if(exist.length > 0){
        parseCart.forEach(item =>{
            if(item.id === exist[0].id){
                item.quantity +=quantity
                // console.log(item.quantity)
            }
        })

        localStorage.setItem('cart', JSON.stringify(parseCart) )
        return{
            type:"ADD_TO_CART",
            payload:parseCart
        }
    }

    const product = {
        id,
        quantity,
        name,
        price
    }

    parseCart.push(product)
    
    // const data = [product, {id:1, quantity:3}]
    localStorage.setItem('cart', JSON.stringify(parseCart) )

    return{
        type:"ADD_TO_CART",
        payload:parseCart
    }
}

export function removeFromCart(id){
    const cart = localStorage.getItem('cart')
    const parseCart = JSON.parse(cart)
    const newItems = parseCart.filter(item => {
        return item.id !== id
    })
    // console.log(newItems)

    localStorage.setItem('cart', JSON.stringify(newItems) )

    return{
        type:"REMOVE_FROM_CART",
        payload:newItems
    }
}

export  function ModifyItemNumber(id, type, value){
    
    const cart = localStorage.getItem('cart')
    const parseCart = JSON.parse(cart)

    const exist = parseCart.filter(item =>{
        return item.id === id
    })
    
    parseCart.forEach(item =>{
        
        if(item.id === exist[0].id){
            // if(type === "increment") return item.quantity+=1
               
            // else if(type==="decrement"){
            //     if(item.quantity > 0) return item.quantity-=1
            // }
            // else if(type==="value") return item.quantity=value
            item.quantity = value
            
        }
    })

    // console.log(parseCart)
    localStorage.setItem('cart', JSON.stringify(parseCart) )

    return{
        type:"MODIFY_ITEM_NUMBER",
        payload:parseCart
    }
}

export function placeOrder(params, successCb, errorCb){
    const result = axios.post('order', params)
    .then(res => {
        // console.log(res.data)
        // toast.success(res.data.message)
        if(successCb) successCb(res.data.data)
        // router.back()
        return res.data.data
    })
    .catch(e => {
        if(errorCb) errorCb()
        console.log(e)
        toast.error(e.response ? e.response.data.message : "An error occured! try again.")
    })

    return{
        type:"PLACE_ORDER",
        payload:result

    }
}