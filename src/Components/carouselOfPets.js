
import PetGroup from "./singlePetGroup"




function CarouselPets({fetchedPets}){

    return <div className="carouselAncestor">
        <div className="carouselcestor">
        {fetchedPets.map( (pets, index)=>{
            return <div key={index} >
                <PetGroup petGroupName = {pets.name} petImage = {pets.petimage} />
            </div> 
        })}
        </div>

        <div className="carouselcestor">
        {
            fetchedPets.map((pet , index)=>{
                return <div className="indicatorDiv" key={index}></div>
            })
        }
        </div>

    </div>
}


export default CarouselPets