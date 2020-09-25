import React from 'react';
import Header from './Header';
import {BrowserRouter as Router,Route,Switch,useParams} from 'react-router-dom';
import Chats from './Chats';

function TinderHome() {
   
    return (
        <Router>
            {/* Actual routing implementation*/}
            <Switch>
                <Route path='/chat/:name'>
                    <Header backBtn="/chat"/> 
                    <Chat />
                </Route>
                <Route path='/chat'>
                    <Header backBtn="/"/> 
                    <Chats />
                </Route>
                <Route path='/profile'>
                    <Header />
                    <Profile />
                </Route>
                <Route path='/'>
                     <Header /> 
                    <Tinder />
                </Route>
            </Switch>
        </Router>
    )
}
const Chat = () =>{
    let {name} = useParams();
    return (
        <div className="text-center">We are Chatting <h4>{name}</h4></div>
    )
}
const Tinder = () =>{
    return (
        <div className="text-center">We are Tinder Home</div>
    )
}
const Profile = () =>{
    return (
        <div className="text-center">I am Nahid,from NSTU</div>
    )
}

export default TinderHome
