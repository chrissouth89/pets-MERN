import { useState } from 'react'

const initialState = {
    name: '',
    age: '',
    breed: '',
}

const PetForm = (props) => {
    const [formData, setFormData] = useState(props.selected ? props.selected : initialState)
    // console.log(props)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(props.selected) {
            props.handleUpdatePet(formData, props.selected._id)
        } else {
            props.handleAddPet(formData)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="age">Age:</label>
            <input 
                name="age" 
                id="age" 
                value={formData.age}
                onChange={handleChange}
                required
            />

            <label htmlFor="breed">Breed:</label>
            <input 
                name="breed" 
                id="breed" 
                value={formData.breed}
                onChange={handleChange}
                required
            />
            <button type="submit">{props.selected ? 'Update Pet' : 'Create Pet'}</button>
        </form>
    )
}

export default PetForm