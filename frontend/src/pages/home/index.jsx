import { useState,useEffect } from "react";
import Cards from "../../components/cards";
import productsFetch from "../../axios/config";
import SideBar from "../../components/sidebar";
import "./style.css"

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productsFetch.get('/');
                setProducts(response.data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div id="container">
            <SideBar/>
            <Cards products={products}/>
        </div>
    );
};

export default Home;