import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Foto from "../assets/foto.jpg"

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin:'auto' }}>
                <Grid className= "landing-grid">
                    <Cell col={12}>
                        <img 
                            src={Foto}
                            alt="avatar"
                            className="avatar-img"
                        />

                    <div className="banner-text">
                        <h1>Estudante de Eng. de Software</h1>
                        <hr/>

                        <p>HTML / CSS | SOFTWARE R | JAVA | MACHINE LEARNING | BIG DATA | QA </p>

                        <div className="social-links">
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>

                            
                        </div>
                    </div>
                    </Cell>
                    </Grid>

                    
            </div>
        )
    }
}
export default Landing;