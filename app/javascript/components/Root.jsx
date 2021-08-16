import React from 'react';
import axios from "axios";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new_item: '',
      existing_items: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({new_item: event.target.value});
  }

  handleClick(event){
    event.preventDefault();
    console.log('clicked!', this.state.new_item);
    axios.post('http://localhost:3000/ingredient', {item: this.state.new_item})
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <label>
            Add items in my fridge:
            <input type="text" value={this.state.new_item} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Root;
