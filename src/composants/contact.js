import React from 'react';

class Contact extends React.Component {

    constructor(props) {
        super(props);


    this.state = {
        number: 0
    }


    }

    componentDidMount(){

        // console.log("The old value of number is "+ {this:state});
        // console.log("componentDidMount used to set state when mounting");
        // this.setState({number : 12});
        // console.log("The updated value of number is " + {this:state});
    }

    shouldComponentUpdate(nextProps, nexthState) {


        if (this.props !== nextProps){
            return false;
        }
        return false;
    }
    render() {
        

        return (

            <div>
                <h1>Contact's list</h1>
                <h2>{this.state.description}</h2>

            </div>
        )
        // return (
        //     <div className="contact-body">
        //         <Grid className="contact-grid">
        //             <Cell col={6}>
        //                 <h2>Manal Abaline</h2>
        //                 <img
        //                     src="https://icon-library.com/images/web-developer-icon/web-developer-icon-16.jpg"
        //                     alt="avatar"
        //                     className="img-style"
        //                 />
        //                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.. </p>
        //             </Cell>

        //             <Cell col={6}>
        //                 <h2>Contact</h2>
        //                 <hr />
        //                 <List>
        //                     <ListItem>
        //                         <ListItemContent icon="person">Mobile: 819 329 8301</ListItemContent>
        //                     </ListItem>
        //                     <ListItem>
        //                         <ListItemContent icon="person">Email: mabal086@uottawa.ca</ListItemContent>
        //                     </ListItem>
        //                 </List>
        //             </Cell>
        //         </Grid>
        //     </div>

        // )
    }
}

export default Contact;