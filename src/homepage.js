
import headerImage from './petinder assets/1x/LogoSmallMain.png'
import './Stylesheets/homepage.css'
import Discover from './Components/discover'
import PetCart from './Components/petCart'
import cat from './logo192.png'

const petcart = [{name:"Brewster" ,image:cat},{name:"Toby" , image:cat},{name:"Garfield" , image:cat}]



function Homepage({name}){
return  <div className='homepageAncestor'>
    <div className="headerImageMainPage">
        <img src={headerImage} alt="headerImage" />
    </div>
    <div className="UserIdDiv">
        <p style={{fontSize:"27px"}}>Hello, {name} </p>
    </div>

    <div className="discoverAPet">
        <Discover/>
    </div>

    <div className="consideration">
        <PetCart considerdPets={petcart}/>
    </div>

    </div>
}

export default  Homepage