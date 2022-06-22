





function PetGroup({petGroupName , petImage , petAlt = ""}){

    return <div className= "petGroupAncestor">
        <div className="groupPetImage">
            <img src={petImage} alt={petAlt}  className="petImage"/>
        </div>
        <p className="petGroupName">{petGroupName}</p>
    </div>

}


export default PetGroup