import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  //ES5 way of handeling text input. (no fat arrow) ^ onChange={this.onInputChange}
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

}

export default SearchBar;
