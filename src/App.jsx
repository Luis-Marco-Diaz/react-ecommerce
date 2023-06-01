import './App.css'
import axios from "axios";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";
import ProductForm from './components/productForm';

function App() {
  const [productsList, setProductsList] = useState([]);
  const [productSelected, setProductSelected] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((resp) => setProductsList(resp.data))
      .catch((error) => console.error(error));
  };

 
  const addProduct = (product) => {
    axios
      .post("https://users-crud.academlo.tech/users/", product)
      .then(() => {
        getData();
        setProductSelected(null);
      })
      .catch((error) => console.error(error));
  };



  const deleteProduct = (idProduct) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${idProduct}/`)
      .then(() => getData())
      .catch((error) => console.error(error));
  };

  const selectProduct = (idProduct) => {
    axios
      .get(`https://users-crud.academlo.tech/users/${idProduct}/`)
      .then((resp) => setProductSelected(resp.data))
      .catch((error) => console.error(error));
  };

  
  const editProduct = async (product) => {
    try {
      const respuesta = await axios.put(
        `https://users-crud.academlo.tech/users/${product.id}/`,
        product
      );
      getData();
      setProductSelected(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="general-container">
      <ProductForm
        addProduct={addProduct}
        productSelected={productSelected}
        editProduct={editProduct}
      />

      <ProductsList
        productsList={productsList}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    </div>
  );
}

export default App;


