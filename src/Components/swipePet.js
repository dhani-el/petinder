import './Stylesheet/swipePet.css'





function SwipePet({pets}){

    

        return  <div className="swipePetComponentMainDiv">
            <div className="swipePetComponentSecondMainDiv">
          {pets.map((pet , index) =>  <img src={pet.image} alt=" " key={index}  className = "aSwipePetComponentImage"/>  )}
        </div>
        <div className="petDescription"> <p>{}</p></div>

        </div>
}



export default SwipePet