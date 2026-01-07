import '../stylesheets/selectplayers.css'

export default function SelectPlayers(props)
{
    return (
        <>
            <h1>How Many Players Are In Your Lobby?</h1>

            <div className="select-players-buttons-container">
                <button className="select-players-button" onClick={() => {}}>1</button>
                <button className="select-players-button">2</button>
                <button className="select-players-button">3</button>
                <button className="select-players-button">4</button>
                <button className="select-players-button">5</button>
            </div>
        </>
    )
}