

import cat from "../logo192.png"
import CarouselPets from "./carouselOfPets"

const petData = [{name : "cats" , petimage: cat} , {name : "Dogs" , petimage: cat},{name : "Birds" , petimage: cat},{name : "Hamster" , petimage: cat},{name : "cats" , petimage: cat} , {name : "Dogs" , petimage: cat},{name : "Birds" , petimage: cat},{name : "Hamster" , petimage: cat},{name : "cats" , petimage: cat} , {name : "Dogs" , petimage: cat},{name : "Birds" , petimage: cat},{name : "Hamster" , petimage: cat}]

function Discover(){

        return <div>
            <p>Discover</p>
            <CarouselPets  fetchedPets ={petData}/>
        </div>

}



export default Discover 