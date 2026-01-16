// import '../stylesheets/selectplayers.css'
import {Screens} from '../pagecontroller'
export default function SelectPlayers(props)
{
    
    return (
        <>
            <h1>How Many Players Are In Your Lobby?</h1>

            <div className="select-players-buttons-container">
                <button className="select-players-button" onClick={() => {props.setPlayerCount(1);props.setCurrentScreen(Screens.Randomizer_RoleSelect)}}>1</button>
                <button className="select-players-button" onClick={() => {props.setPlayerCount(2);props.setCurrentScreen(Screens.Randomizer_RoleSelect)}}>2</button>
                <button className="select-players-button" onClick={() => {props.setPlayerCount(3);props.setCurrentScreen(Screens.Randomizer_RoleSelect)}}>3</button>
                <button className="select-players-button" onClick={() => {props.setPlayerCount(4);props.setCurrentScreen(Screens.Randomizer_RoleSelect)}}>4</button>
                <button className="select-players-button" onClick={() => {props.setPlayerCount(5);props.setCurrentScreen(Screens.Randomizer_RoleSelect)}}>5</button>
            </div>
        </>
    )
}