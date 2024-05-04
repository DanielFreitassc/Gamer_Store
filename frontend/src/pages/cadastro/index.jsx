import { useState } from "react";
import productsFetch from "../../axios/config";
import "./style.css"

const Register = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [tag, setTag] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const product = { name, image, tag, price: Number(price) };

        try {
            const response = await productsFetch.post('/', product);
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao criar produto:", error);
        }
    };

    return(
        <div id="c-divs">
            <div id="container-register">
                <h1 id="title-form">Cadastro</h1>
                <form id="container-form" onSubmit={handleSubmit}>
                    <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
                    <input className="input" type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image" required/>
                    <input className="input" type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Tag" required/>
                    <input className="input" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required/>
                    <button className="input"  type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;
