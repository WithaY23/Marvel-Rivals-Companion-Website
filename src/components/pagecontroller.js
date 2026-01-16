import MainPage from "./mainpage";
import SelectPlayers from "./randomizer/selectplayers";
import SelectRoles from "./randomizer/selectroles";
import { useState } from "react";
export const Screens = {
    Main: Symbol("Main"),
    Randomizer_Main: Symbol("Randomizer_Main"),
    Randomizer_PlayerSelect: Symbol("Randomizer_PlayerSelect"),
    Randomizer_RoleSelect: Symbol("Randomizer_RoleSelect"),
    Randomizer_Results: Symbol("Randomizer_Results"),
    Character_Main: Symbol("Character_Main"),
    Team_Main: Symbol("Team_Main")
};

export default function Controller()
{
    const [currentScreen, setCurrentScreen] = useState(Screens.Main); //LOOK AT CSE316
    const [playerCount, setPlayerCount] = useState(0);

    /**
     * Display the current needed screen
     */
    function display(view)
    {
        console.log(`In display`);
        switch (view) 
        {

            case Screens.Main:   
            {
                return(
                <MainPage 
                currentScreen = {currentScreen} 
                setCurrentScreen={setCurrentScreen}/>)
                break;
            }
            case Screens.Randomizer_Main:
            {
                //???? Is this needed?
                break;
            }
            case Screens.Randomizer_PlayerSelect:
            {
                return(
                <SelectPlayers
                currentScreen = {currentScreen} 
                setCurrentScreen={setCurrentScreen}
                setPlayerCount={setPlayerCount}

                />)
                break;
            }
            case Screens.Randomizer_RoleSelect:
            {
                return (
                <SelectRoles
                currentScreen = {currentScreen} 
                setCurrentScreen={setCurrentScreen}
                playersLeft={playerCount}
                setPlayersLeft={setPlayerCount}
                />)
                break;
            }
            default:
                break;
        }
        return <p> AHHHHHH</p>;
    }

    return(<div>{display(currentScreen)}</div>
    )
}