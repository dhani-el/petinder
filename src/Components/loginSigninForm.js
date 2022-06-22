





function LoginForm(){

    return <div className="loginComponentAncestor">
        <div className="buttonDiv">
            <button className="formButton">Login</button>
            <button className="formButton">Sign Up</button>
        </div>
       <div className="formDiv">
            <div className="loginFormInput">    

                    <input type="text" placeholder="Username" className="loginInput" />
                    <input type="password" name="" id=""  placeholder="Password"  className="loginInput"/>
                    <button className="loginButton">Submit</button>

            </div>
            <div className="signUpForm">            </div>
        </div>
    </div>
}


export default LoginForm