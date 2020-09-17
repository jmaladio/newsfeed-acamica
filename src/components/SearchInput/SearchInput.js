import React from "react";
import { Link } from "react-router-dom";

class SearchInput extends React.Component {
  state = {
    input: ""
  };

  handleInputChange = (e) => {
    e.persist();
    this.setState({ input: e.target.value });
  };

  render() {
    const { onSearchData } = this.props;

    return (
      <div>
        <Link to={`/search/${this.state.input}`}>
          <span onClick={() => onSearchData(this.state.input)}>Search</span>
        </Link>
        <input
          type="text"
          className="search-input"
          value={this.state.input}
          onChange={(e) => this.handleInputChange(e)}
        />
      </div>
    );
  }
}

export default SearchInput;
