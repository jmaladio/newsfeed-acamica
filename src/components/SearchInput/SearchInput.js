import React from "react";
import { Redirect } from "react-router-dom";

// class SearchInput extends React.Component {
//   state = {
//     input: ""
//   };

//   handleInputChange = (e) => {
//     e.persist();
//     this.setState({ input: e.target.value });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.props.onSearchData(this.state.input);
//       this.setState({ input: "" });
//     }
//   };

//   render() {
//     const { onSearchData } = this.props;
//     const showRedirect = this.props.userSearch && (
//       <Redirect
//         to={`/search/${this.props.userSearch}`}
//         // push={true}
//         // key={Math.random() * 10000000}
//       />
//     );

//     return (
//       <div className="search-input-container">
//         <div className="search-icon">
//           <Link to={`/search/${this.state.input}`}>
//             <SearchIcon
//               style={{ fontSize: "4rem", color: "#fff" }}
//               onClick={() => onSearchData(this.state.input)}
//             />
//           </Link>
//         </div>
//         <div className="search-input">
//           <input
//             type="text"
//             className="input--js"
//             value={this.state.input}
//             onKeyPress={(e) => this.handleKeyPress(e)}
//             onChange={(e) => this.handleInputChange(e)}
//           />
//         </div>
//         {showRedirect}
//       </div>
//     );
//   }
// }

class SearchInput extends React.Component {
  state = {
    input: "",
    redirect: null
  };

  componentDidMount() {
    this.setState({ input: "", redirect: false });
  }

  componentDidUpdate() {
    if (this.state.redirect) {
      this.setState((prevState) => ({ ...prevState, redirect: false }));
    }
  }

  handleInputChange = (e) => {
    e.persist();
    this.setState((prevState) => ({ ...prevState, input: e.target.value }));
  };

  handleUserSearch = (e) => {
    e.persist();
    const { input } = this.state;
    const { onSearchData } = this.props;
    if (e.key === "Enter" || e.target.type === "button") {
      onSearchData(input);
      this.setState((prevState) => ({ ...prevState, redirect: true }));
    }
  };

  render() {
    const { input, redirect } = this.state;
    const redirectTo = {
      pathname: `/search/${input}`,
      state: { search: input }
    };

    return (
      <div className="search-input-container">
        <div className="search-button">
          <input
            type="button"
            value="Buscar"
            onClick={(e) => this.handleUserSearch(e)}
          />
          {/* <SearchIcon
              style={{ fontSize: "4rem", color: "#fff" }}
            /> */}
        </div>
        <div className="search-input">
          <input
            type="text"
            value={input}
            onChange={(e) => this.handleInputChange(e)}
            onKeyPress={(e) => this.handleUserSearch(e)}
          />
        </div>
        {redirect && (
          <Redirect to={redirectTo} push={true} key={Math.random() * 1000000} />
        )}
      </div>
    );
  }
}

export default SearchInput;
