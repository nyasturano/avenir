import './header.css';
import { useNavigate } from "react-router-dom";

import back from '../../Icons/back.png';
export const Header = ({title}) => {

    const navigate = useNavigate();
    
    return (<header className="mb-5 pe-5 d-flex flex-row align-items-center justify-content-between">
        <button onClick={() => navigate(-1)} className="ps-5">
            <img src={back} alt="back"></img>
        </button>
        {title}
    </header>);
}