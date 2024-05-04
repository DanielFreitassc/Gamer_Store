import axios from "axios";

const productsFetch = axios.create({
    baseURL:"https://gamer-store.onrender.com/products",
    headers: {
        'Content-Type': 'application/json',
      },
})


export default productsFetch