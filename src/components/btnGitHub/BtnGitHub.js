import './btnGitHub.css';

import gitHubIcon from './gitHub-black.svg'

// eslint-disable-next-line react/prop-types
const BtnGitHub = ({ link }) => {
    return ( 
        <a className="btn-outline" href={link} target="_blank" rel="noreferrer">
            <img src={gitHubIcon} alt=""/>
            GitHub repo
        </a>
     );
}
 
export default BtnGitHub;