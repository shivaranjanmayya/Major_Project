//import logo from './logo.svg';
//import './App.css';
import './default.scss';
import React from 'react';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Registration from './Pages/Registration';
import { Route, Routes,Navigate } from 'react-router-dom';
import Footer from './Components/Footer';
import Login from './Pages/Login';
//import 'font-awesome/css/font-awesome.min.css';
import {auth, handleUserProfile} from './firebase/utlis';
import { Component } from 'react';
import Recovery from './Pages/Recovery';
const initialState={
  currentUser:null
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ...initialState

    };
  }

  authListner=null;

  componentDidMount(){
    this.authListner=auth.onAuthStateChanged(async userAuth=>{
     if(userAuth){
       const userRef=await handleUserProfile(userAuth);
       userRef.onSnapshot(snapshot=>{
         this.setState({currentUser:{
           id:snapshot.id, ...snapshot.data()
         }})


       })
     }
this.setState({...initialState})
    })

  }
  componentWillUnmount(){
    this.authListner();

  }
  render(){
    const {currentUser}=this.state;

    return (
      <div className="App">
  
        <Header currentUser={currentUser}/>
        <div className='main'>
          <Routes>
            
            <Route exact path="/" element={<HomePage />} />
            
            {currentUser &&(
              
              <Route path="*" element={<Navigate to ="/" />}/>
            )}

            {!currentUser &&(
            
              <><Route path="/login" element={<Login />} /><Route path="/registration" element={<Registration />} /></>
            

            )}
            <Route exact path="/recovery" element={<Recovery />} />
          </Routes>
        </div>
        <Footer/>
  
      </div>
    );

  }
  
}

export default App;
