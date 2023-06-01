const ProductsList = ({ productsList, deleteProduct, selectProduct }) => {
    return (
        <div className="products-list">
            <h1>Productos</h1>

            <ul>
                {
                    productsList?.map( product => (
                        <li key={product.id}>
                            <h4>Name: {product.first_name} {product.last_name} </h4>
                            <p>
                            <b>Email: </b> {product.email}
                            </p>
                            <p>
                            <b>Birthday:</b> {product.birthday}
                            </p>
                            <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
                            <button onClick={() => selectProduct(product.id) }>Editar</button>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default ProductsList;