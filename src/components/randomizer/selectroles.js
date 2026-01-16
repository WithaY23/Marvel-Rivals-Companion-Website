import '../../stylesheets/selectroles.css'
import questionMark from '../../images/question-mark.jpg'
import duelistImage from '../../images/Duelist.png'
import strategistImage from '../../images/Strategist.png'
import vanguardImage from '../../images/Vanguard.png'







import { useEffect, useState } from 'react';
import { Screens } from '../pagecontroller';
const Roles = {
    Vanguard: Symbol("Vanguard"),
    Duelist: Symbol("Duelist"),
    Strategist: Symbol("Strategist")
};
Object.freeze(Roles);

/**
 * 
 * @param {{playersLeft: Number, setPlayersLeft: function}} props
    * playersLeft- state variable with the number of players left to randomize roles for, chosen in SelectPlayers
 * @returns {JSX.Element} The screen for selecting roles for a user, repeated as many times as needed (logic handled with playersLeft variable)
 */
export default function SelectRoles(props)
{
    /* 
    Send these objects to be updated by RoleOptions and read by ProgressBar
    All state objects
    */
    let classInstance1= {duelist: false, vanguard:false, strategist:false}, 
    classInstance2 = {duelist: false, vanguard:false, strategist:false}, 
    classInstance3 = {duelist: false, vanguard:false, strategist:false}, 
    classInstance4 = {duelist: false, vanguard:false, strategist:false}, 
    classInstance5 = {duelist: false, vanguard:false, strategist:false};
    const [rolesMade, setRolesMade] = useState(0); // Counter for the number of roles made currently
    const [classInstanceArr, setRoleList] = useState([classInstance1,classInstance2,classInstance3,classInstance4,classInstance5]); // Current state of roles made, passed to progress bar and maintained internally
    const [currentRoleSelectionFinished, setCurrentRoleSelectionFinished] = useState(false);
    const [updateClassInstance, setUpdateClassInstance] = useState(classInstance1);
    /**
     * User selected an option, reflect changes in progress bar and internal memory
     */
    let completedPlayerChoice = false;
    function updateUserSelection()
    {
        if(rolesMade === props.playersLeft - 1)
        {
            console.log(`In truthy completedPlayerChoice`);
            // Set variable if so
            props.setPlayersLeft(0);
            props.setCurrentScreen(Screens.Randomizer_Results);
            return;
        }
        setRolesMade(prev => { // Update the value of rolesMade
            
            setRoleList((classArr) =>{ // Update the entire roles list
                    let newArrClass = classArr; // Copy the array, shallow should be fine, no copy even really needed
                    newArrClass[prev] = updateClassInstance; // Update the specific index and return object
                    console.log(`NewArrClass ${newArrClass}`);

                    return [...newArrClass];
                }); // Update the character list (for progress bar)
            console.log(`prev value ${prev} playersLeft is ${props.playersLeft}`)
            if(prev === props.playersLeft - 1) // Check to see if done updating all role values
            {
                completedPlayerChoice = true;
            }
            console.log(`Previous roles made ${rolesMade} completedPlayerChoice ${completedPlayerChoice}`);

            return prev+ 1});
        console.log(`Before compare of truthy completedPlayerChoice ${completedPlayerChoice}`);
    }

    useEffect(() =>{ // When the current role is chosen, call the function
        if(currentRoleSelectionFinished)
        {
            console.log(`Current role selection is set to true`);
            updateUserSelection();
            setCurrentRoleSelectionFinished(false);
            console.log(`Finished updateUserSelection and queued current role selection to be false`);

        }
    },[currentRoleSelectionFinished]);
    
    // ISSUE ACTUALLY SETTING THIS TO BE TRUE AS setState is async
    if(completedPlayerChoice === true) // Finished the loop, set state variable, probably playersLeft for efficiency, to indicate finished
    {
        console.log(`In truthy completedPlayerChoice`);
        // Set variable if so
        props.setPlayersLeft(0);
        props.setCurrentScreen(Screens.Randomizer_Results)
        return;
    }
    else
    {
        return <>
                <RoleOptions setCompleted={setCurrentRoleSelectionFinished} setClassChoice={setUpdateClassInstance} > </RoleOptions>
                <ProgressBar selections={classInstanceArr}></ProgressBar> {/* Centered near bottom of screen to display continuous update on user's selections */}
               </>;
    }
    
}

/**
 * A checkbox of options for 3 of the roles available by Marvel Rivals, Vanguard, Duelist, Strategist 
 * @param {{setCompleted:state function, setClassChoice state function}, } props 
    * completed- state variable that maintains whether next button is clicked or not (NOT NEEDED HERE DO NOT PASS DOWN)
    * setCompleted: indicate that the button is clicked
    * classChoice- updated object (YES state) that is changed based on the user selection (NOT NEEDED HERE DO NOT PASS DOWN)
    * setClassChoice state function- update object stored in parent function based on user selection
 * @returns {JSX.Element} The "checkboxes" for the different roles with neat designs!
 */
function RoleOptions(props)
{
    const [selection, setSelection] = useState({duelist:false,vanguard:false,strategist:false}); // Actually write out the fields...
    /*In order to have "checkboxes with neat designs", create images that are clickable with internal logic on updating
     some tracker (NOT direct passed state probably, might affect progressBar; local state variable instead)
     for role selected  */
    
    function updateCheckboxRole(choice)
    {
        switch (choice) 
        {
            case Roles.Duelist:
                setSelection((prev) => ({ ...prev, duelist: !prev.duelist }));
                break;
            case Roles.Vanguard:
                setSelection((prev) => ({ ...prev, vanguard: !prev.vanguard }));
            break;

            case Roles.Strategist:
                setSelection((prev) => ({ ...prev, strategist: !prev.strategist }));
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
        props.setClassChoice(() =>selection); // Update the class object being operated on
        setSelection(() =>({duelist:false,vanguard:false,strategist:false})); // Update actual objects
        props.setCompleted(() => true); // Indicate that current selection is finished and to move on
        console.log("selectroles.js | RoleOptions | Set the current selection as completed and finished current selection");
    }
    return <>
    <img src={duelistImage} className={selection.duelist ? 'select-roles-selected' : 'select-roles-notSelected'} onClick={() =>updateCheckboxRole(Roles.Duelist)}></img> {/* Duelist */}
    <img src={vanguardImage} className={selection.vanguard ? 'select-roles-selected' : 'select-roles-notSelected'} onClick={() =>updateCheckboxRole(Roles.Vanguard)}></img> {/* Vanguard */}
    <img src={strategistImage} className={selection.strategist ? 'select-roles-selected' : 'select-roles-notSelected'} onClick={() =>updateCheckboxRole(Roles.Strategist)}></img> {/* Strategist */}
    <button onClick={updatePlayerRole}>Next</button> {/* Continue to next character */}
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
 *    classInstance__OBJ__: {duelist: *bool*, vanguard:*bool*, strategist:*bool*}
 * 
 * 
 * 
 *  
 * @returns 
 */
function ProgressBar(props) //create a class instance? of an object with three fields, damage, tank, healer that gets sent and accessed here
{
    // Dummy values for meeee
    let rolesArr = props.selections;
    return (
        <div className='select-roles-progressbar-container'> {/* Needs a container to actually contain the icons*/}
            {/* PROGRESSION BAR */}
            <ProgressBarIcons selection= {rolesArr[0]}/>
            <ProgressBarIcons selection= {rolesArr[1]}/>
            <ProgressBarIcons selection= {rolesArr[2]}/>
            <ProgressBarIcons selection= {rolesArr[3]}/>
            <ProgressBarIcons selection= {rolesArr[4]}/>
        </div>
    )
}

/*
Start with an icon that is default filled with 5 question marks. Return images corresponding to the relevant 
role(s) chosen.
*___________________*
| A | ? | ? | ? | ? |
*___________________*

@param: props = {selection: {classInstance:{duelist: *bool*, vanguard:*bool*, strategist:*bool*}}}
*/
function ProgressBarIcons(props) 
{
    if(props.selection.duelist)
    {
        if(props.selection.vanguard)
        {
            if(props.selection.strategist)
            {
                // Duelist, Vanguard, Strategist CHANGE
                return <img className='select-roles-progress-bar-icon' src={strategistImage} alt='Duelist, Vanguard, Strategist icon'/>
            }
            else
            {
                // Duelist, Vanguard CHANGE
                return <img className='select-roles-progress-bar-icon' src={vanguardImage} alt='Duelist, Vanguard icon'/>
            }
        }
        else
        {
            if(props.selection.strategist)
            {

            }
            else
            {
                // Duelist
                return <img className='select-roles-progress-bar-icon' src={duelistImage} alt='Duelist icon'/>
            }
        }
    }
    else
    {
        if(props.selection.vanguard)
        {
            if(props.selection.strategist)
            {

            }
            else
            {

            }
        }
        else
        {
            if(props.selection.strategist)
            {

            }
            else //none selected, display random
            {
                return <img className='select-roles-progress-bar-icon' src={questionMark} alt='question mark icon'/>
            }
        }
    }
}