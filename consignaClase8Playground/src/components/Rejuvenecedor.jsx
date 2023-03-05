import React, {useState} from 'react'

export const Rejuvenecedor = () => {
    const [user, setUser] = useState({
        nombre: "",
        edad:""
    })

    const handleChange = (e) => {
        e.preventDefault()
        if(user.nombre.length> 0 && user.edad > 0){
            user.edad -= 10
            alert("has rejuvenecido! tu aspecto es de una persona de " + 
            user.edad + " años")
        }else{
            alert("alguno de los campos es incorrecto")
        }
    }

    return (
    <div>
        <h1>Rejuvenecedor</h1>
        <form onSubmit={handleChange}>
            <label>Nombre: </label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})} />
            <label>Edad: </label>
            <input type="number" value={user.edad} onChange={(e) => setUser({...user, edad: e.target.value})} />
            <button type="submit">Enviar</button>
        </form>
    </div>
    )
}


export default Rejuvenecedor