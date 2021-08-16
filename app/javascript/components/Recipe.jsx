import React from 'react';
import axios from "axios";

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            existing_items: [],
            recipes: []
        };
    }
    componentDidMount(){
        axios.get('http://localhost:3000/ingredient').then(response => this.setState({ existing_items: response.data }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
        axios.get('http://localhost:3000/ingredient/get_recipe').then(response => this.setState({ recipes: response.data }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }
    render(){
        return(
            <div className="container">
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        {this.state.existing_items.map((item, i) =>(
                            <li>{item.fridge_item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Recipe;
