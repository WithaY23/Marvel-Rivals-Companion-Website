import '../stylesheets/mainpage.css';
import '../stylesheets/index.css';
import { Screens } from './pagecontroller';
export default function MainPage(props)
{
return (<div className= 'mainContainer'>
                    <div className='mainHeaderContainer'>
                        <h1>Marvel Rivals</h1>
                    </div>
                    <div className='mainButtonContainer'>
                        <button className={`button mainButton`} id='characterListButton' onClick={() => {props.setCurrentScreen(Screens.Character_List)}}>Character List</button>
                        <button className={`button mainButton`} id='randomizerButton' onClick={() => {props.setCurrentScreen(Screens.Randomizer_PlayerSelect)}}>Randomizer</button>
                        <button className={`button mainButton`} id='teamsButton' onClick={() => {props.setCurrentScreen(Screens.Team_Main)}}>Teams</button>
                    </div>
        </div>)
}
