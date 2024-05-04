import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsFetch from "../../axios/config";
import "./style.css";

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleInputChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const updateProduct = async (event) => {
        event.preventDefault();
        try {
            await productsFetch.put(`/${id}`, product);
            setIsModalOpen(false);
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
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
                    <p id="input-desc">Valor: ${product.price}</p>
                    <button id="button-remover" onClick={removeProduct}>Remover</button>
                    <button id="input-att" onClick={() => setIsModalOpen(true)}>Atualizar</button>
                </div>
            </div>
            {isModalOpen && (
                <div id="modal">
                    <h1>Atualizar Produto</h1>
                    <form onSubmit={updateProduct}>
                        <input type="text" name="name" value={product.name} onChange={handleInputChange} required/>
                        <input type="text" name="image" value={product.image} onChange={handleInputChange} required/>
                        <input type="text" name="tag" value={product.tag} onChange={handleInputChange} required/>
                        <input type="number" name="price" value={product.price} onChange={handleInputChange} required/>
                        <button type="submit">Salvar</button>
                        <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Details;
