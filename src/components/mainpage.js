import '../stylesheets/mainpage.css';
import '../stylesheets/index.css';

export default function MainPage()
{
    return(
    <div className= 'mainContainer'>
        <div className='mainHeaderContainer'>
            <h1>Marvel Rivals</h1>
        </div>
        <div className='mainButtonContainer'>
            <button className={`button mainButton`} id='characterListButton' onClick={() => {}}>Character List</button>
            <button className={`button mainButton`} id='randomizerButton' onClick={() => {}}>Randomizer</button>
            <button className={`button mainButton`} id='teamsButton' onClick={() => {}}>Teams</button>
        </div>
    </div>
    )
}