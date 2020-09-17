import React, {useState} from 'react';
import techImg from '../imgs/technician.png';
import userImg from '../imgs/user.png';

function HomePage() {
    // State for user choice
    const [choice,setChoice] = useState([userImg,techImg]);
    const [btnInfo,setBtnInfo] = useState(['Yes','No']);
    const [style, setStyle] = useState(['btn btn-primary','btn btn-danger']);

    // Event handler for button choice
    const onHover = (e) => {
        if(e.currentTarget.textContent === 'UserYes'){
            setChoice(e.currentTarget.textContent.replace('Yes',''));
            setBtnInfo(['Yes', 'No'])
            setChoice([userImg,techImg])
        }else{
            setChoice(e.currentTarget.textContent.replace('No',''));
            setBtnInfo(['No', 'Yes']);
            setStyle(['btn btn-danger','btn btn-primary']);
            setChoice([techImg,userImg]);
        }
    }
    const onOut = () => {
        setBtnInfo(['Yes', 'No'])
        setStyle(['btn btn-primary','btn btn-danger']);
    }

    // Rendering Component
    return (
        <div className='container-fluid' id='home'>
            <h1>Are you a <img alt='choice imgs' src={choice[0]} />?</h1>
            <span>
                <div>
    <p onMouseOver={onHover}>User<a className={style[0]} href='/user' >{btnInfo[0]}</a></p></div> 
            <div>
    <p onMouseOver={onHover} onMouseOut={onOut}>Technician<a className={style[1]} href='/technician'>{btnInfo[1]}</a></p></div>
            </span>
            
            
        </div>
    )
}

export default HomePage
