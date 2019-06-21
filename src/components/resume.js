import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Curriculo from "../assets/cv.pdf"
import Skills from './skills';
import Foto from "../assets/foto.jpg"
class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>

                        <div style={{textAlign: 'center'}}>
                            <img
                            src={Foto}
                            alt="avatar"
                            style={{height:'200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em' }}>Tamires Cassiano</h2>
                        <h4 style={{color: 'grey'}}>Estudante</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>Sou brasileira, nascida e criada em Marilia/SP, sou a filha mais nova, formada em Administração de Empresas na Universidade de Marília/SP, cursando Engenharia de Software na Universidade Tecnologica Federal do Paraná campus Cornélio Procópio/PR. Atualmente resido na Cidade de Cornélio Procópio e moro com mais 3 garotas de cursos distintos ao meu. Estou a procura de um estágio, de preferência nas áreas de QA ou IA.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>Avenida Alberto Carazzai, 1489 - Centro - Cornélio Procópio</p>
                        <h5>Phone</h5>
                        <p>(14) 99824-8075</p>
                        <h5>Email</h5>
                        <p>tamirescassiano8@gmail.com</p>
                        <a href={Curriculo} download="curriculo"><button>curriculo</button></a>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                        startYear={2016}
                        endYear={2019}
                        schoolName="UTFPR"
                        schoolDescription="Engenharia de Software"
                        />

                        <Education 
                        startYear={2011}
                        endYear={2016}
                        schoolName="UNIMAR"
                        schoolDescription="Administração de Empresas"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience
                        startYear={2011}
                        endYear={2012}
                        jobName="ETEC Vera Cruz"
                        jobDescription="Estágio administrativo"
                        />

                        <Experience
                        startYear={2012}
                        endYear={2013}
                        jobName="Secretaria da Fazenda"
                        jobDescription="Estágio administrativo"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                        skills="HTML"
                        progress={40}
                        />

                        <Skills
                        skills="CSS"
                        progress={40}
                        />

                        <Skills
                        skills="IA"
                        progress={30}
                        />

                        <Skills
                        skills="JAVA"
                        progress={55}
                        />


                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Resume;