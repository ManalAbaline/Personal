import React from 'react';
import {Cell, Grid} from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

class Acceuil extends React.Component{
    render(){
return(
    <div>
        <Grid className= "grid-style">
            <Cell col={12}>
                <img
                src="https://icon-library.com/images/web-developer-icon/web-developer-icon-16.jpg"
                alt="avatar"
                className = "img-style"
                />
                <div className="banner-style">
                    <h1> Software Developer</h1>
                    <hr/>
                    <p> Java | C++ | HTml/Css | ReactJS | C# </p>
                    <div className= "reseaux-sociaux">
                        <a href="https://ca.linkedin.com/in/manal-abaline-22492a15a">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        </a>

                        <a href="https://github.com/ManalAbaline">
                        <FontAwesomeIcon icon={faGithub} />    
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100008426868370">
                        <FontAwesomeIcon icon={faFacebook}/>   
                        </a>
                        
                    </div>
                </div>

            </Cell>
            
            
             </Grid>
    </div>
    
)
    }
}

export default Acceuil;