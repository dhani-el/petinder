

import headerImage from './petinder assets/1x/LogoSmallMain.png'
import filter from './petinder assets/1x/filterSmall.png'
import SwipePet from './Components/swipePet'
import c from './logo192.png'



function ChoicePage({animal}){

    return <div>

                        <div className="headerImage"><img src={headerImage} alt="" /> </div>
                        <div><p>Filter </p> <img src={filter} alt="" /></div>
                        <div>{animal}  <SwipePet pets = {[{image:c},{image:c},{image:c},{image:c}]}/></div>

    </div>

}



export default ChoicePage