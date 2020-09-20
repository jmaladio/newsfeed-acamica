import React from "react";
import { Link } from "react-router-dom";

export class ComponenteContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const PATH_HOME = "/";
    const PATH_CATEGORY = "/categoria/:id";
    const PATH_SEARCH = "/search/:text";

    if (this.props.match.path === PATH_HOME && !this.props.location.state) {
      console.log("empty");
      this.props.onGetData(0);
    }
    if (this.props.match.path === PATH_CATEGORY && !this.props.location.state) {
      console.log("empty");
      this.props.onGetData(this.props.match.params.id);
    }
    if (this.props.match.path === PATH_SEARCH && !this.props.location.state) {
      console.log("text");
      const state = {
        search: this.props.match.params.text
      };
      this.props.location.state = { ...state };
      this.props.onSearchData(this.props.match.params.text);
    }
  }

  componentDidUpdate() {
    console.log("update", this.props);
  }
  render() {
    if (!this.props.data.length) return <h1>Loading...</h1>;
    else return <h1>Listo</h1>;
  }
}

// export class ComponenteContainer extends React.Component {
//   state = {
//     showComponent: "loading"
//   };

//   componentDidMount() {
//     const PATH_HOME = "/";
//     const PATH_CATEGORY = "/categoria/:id";
//     const PATH_SEARCH = "/search/:text";
//     const { data, error, fetched, onGetData, onSearchData } = this.props;
//     const { path } = this.props.match;

//     this.setState({ showComponent: "loading" });

//     if (path === PATH_HOME) {
//       this.setState({ showComponent: "home" });
//     } else if (path === PATH_CATEGORY) {
//       this.setState({ showComponent: "category" });
//     }
//   }

//   // componentDidUpdate() {
//   //   const PATH_HOME = "/";
//   //   const PATH_CATEGORY = "/categoria/:id";
//   //   const PATH_SEARCH = "/search/:text";
//   //   const { path } = this.props.match;

//   //   console.log("update", this.state);

//   //  if (path === PATH_HOME && this.state.loading) {
//   //     this.setState({ loading: false, showComponent: "home" });
//   //   }
//   // }

//   // if (path === PATH_HOME) {
//   //   if (!data.length) {
//   //     return <h1>Loading...</h1>;
//   //   }
//   //   return <ComponenteHome {...props} />;
//   // } else if (path === PATH_CATEGORY) {
//   //   const { id } = props.match.params;
//   //   console.log(props);
//   // }

//   // if (props.match.params.text && !props.location.state) {
//   //   console.log("LOG: PARAMS { text:", props.match.params.text, "}");
//   //   const state = {
//   //     search: props.match.params.text
//   //   };
//   //   props.location.state = { ...state };
//   // }
//   // return <ComponenteError key={Math.random() * 10000000} {...props} />;

//   render() {
//     const { showComponent } = this.state;
//     if (!this.props.data.length) return <h1>Loading...</h1>;
//     else if (showComponent === "home") return <ComponenteHome />;
//     else if (showComponent === "category") return <ComponenteCategoria />;
//     else return <h1>Wait</h1>;
//   }
// }

export const ComponenteHome = (props) => {
  console.log(props);
  return <h1>Home</h1>;
};

export const ComponenteResultados = (props) => {
  console.log(props);

  const { state } = props.location;
  return (
    <>
      <h1>Resultados</h1>
      {state && <h2>'{state.search}'</h2>}
      <Link to="/" key={Math.random() * 10000000}>
        <span>Back to Home</span>
      </Link>
    </>
  );
};

export const ComponenteCategoria = (props) => {
  console.log(props);

  return (
    <>
      <h1>Categoría</h1>
    </>
  );
};

export const ComponenteError = () => {
  return <h1>Error</h1>;
};
