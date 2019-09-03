import axios from 'axios';

var urlPrefix = 'http://localhost:3001'

var getProducts =() =>{
    return axios.get(urlPrefix+'/products')
}

var getProduct =(id) =>{
    return axios.get(urlPrefix+'products/'+id)
}

export {
    getProducts,
    getProduct,
    
}