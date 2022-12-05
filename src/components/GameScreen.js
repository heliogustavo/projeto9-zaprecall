import React from "react";
import Bottom from "./Bottom";
import Questions from "./Questions";
import logo from './assets/images/logo.png';


export default function GameScreen(){
    const [arrayStats, setArrayStats] = React.useState([]);
    const [arrayResult, setArrayResult] = React.useState([]);    

    return (
        <>
            <div className="containerGame">
                <div className="top">
                    <img className="logoGame" src={logo} alt="logo"></img>
                    <h1> Zap Recall</h1>
                </div>
                <Questions arrayStats={arrayStats} setArrayStats={setArrayStats} arrayResult={arrayResult} setArrayResult={setArrayResult}/>
                <Bottom arrayStats={arrayStats} setArrayStats={setArrayStats} arrayResult={arrayResult} setArrayResult={setArrayResult}/>
            </div>
        </> 
    );
}