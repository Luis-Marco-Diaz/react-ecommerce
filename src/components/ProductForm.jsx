import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

function ProductForm({ addProduct, productSelected, editProduct }) {
    
    const { register, handleSubmit, reset } = useForm()

    const emptyProduct = {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: "",
    }
    
    useEffect( () => {
        if( productSelected ){
            //Tengo informacion de un producto seleccionado
            //Llenar el formulario    
            reset( productSelected )

        }else{
            //productSelected esta en null
            //NO hay producto seleccionado
            //Form debe de estar vacio
            reset( emptyProduct )
        }
    }, [productSelected] )

    const submit = data => {
        if( productSelected ){
            //EDITAR
            editProduct( data )
        }else{
            //CREAR
            addProduct( data )
            reset( emptyProduct )
        }
    }

    return (
        <div>
            <h1>User Form</h1>
            <form onSubmit={ handleSubmit( submit ) } >
            <h1>{ productSelected ? "Edit" : "Create" } User</h1>

            <div className="input-wrapper">
                <label htmlFor="first_name">First Name </label>
                <input 
                type="text" 
                id="first_name" 
                { ...register( "first_name" ) }
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="last_name">Last Name </label>
                <input 
                type="text" 
                id="last_name" 
                { ...register( "last_name" ) }
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">Email </label>
                <input 
                type="email" 
                id="email" 
                { ...register( "email" ) }
                />
            </div>
            <div className="">
                <label htmlFor="password">Password </label>
                <input 
                type="password" 
                id="password" 
                { ...register( "password" ) }
                />
            </div>
            <div className="">
                <label htmlFor="birthday">Birthday </label>
                <input 
                type="date" 
                id="birthday" 
                { ...register( "birthday" ) }
                />
            </div>

            <button type="submit"> { productSelected ? "Editar" : "Crear" } </button>
        </form>
        </div>
    )
};

export default ProductForm;