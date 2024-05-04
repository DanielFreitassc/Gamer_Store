import axios from "axios";

const productsFetch = axios.create({
    baseURL:"http://localhost:3000/products",
    headers: {
        'Content-Type': 'application/json',
      },
})


export default productsFetch