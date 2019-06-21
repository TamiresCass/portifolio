import React, {Component} from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'
import Foto from "../assets/foto.jpg"

class Contact extends Component{
    render(){
        return(
           <div className="contact-body">
               <Grid className="contact-grid">
               <Cell col={6}>
                   <h2>Tamires Cassiano</h2>
                   <img
                   src={Foto}
                   alt="avatar"
                   style={{height:'250px'}}
                   />
                   <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>Estudante de Engenharia de Software, Bacharel em Administração de Empresas. Amante por livros e filmes de romance e terror, apaixonada pela comida da minha mãe e por comida italiana. Na TV o que me prende a atenção e F1 e StockCar. Minhas disciplinas favoritas no curso de Engenharia de Software são: Qualidade de Software e Inteligencia Artificial. Quer saber mais sobre mim e meus projetos, entre em contato! </p>
               </Cell>
               <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">

                    <List>
                    <ListItem>
                         <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                             <i className="fa fa-phone-square" aria-hidden="true"/>
                             (14) 99824-8075</ListItemContent>
                    </ListItem>

                    <ListItem>
                         <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                             <i className="fa fa-whatsapp" aria-hidden="true"/>
                             (14) 99824-8075</ListItemContent>
                    </ListItem>

                    <ListItem>
                         <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                             <i className="fa fa-envelope" aria-hidden="true"/>
                             tamirescassiano8@gmail.com</ListItemContent>
                    </ListItem>
                    
                    </List>
                    </div>
                    
                    
               </Cell>
               </Grid>
           </div> 
        )
    }
}
export default Contact;