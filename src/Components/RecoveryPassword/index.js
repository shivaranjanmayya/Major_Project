import React, { Component } from 'react';
import FormInput from '../Forms/FormInput';
import './styles.scss';
import AuthWrapper from '../AuthWrapper';
import {auth} from './../../firebase/utlis';
//import {withRouter} from 'react-router-dom';
const initialstate={
    email:'',
    errors:[]
}
class RecoveryPassword extends Component {
    constructor(props){
        super(props);
        this.state={...initialstate};
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        const{name,value}=e.target;
        this.setState({
            [name]:value
        });

    }
    handleSubmit=async(e)=>{
        e.preventDefault();
        const{email}=this.state;
        
        const config={
            url:'http://localhost:3000/login'
        }
      try{

       await auth.sendPasswordResetEmail(email,config)
       .then(()=>{
           this.props.history.push('/login')

       })
       .catch(()=>{
           const err=["Email not found"];
           this.setState({
               errors:err
           })
           

       });
      }catch(err){
          console.log(err);
      }

    }

    
    render() {
        const configAuthWrapper={
            headline: 'Forgot Password'
        }
        const{email,errors}=this.state;
        return (
            <div>
                <AuthWrapper {...configAuthWrapper}>
                    <div className='formWrap'>
                        {errors.length>0 &&(
                            <ul>
                                {
                                    errors.map((e,index)=>{
                                        return(<li key={index}>
                                            {e}
                                        </li>)
                                    })
                                }
                            </ul>
                        )}
                        <form onSubmit={this.handleSubmit}>
                            <FormInput 
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={this.handleChange}
                            
                            />
                            <button className='btn' type='submit'>Recover Password</button>

                        </form>
                    </div>

                </AuthWrapper>
                
            </div>
        );
    }
}
export default RecoveryPassword;

