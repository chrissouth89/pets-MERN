const PetDetail = (props) => {
    console.log(props)

    if(!props.selected) {
        return (
            <div>
                <h1>No pet selected</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>{props.selected.name}</h1>
            <h2>Breed: {props.selected.breed}</h2>
            <h2>Age: {props.selected.age} year{props.selected.age > 1 ? 's' : ''} old</h2>
            <button onClick={() => props.handleFormView(props.selected)}>Edit Pet</button>
            <button onClick={() => props.handleDeletePet(props.selected._id)}>Delete Pet</button>
        </div>
    )
}

export default PetDetail