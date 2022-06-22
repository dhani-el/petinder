





function PrePet({name, PrePetImage}){

    return <div className="prePet">
        <p>{name}</p>
        <div className="prePetImg">
            <img src={PrePetImage} alt=" " />
            <button>Adopt</button>
        </div>
    </div>
}



export default PrePet