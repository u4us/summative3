import axios from 'axios';

// var urlPrefix = 'http://10.2.24.56:3001/api';
var urlPrefix = 'http://localhost:3001/api';
// var serverURL = 'http://10.2.24.56:3001/';
var serverURL = 'http://localhost:3001/';

// product
var getProducts = () => {
    return axios.get(urlPrefix+'/products')
}

var getProduct = (id) => {
    return axios.get(urlPrefix+'/products/'+id)
}

var addProduct = (data) => {
    return axios.post(urlPrefix+'/products', data)
}

var updateProduct = (id, data) => {
    return axios.put(urlPrefix+'/products/'+id, data)
}

var deleteProduct = (id) => {
    return axios.delete(urlPrefix+'/products/'+id)
}

// category
var getCategories = () => {
    return axios.get(urlPrefix+'/categories')
}

var getCategory = (id) => {
    return axios.get(urlPrefix+'/categories/'+id)
}

//favourites
var addFavourite = (userId,data) => {
    return axios.post(urlPrefix+'/users/'+userId+'/favourites', data)
}

var removeFavourite = (userId,productId) => {
    return axios.delete(urlPrefix+'/users/'+userId+'/favourites/'+productId)
}

//cart
var addToCart = (userId,data) => {
    return axios.post(urlPrefix+'/users/'+userId+'/cart', data)
}

var removeFromCart = (userId,productId) => {
    return axios.delete(urlPrefix+'/users/'+userId+'/cart/'+productId)
}

// comment
var addComment = (data) => {
    return axios.post(urlPrefix+'/comments', data)
}

var updateComment = (id, data) => {
    return axios.put(urlPrefix+'/comments/'+id, data)
}

var deleteComment = (id) => {
    return axios.delete(urlPrefix+'/comments/'+id)
}

// user
var addUser = (data) => {
    return axios.post(urlPrefix+'/users', data)
}

var getSingleUser = (id) => {
    return axios.get(urlPrefix+'/users/'+id)
}

var updateUser = (id, data) => {
    return axios.put(urlPrefix+'/users/'+id, data)
}

//authenticate
var  authenticate = (data) => {
    return axios.post(urlPrefix+'/authenticate',data)          
}


// file upload
 var uploadFile = (formData) => {
    var settings = {headers: {'Content-Type' : 'multipart/form-data'}}
    return axios.post(urlPrefix+'/upload', formData, settings)
}

export {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,

    getCategories,
    getCategory,

    addFavourite,
    removeFavourite,

    addToCart,
    removeFromCart,

    addComment,
    updateComment,
    deleteComment,

    addUser,
    getSingleUser,
    updateUser,
    
    authenticate,
    uploadFile,

    serverURL,
}