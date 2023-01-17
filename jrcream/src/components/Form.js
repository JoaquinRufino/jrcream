const Form = () => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputImage, setInputImage] = useState('');
    const [inputCategory, setInputCategory] = useState('');



const createProduct = (e) => {
    e.preventDefault();
    const product = {
        title: inputTitle,
        price: inputPrice,
    }
};
    
    return (
        <form onSubmit={createProduct}>
            <input type="text" placeholder="Titulo" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
            <input type="text" placeholder="Precio" value={inputPrice} onChange={(e) => setInputPrice(e.target.value)} />
            <input type="text" placeholder="Descripcion" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />
            <input type="text" placeholder="Imagen" value={inputImage} onChange={(e) => setInputImage(e.target.value)} />
            <input type="text" placeholder="Categoria" value={inputCategory} onChange={(e) => setInputCategory(e.target.value)} />
            <button type="submit">Crear Producto</button>
        </form>
  )
}

export default Form;