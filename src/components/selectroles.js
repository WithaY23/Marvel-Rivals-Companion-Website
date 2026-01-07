import '../stylesheets/selectroles.css'
import questionMark from '../images/question-mark.jpg'
const Roles = {
    D: Symbol("D"),
    T: Symbol("T"),
    H: Symbol("H")
};
Object.freeze(Roles);

/**
 * 
 * @param {{playersLeft: Number, a: String}} props
    * playersLeft- state variable with the number of players left to randomize roles for, chosen in SelectPlayers
 * @returns {JSX.Element} The screen for selecting roles for a user, repeated as many times as needed (logic handled with playersLeft variable)
 */
export default function SelectRoles(props)
{
    /* 
    Send these objects to be updated by RoleOptions and read by ProgressBar
    All state objects
    */
    classInstance1= {damage: false, tank:false, healer:false}, 
    classInstance2 = {damage: false, tank:false, healer:false}, 
    classInstance3 = {damage: false, tank:false, healer:false}, 
    classInstance4 = {damage: false, tank:false, healer:false}, 
    classInstance5 = {damage: false, tank:false, healer:false};

    return <>
    <RoleOptions playersLeft={props.playersLeft} classChoice={classInstance1} setClassChoice={function abc(){}}> </RoleOptions>
    <ProgressBar></ProgressBar> {/* Centered near bottom of screen to display continuous update on user's selections */}
    </>;
}

/**
 * A checkbox of options for 3 of the roles available by Marvel Rivals, Vanguard, Duelist, Strategist 
 * @param {{playersLeft: Number, classChoice: classInstance__OBJ__}} props 
    * REMOVED (maintained in SelectRoles) playersLeft- state variable with the number of players left to randomize roles for, chosen in SelectPlayers and 
    * updated here through decrementing upon confirming a role selection
    * REPLACED PLAYERSLEFT | completed- state variable that maintains whether next button is clicked or not
    * classChoice- updated object (YES state) that is changed based on the user selection
 * @returns {JSX.Element} The "checkboxes" for the different roles with neat designs!
 */
function RoleOptions(props)
{
    const [selection, setSelection] = useState({d:false,t:false,h:false}); // Actually write out the fields...
    /*In order to have "checkboxes with neat designs", create images that are clickable with internal logic on updating
     some tracker (NOT direct passed state probably, might affect progressBar; local state variable instead)
     for role selected  */
    
    function updateCheckboxRole(choice)
    {
        switch (choice) 
        {
            case Roles.D:
                setSelection((prev) => ({ ...prev, D: !prev.D }));
                break;
            case Roles.T:
                setSelection((prev) => ({ ...prev, T: !prev.T }));
            break;

            case Roles.H:
                setSelection((prev) => ({ ...prev, H: !prev.H }));
            break;
        
            default:

                console.error(`Unknown value of choice in data`); /* Don't use value of choice in fear of insertion... */
                break;
        }
    }
    /**
     * Updates complete variable to mark as completed and to perform further actions
     * @param {}
     * @returns
     */
    function updatePlayerRole()
    {
        props.setClassChoice((prev) =>prev); // Update the object
        props.completed = true; // Alert upper object that next screen is to be done
    }
    return <>
    <img src='../images/' className={selection.t ? 'selected' : 'notSelected'} onClick={RoleOptions(Roles.T)}></img> {/* Vanguard */}
    <img src='../images/' className={selection.d ? 'selected' : 'notSelected'} onClick={RoleOptions(Roles.D)}></img> {/* Duelist */}
    <img src='../images/' className={selection.h ? 'selected' : 'notSelected'} onClick={RoleOptions(Roles.H)}></img> {/* Strategist */}
    <button>Next</button> {/* Continue to next character */}
    </>

}
















/**
 * This will receive user selected data in the form of classInstance objects bundled together as a selections object.
 * These will return distinct images per combination of roles, covering a powerset of the roles.
 * As selections (of roles PROBABLY or specific character?) are chosen, they are updated in the progress bar. 
 * The bar fills from the left. If there are less than 5 players, it leaves the last players as '?' icon.
 *
 * @param: {{selections: {p1: {classInstance__OBJ__}, p2: {classInstance__OBJ__}, p3: {classInstance__OBJ__},
 * p4: {classInstance__OBJ__}, p5: {classInstance__OBJ__}}}} props- contains classInstance objects
 *    classInstance__OBJ__: {damage: *bool*, tank:*bool*, healer:*bool*}
 * 
 * 
 * 
 *  
 * @returns 
 */
function ProgressBar(props) //create a class instance? of an object with three fields, damage, tank, healer that gets sent and accessed here
{
    // Dummy values for meeee
    const classInstance1= {damage: false, tank:false, healer:false}, 
    classInstance2 = {damage: false, tank:false, healer:false}, 
    classInstance3 = {damage: false, tank:false, healer:false}, 
    classInstance4 = {damage: false, tank:false, healer:false}, 
    classInstance5 = {damage: false, tank:false, healer:false};
    return (
        <div className='progressbar-container'> {/* Needs a container to actually contain the icons*/}
            {/* PROGRESSION BAR */}
            <ProgressBarIcons selection= {classInstance1}/>
            <ProgressBarIcons selection= {classInstance2}/>
            <ProgressBarIcons selection= {classInstance3}/>
            <ProgressBarIcons selection= {classInstance4}/>
            <ProgressBarIcons selection= {classInstance5}/>
        </div>
    )
}

/*
Start with an icon that is default filled with 5 question marks. Return images corresponding to the relevant 
role(s) chosen.
*___________________*
| A | ? | ? | ? | ? |
*___________________*

@param: props = {selection: {classInstance:{damage: *bool*, tank:*bool*, healer:*bool*}}}
*/
function ProgressBarIcons(props) 
{
    if(props.selection.damage)
    {
        if(props.selection.tank)
        {
            if(props.selection.healer)
            {

            }
            else
            {

            }
        }
        else
        {
            if(props.selection.healer)
            {

            }
            else
            {

            }
        }
    }
    else
    {
        if(props.selection.tank)
        {
            if(props.selection.healer)
            {

            }
            else
            {

            }
        }
        else
        {
            if(props.selection.healer)
            {

            }
            else //none selected, display random
            {
                return <img className='progressbar-icon' src={questionMark} alt='question mark icon'/>
            }
        }
    }
}