import axios from 'axios';

var urlPrefix = 'http://10.2.24.39:3001/api';
var serverURL = '';

// product
var getProducts =() =>{
    return axios.get(urlPrefix+'/products')
}

var getProduct =(id) =>{
    return axios.get(urlPrefix+'/products/'+id)
}

var addProduct =(data) =>{
    return axios.post(urlPrefix+'/products', data)
}

var updateProduct =(id, data) =>{
    return axios.put(urlPrefix+'/products/'+id, data)
}

// category
var getCategories =() =>{
    return axios.get(urlPrefix+'/categories')
}
// comment
var addComment =(data) =>{
    return axios.post(urlPrefix+'/comments', data)
}

// user
var addUser =(data) =>{
    return axios.post(urlPrefix+'/users', data)
}

export {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    getCategories,

    addComment,

    addUser,
}