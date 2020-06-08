import React, { Component } from "react";
class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();

    //TODO dont forget call back from Parent component props
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label> Video Search</label>
            <input type='text' onChange={this.onInputChange} value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
