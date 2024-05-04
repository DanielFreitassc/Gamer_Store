import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsFetch from "../../axios/config";
import "./style.css"

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await productsFetch.get(`/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const removeProduct = async () => {
        try {
            await productsFetch.delete(`/${id}`);
            setProduct(null);
            navigate("/");
        } catch (error) {
            console.error("Erro ao remover produto:", error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div id="container-c-image">
            <div id="container-image">
                <h1 id="input-name">{product.name}</h1>
                <div id="one"><img className="image-one" src={product.image} alt={product.image}/></div>
                <div className="container-ip">
                    <p id="input-desc">{product.tag}</p>
                    <p id="input-desc">${product.price}</p>
                <button id="button-remover" onClick={removeProduct}>Remover</button>
                </div>
            </div>
        </div>
    );
};

export default Details;
