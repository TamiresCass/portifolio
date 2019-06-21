import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl';


class Blog extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>

                        <div>
                        <a href="https://www.infoq.com/br/news/2019/06/Microsoft-Robotic-Platform/">teste</a>
                        </div>

                        
                    </Cell>
                    </Grid>
                                    
            </div>
        )
    }
}
export default Blog;