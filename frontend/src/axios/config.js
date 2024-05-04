import axios from "axios";

const productsFetch = axios.create({
    baseURL:"https://66357846415f4e1a5e249821.mockapi.io/products",
    headers: {
        'Content-Type': 'application/json',
      },
})


export default productsFetch