import axios from 'axios';

// var urlPrefix = 'http://10.2.24.38:3001/api';
var urlPrefix = 'http://localhost:3001/api';
// var serverURL = 'http://10.2.24.38:3001/';
var serverURL = 'http://localhost:3001/';


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

var deleteProduct = (id) => {
    return axios.delete(urlPrefix+'/products/'+id)
}

// category
var getCategories =() =>{
    return axios.get(urlPrefix+'/categories')
}
// comment
var addComment =(data) =>{
    return axios.post(urlPrefix+'/comments', data)
}

var deleteComment = (id) => {
    return axios.delete(urlPrefix+'/comments/'+id)
}

// user
var addUser =(data) =>{
    return axios.post(urlPrefix+'/users', data)
}

var getSingleUser = (id) => {
    return axios.get(urlPrefix+'/users/'+id)
}

//authenticate
var  authenticate = (data) => {
    return axios.post(urlPrefix+'/authenticate',data)          
}


// file upload
 var uploadFile = (formData) => {
    var settings = { headers: {'Content-Type' : 'multipart/form-data'}}
    return axios.post(urlPrefix+'/upload', formData, settings)
}

export {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    getCategories,
    deleteProduct,

    addComment,
    deleteComment,

    addUser,
    getSingleUser,
    serverURL,

    authenticate,
    uploadFile
}