import axios from "axios"
import { rootApi } from "../api"

//получить все посты
const getProducts = () => {
    return axios.get(rootApi + "/products")
}
// Получить 1 пост
const getProduct = (id) => {
    return axios.get(`${rootApi}/product/${id}`)
}

export default {
    getProducts,
    getProduct
    
}
