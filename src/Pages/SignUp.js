import React, {useEffect, useState} from "react"
import Logo from "../Icons/logo"
import * as FeatherIcons from "react-feather"
import axios from "axios"
import Error from "../utils/Error"
import {Link, useNavigate} from "react-router-dom"
import {connect} from "react-redux"
import Loader from "../utils/Loader"
import {authSuccess, checkAuthTimeout, storeAuth} from "../Store/Actions/authAction"
import {FormGroup, InputGroup, InputGroupText, FormFeedback} from "reactstrap"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required().min(2, "Enter a valid name"),
  firstName: yup.string().required().min(2, "Enter a valid name"),
  username: yup.string().required().min(3, "Enter a username with minimum of 3 characters"),
  email: yup.string().email("Enter a valid email").required(),
  password: yup.string().min(8, "Enter a password with a minimum of 8 characters "),
  confirmPassword: yup.string().equals([yup.ref("password")], "Passwords do not match")
}).required();

function SignUp(props) {

    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        document.body.classList.add('form-membership')
        if (props.isAuth) {
            navigate("/")
        }
    }, []);
    
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const submitForm = async (data) =>{
        setLoading(true)
        setError(null)
        // const payload = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     password: password,
        //     username: username.toLowerCase().trim(),
        //     email: email.toLowerCase().trim()
        // }
        try {
            const response = await axios.post("http://192.168.43.236:8000/users/signup", {...data})
            props.authSuccess(response.data.token, response.data.userID, response.data.refreshToken, response.data.profile, response.data.expirationTime)
            storeAuth(
                response.data.token, 
                response.data.refreshToken,
                response.data.expirationTime,
                response.data.profile,
                response.data.userID
            )
            props.checkAuthTimeout(response.data.expirationTime)
            setLoading(false)
            navigate("/")
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    console.log(errors);
    
    return (
        <div className="form-wrapper">
            <div className="logo">
                <Logo/>
            </div>
            <h5>Create account</h5>
            <Error error={error}/>
            <form
                onSubmit={handleSubmit(submitForm)}
            >
                <div className="form-group">
                {console.log(errors)}
                    <input 
                        type="text" 
                        className={`form-control ${errors.firstName ? "is-invalid" : ""}`} 
                        placeholder="Firstname"
                        {...register("firstName")}
                        name="firstName" 
                        required 
                        autoFocus
                        // value={firstName}
                        // onChange={(e) => setFirstName(e.target.value)}
                    />
                    <FormFeedback>
                            {errors.firstName?.message}
                    </FormFeedback>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                        placeholder="Lastname"
                        name="lastName"
                        {...register("lastName")} 
                        required
                        // value={lastName}
                        // onChange={(e) => setLastName(e.target.value)}
                    />
                    <FormFeedback>
                            {errors.lastName?.message}
                    </FormFeedback>
                </div>

                <div className="form-group">
                    <input 
                        type="email" 
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Email"
                        name="email"
                        required
                        {...register("email")} 
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormFeedback>
                            {errors.email?.message}
                    </FormFeedback>
                </div>
                <FormGroup>
                    <InputGroup>
                        <input 
                            type={showPassword ? "text" : "password" }
                            name="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            placeholder="Password"
                            {...register("password")} 
                            
                        />
                        <InputGroupText style={{height:"fit-content"}} onClick={()=>setShowPassword(!showPassword)}>
                            {showPassword ? <FeatherIcons.EyeOff/> : <FeatherIcons.Eye/>}
                        </InputGroupText>
                        <FormFeedback>
                            {errors.password?.message}
                        </FormFeedback>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <input 
                            type={showPassword ? "text" : "password" }
                            name="confirmPassword"
                            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                            {...register("confirmPassword")} 
                            placeholder="Confirm Password"
                        />
                        <FormFeedback>
                            {errors.confirmPassword?.message}
                        </FormFeedback>
                    </InputGroup>
                </FormGroup>
                <div className="form-group">
                    <input 
                        type="text" 
                        className={`form-control ${errors.username ? "is-invalid" : ""}`}
                        name="username"
                        placeholder="Username" 
                        required
                        {...register("username")} 
                    />
                    <FormFeedback>
                            {errors.username?.message}
                        </FormFeedback>
                </div>
                <button className="btn btn-primary btn-block">{loading ? <Loader/> : "Register"}</button>
                <hr/>
                <p className="text-muted">Already have an account?</p>
                <Link to="/sign-in" className="btn btn-outline-light btn-sm">Sign in!</Link>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      isAuth : state.auth.token ? true : false,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      authSuccess: ( token, userID, refreshToken, profile) => dispatch(authSuccess(token, userID, refreshToken, profile)),
      checkAuthTimeout: (time) => dispatch(checkAuthTimeout(time))
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

