import React, {useState} from 'react'

export const Forms = () => {
    const [user, setUser] = useState({
        nameComplete: "",
        age: "",
        favoritePokemon: ""
    })
    const [show, setShow] = useState(false)

    const handleChange = (event) => {
        event.preventDefault()
        alert("Gracias por completar el formulario " + user.nameComplete +"!!  Tu información ha sido enviada exitosamente")
        console.log(user.nameComplete + ", "+ user.age + " años, pokemon favorito: "  + user.favoritePokemon)
    }

    const reset = () => {
        setUser({
            nameComplete: "",
            age: "",
            favoritePokemon: ""
        })
        setShow(false)
    }

    return (
        <div>
            <form onSubmit={handleChange}>
                <label>Name</label>
                <input type="text" value={user.nameComplete} onChange={(event) => setUser({...user, nameComplete: event.target.value, })}/>
                <label>Age</label>
                <input type="text" value={user.age} onChange = {(event) => setUser({...user, age: event.target.value})}/>
                <label>Favorite Pokemon</label>
                <input type="text" value={user.favoritePokemon} onChange = {(event) => setUser({...user, favoritePokemon: event.target.value})}/>
                <button style={{backgroundColor: "blueviolet"}} onClick = {() => setShow(true)}>Send</button>
            </form>
            <button onClick={reset} style ={{backgroundColor: "purple"}}>Reset</button>
            { show ?
                <>
                    <h3>{user.nameComplete}, {user.age} años, pokemon favorito: {user.favoritePokemon}</h3>    
                </>
            : null}
        </div>
    )
}

export default Forms
