import React from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, Button, CardActions, CardMenu, IconButton} from 'react-mdl';

class Projets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }
    showProject() {
        if (this.state.activeTab === 0) {
            return (
            <div style= {{display: 'flex', justifyContent: 'space-between', padding:"2em"}}>

                <Card>

                    <CardTitle style={{background : 'url(https://www.insauga.com/sites/default/files/imagecache/lead-image-full/article/2020/07/plane.jpeg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '400px',
                    color: '#fff'}}>
                       Custumer1: Travel App
                    </CardTitle>

                    <CardText>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with..</p>
                    </CardText>

                    <CardActions border>
                        <Button colored> GitHub</Button>
                        <Button colored> GitLab</Button>
                        <Button colored> CodePen</Button>
                    </CardActions>

                    <CardMenu>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>

                <Card>

                    <CardTitle style={{background : 'url(https://c4.wallpaperflare.com/wallpaper/817/118/479/ford-mustang-shelby-gt-city-parking-lot-wallpaper-preview.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '400px',
                    color: '#fff'}}>
                       Custumer2: Parking App
                    </CardTitle>

                    <CardText>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with..</p>
                    </CardText>

                    <CardActions border>
                        <Button colored> GitHub</Button>
                        <Button colored> GitLab</Button>
                        <Button colored> CodePen</Button>
                    </CardActions>

                    <CardMenu>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>

                <Card>

                    <CardTitle style={{background : 'url(https://i.cbc.ca/1.5560711.1588898795!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/spin-society.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '400px',
                    color: '#fff'}}>
                       Custumer3: Gym App
                    </CardTitle>

                    <CardText>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with..</p>
                    </CardText>

                    <CardActions border>
                        <Button colored> GitHub</Button>
                        <Button colored> GitLab</Button>
                        <Button colored> CodePen</Button>
                    </CardActions>

                    <CardMenu>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
            </div>
            )
        }else if (this.state.activeTab ===1){
            return(
                <div><h1>Java project description</h1></div>
            )
        }else if (this.state.activeTab===2){
            return(
                <div><h1>C/C++ project description</h1></div>
            )
        }else {
            return(
                <div><h1> VHDL project description</h1></div>
            )
        }
    }



    render() {
        return (
            <div>
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab : tabId})} ripple >
                    <Tab> React JS</Tab>
                    <Tab> Java/JEE</Tab>
                    <Tab> C/C++</Tab>
                    <Tab> VHDL</Tab>
                
                </Tabs>

                <section>
                    {this.showProject()}
                </section>




            </div>


        )
    }
}

export default Projets;