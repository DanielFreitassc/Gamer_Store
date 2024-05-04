import { useState } from "react";
import productsFetch from "../../axios/config";

const Register = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [tag, setTag] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const product = { name, image, tag, price };

        try {
            const response = await productsFetch.post('/', product);
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao criar produto:", error);
        }
    };

    return( 
        <div id="container-register">
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image" />
                <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Tag" />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;
