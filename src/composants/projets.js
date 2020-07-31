import React from 'react';
import { Tabs, Tab } from 'react-mdl';

class Projets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }
    showProject() {
        if (this.state.activeTab === 0) {
            return (
                <h1> This a react JS project</h1>
            )
        }else if (this.state.activeTab ===1){
            return(
                <h1>C'est mon projet Java</h1>
            )
        }else if (this.state.activeTab===2){
            return(
                <h1> C'est mon projet C/C++</h1>
            )
        }else {
            return(
                <h1> C'est mon projet VHDL</h1>
            )
        }
    }



    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onchange={(tabId) => this.setState({activeTab : tabId})} >
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