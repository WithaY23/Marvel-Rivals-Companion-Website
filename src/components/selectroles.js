import '../stylesheets/selectroles.css'
import questionMark from '../images/question-mark.jpg'
export default function ProgressBar(props) //create a class instance? of an object with three fields, damage, tank, healer that gets sent and accessed here
{
    const classInstance1= {damage: false, tank:false, healer:false}, 
    classInstance2 = {damage: false, tank:false, healer:false}, 
    classInstance3 = {damage: false, tank:false, healer:false}, 
    classInstance4 = {damage: false, tank:false, healer:false}, 
    classInstance5 = {damage: false, tank:false, healer:false};
    return (
        <div className='progressbar-container'>
            {/* PROGRESSION BAR */}
            <ProgressBarIcon selection= {classInstance1}/>
            <ProgressBarIcon selection= {classInstance2}/>
            <ProgressBarIcon selection= {classInstance3}/>
            <ProgressBarIcon selection= {classInstance4}/>
            <ProgressBarIcon selection= {classInstance5}/>
        </div>
    )
}
function ProgressBarIcon(props) //props contain: class instance?
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