import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const UsersForm = () => {
    
    const { register, handleSubmit, reset } = useForm()

    const emptyUser = {
        fist_name : "",
        last_name : "",
        birthday : "",
        password : "",
    }

    return (
        <div>
            <h1>User List</h1>
        </div>
    )
};

export default UsersForm