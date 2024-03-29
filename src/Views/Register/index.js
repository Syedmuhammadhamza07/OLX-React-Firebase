import "./index.css"
import { useNavigate } from "react-router-dom"
import { register } from "../Login/Auth"

import mainLogo from "../../Images/logo-black.png"
import { useState } from "react"

function Register (){
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [fullname, setFullname] = useState()

    const signUp = async ()=> {
        try{
            await register({fullname ,  password , email})
            navigate("/")
        } catch(e){
            alert(e.message)
        }
    }

    return(
            <div className="main-register-div">
            <div className="registration-form-div" id="form">
                <div className="register-div">
                    <img src={mainLogo} className="register-main-logo" onClick={()=> navigate('/')}/>
                </div>
                <div className="register-div">
                    <span className="greet-span">Enter your Fullname</span>
                </div>
                <div className="register-div">
                    <input type="text" placeholder="Fullname" onChange={(e)=>{setFullname(e.target.value)}} className="register-email-input" id="register-fullname-input"/>
                </div>
                <div className="register-div">
                    <span className="greet-span">Enter your Email</span>
                </div>
                <div className="register-div">
                    <input type="text" placeholder="Email"  onChange={(e)=>{setEmail(e.target.value)}}  className="register-email-input" id="register-email-input" autoComplete="username"/>
                </div>
                <div className="register-div">
                    <span className="greet-span">Enter your Password</span>
                </div>
                <div className="register-div">
                    <input type="password" placeholder="New password"  onChange={(e)=>{setPassword(e.target.value)}}  className="register-email-input" id="register-password-input" autoComplete="new-password"/>
                </div>
                <div className="register-div">
                    <span className="greet-span">Confirm Password</span>
                </div>
                <div className="register-div">
                    <input type="password" placeholder="Confirm new password" className="register-email-input" id="register-confirmPassword-input" autoComplete="new-password"/>
                </div>
                <div className="register-div">
                    <button className="next-btn" onClick={signUp}>Register</button>
                </div>
                <div className="register-div">
                    <button className="register-login-btn" onClick={()=>{navigate('/login-page')}}>Already have an Account</button>
                </div>
                <div className="privacy-div">
                    <span className="termsAndCondition">We won't reveal your email to anyone else nor use it to send you spam.</span>
                </div>
            </div>
        </div>
    )
}

export default Register