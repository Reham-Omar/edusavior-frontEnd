import React, { useState,useEffect } from 'react';
import {BrowserRouter,Route, NavLink, Router} from 'react-router-dom';
import { Redirect } from "react-router-dom";

//==================================()==================================\\

import useLogin from './hooks/auth/auth';
import Show from './components/show/';
import Login from  './components/signin/signin';
import Logout from  './components/signup/signup';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Classes from './components/classes/classes';
import Dashboard from './components/dashboard/dashboard';
import AddCourse from './components/addcourse/addcourse'
import Details from './components/details/details'

//====================================================================\\

const App = (props) => {
const [loggedIn,user,login,logedout , tokenSigned] = useLogin();

// let check = false;
// let log ;
// let userInfo;
// let mytoken;
// if(loggedIn){
//     check = loggedIn;
//     log = logedout;
//     userInfo = user;
//     mytoken = tokenSigned;
    
// }else if(signedUp){
//     check = signedUp;
//     log = logout;
//     userInfo = userSign;
//     mytoken = token;
// }


        return(
            <>
            <BrowserRouter>

            <Route exact path='/signup'>
                <Logout  />
            </Route>

            <Show condition={!loggedIn }>
                 <Redirect to="/" /> 
                 <Route exact path='/'>

                <Login login={login}  />
                 </Route>
            </Show>

            <Show condition={loggedIn}>

            <Header user ={user} logout={logedout} />

            <Route exact path='/'>
                <Home token={tokenSigned}  user ={user} />
            </Route>

            <Route exact path='/classes'>
                <Classes token={tokenSigned}  user ={user}/>
            </Route>

            <Route exact path='/dashboard'>
                <Dashboard  token={tokenSigned}  user ={user}/>
            </Route>

            <Route exact path='/addcourse'>
                <AddCourse token={tokenSigned}  user ={user}/>
            </Route>

            <Route exact path='/details/:id'>
                <Details token={tokenSigned}  user={user}/>
            </Route> 

            <Footer/>

             </Show>

            </BrowserRouter>
             </>
        )
 
}
export default App;