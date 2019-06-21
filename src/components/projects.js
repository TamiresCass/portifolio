import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };

    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                        color: 'black', height: '176px', background:
                            'url(http://academiadosneuronios.com.br/site/wp-content/uploads/2018/06/html_css.png) center / cover'
                    }}>HTML / CSS</CardTitle>
                    <CardText>
                        Projeto desenvolvido para a disciplina de Web 1
                </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{
                    color: 'black', height: '176px', background:
                        'url(http://eddietruong.me/resources/img/5.jpg) center / cover'
                }}>BIG DATA / MACHINE LEARNING</CardTitle>
                <CardText>
                    Projeto desenvolvido na Iniciação Cientifica - 2018. Titulo: BIG DATA E REDES BAYESIANAS, APLICADOS À DADOS DE SAÚDE PÚBLICA
            </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            )
        } 
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HTML / CSS</Tab>
                    <Tab>BIG DATA / MACHINE LEARNING</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">)this.toggleCategories()</div>
                        </Cell>
                    </Grid>

                    {this.toggleCategories()}


                </section>
            </div>
        )
    }
}
export default Projects;