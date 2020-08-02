import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, NavLink, Router } from 'react-router-dom';
import { Redirect } from "react-router-dom";

//==================================()==================================\\

import useLogin from './hooks/auth/auth';
import Show from './components/show/';
import Login from './components/signin/signin';
import Logout from './components/signup/signup';
import Header from './components/header/header';
import Header2 from './components/header2/header2';
import Header3 from './components/header3/header3';


import Footer from './components/footer/footer';
import Home from './components/home/home';
import Classes from './components/classes/classes';
import Dashboard from './components/dashboard/dashboard';
import AddCourse from './components/addcourse/addcourse'
import Details from './components/details/details'
import Question from './components/questions/questions';

//====================================================================\\

const App = (props) => {
    let [loggedIn, user, login, logedout, tokenSigned ] = useLogin();

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


    return (
        <>
            <BrowserRouter>

                <Route exact path='/signup'>
                    
                    <Logout />
                </Route>

                <Show condition={!loggedIn}>
                    <Redirect to="/" />
                    <Route exact path='/'>
                        <Login login={login} />
                        <Show condition={user === 'wrong password' || user === 'user not found'}>
                        <span>{user}</span>
                        </Show>

                    </Route>
                </Show>

                <Show condition={loggedIn}>


                    <Route exact path='/'>
                    <Header  user={user} logout={logedout} />
                        <Home token={tokenSigned} user={user} />
                    </Route>

                    <Route exact path='/classes'>
                    <Header  user={user} logout={logedout} />

                        <Classes token={tokenSigned} user={user} />
                    </Route>

                    <Route exact path='/dashboard'>
                    <Header2  user={user} logout={logedout} />
                        <Dashboard  token={tokenSigned} user={user} />
                    </Route>

                    <Route exact path='/addcourse'>
                    <Header  user={user} logout={logedout} />
                        <AddCourse token={tokenSigned} user={user} />
                    </Route>

                    <Route exact path='/details/:id'>
                    <Header3  user={user} logout={logedout} />
                        <Details token={tokenSigned} user={user} />
                    </Route>
                    <Route exact path='/QandA'>
                    <Header  user={user} logout={logedout} />
                        <Question token={tokenSigned} user={user} />
                    </Route>

                    <Footer />

                </Show>

            </BrowserRouter>
        </>
    )

}
export default App;