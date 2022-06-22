
import PrePet from "./prePet"



function PetCart({considerdPets}){

    return <div   className="petCartAncestor">
        <p>Pets You Are Considering</p>
        

        <div  className = "prePetList">
            {considerdPets.map((pet , index)=>{
                return <PrePet key={index} name={pet.name}  PrePetImage = {pet.image}/>
            })}
        </div>

          <div className="prePetcestor">
        {
            considerdPets.map((pet , index)=>{
                return <div className="dicatorDiv" key={index}></div>
            })
        }
        </div>

       
        </div>
}

export default PetCart