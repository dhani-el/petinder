import logo from'./petinder assets/1x/Logosmall.png'
import LoginForm from './Components/loginSigninForm'
import './Stylesheets/login.css'


function Login() {
    return <div  className='loginAncestor'>

        <div className="loginImageDiv">
        <img src={logo} alt="logo"  className='loginImage' />
        </div>

        <div className="loginDiv">
            <LoginForm/>
        </div>

        <div className="forgotDiv">
        <p>Forgot Password</p>
        </div>
        
    </div>
}


export default Login