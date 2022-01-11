import './styles.scss';
import Button from '../Forms/Button';
import {signInWithGoogle,auth} from './../../firebase/utlis';
import {signInWithFacebook} from './../../firebase/utlis'
import { Component } from 'react';
import FormInput from '../Forms/FormInput';
import AuthWrapper from '../AuthWrapper';
import { Link } from "react-router-dom";
const initialState={
    email:'',
    password:''
}

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={...initialState};
        this.handleChange=this.handleChange.bind(this);
    }
    handleSubmit =async e=>{
        e.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({...initialState});

        }catch(err){
            console.log(err);

        }

    }
    handleChange(e){
        const{name,value}=e.target;
        this.setState({
            [name]:value
        })
    }
    render(){
const{email,password}=this.state;
const configAuthWrapper={
    headline: 'Sign In'
}
        return(
            <AuthWrapper {...configAuthWrapper}>
                    <div className='formWrap'>
                        <form onSubmit={this.handleSubmit}>
                            <FormInput type="email" name="email" value={email} placeholder="Enter Your Email" onChange={this.handleChange}/>
                            <FormInput type="password" name="password" value={password} placeholder="Enter Your Password" onChange={this.handleChange}/>
                            <button className='btn' type='submit'>Login</button>
                            
                            <div className='socialSignin'>
                                <div className='row'>
                                   <Button onClick={signInWithGoogle}><i className="fab fa-google"></i>Login with Google</Button>
                                </div>
                                <div className='row'>
                                   <Button onClick={signInWithFacebook}><i className="fab fa-facebook"></i>Login with Facebook</Button>
                                </div>
                                <div className='links'>
                                    <Link to="/recovery">Forgot Password</Link>

                                </div>
                            </div>
                        </form>
    
                    </div>
                    </AuthWrapper>
        )

    }
    
}
export default SignIn;