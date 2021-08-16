import React from 'react';
import axios from "axios";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      existing_items: [],
      recipes: []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:3000/ingredient').then(response => this.setState({ recipes: response.data.recipes }))
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      });
    axios.get('http://localhost:3000/home').then(response => this.setState({ existing_items: response.data.items }))
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      });

  }

  componentDidUpdate(){
    axios.get('http://localhost:3000/ingredient').then(response => this.setState({ recipes: response.data.recipes }))
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      });
    axios.get('http://localhost:3000/home').then(response => this.setState({ existing_items: response.data.items }))
        .catch(error => {
          this.setState({ errorMessage: error.message });
          console.error('There was an error!', error);
        });
  }

  render(){
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <h4>What's in my fridge</h4>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {this.state.existing_items.map((item, i) =>(
                <li>{item.fridge_item}</li>
              ))}
            </ul>
          </div>
          <div className="navbar-header">
            <h4>Matched recipes</h4>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {this.state.recipes.map((item, i) =>(
                <p>
                  Name: {item.name} |
                  Author: {item.author} |
                  Ingredients: {item.ingredients} |
                  Prep time: {item.prep_time} |
                  Total time: {item.total_time} |
                  Cook time: {item.cook_time}
                </p>
              ))}
            </ul>
          </div>
            <div className="navbar-header">
              <button type="button" onClick={this.handleClick} className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <h1>Check recipes!</h1>
              </button>
            </div>
          </div>
        </nav>
        );
    }
}

export default Header;
