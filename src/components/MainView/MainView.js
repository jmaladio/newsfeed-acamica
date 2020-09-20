import React from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const historyAction = (props) => {
  const { params, url } = props.match;
  const { action } = props.history;
  const { onGetData, onSearchData } = props;

  switch (action) {
    case "POP":
      console.log("action POP - navegación por URL");
      if (url === "/") return onGetData(0);
      if (url.slice(0, 4) === "/cat") return onGetData(params.id);
      if (url.slice(0, 7) === "/search") return onSearchData(params.string);
      // if (params.hasOwnProperty("id")) return onGetData(params.id);
      // if (params.hasOwnProperty("string")) return onSearchData(params.string);
      break;
    case "PUSH":
      return console.log("action PUSH - navegación por links");
    default:
      console.log("default");
      break;
  }
};

class MainViewContainer extends React.Component {
  componentDidMount() {
    // console.log("MainViewContainer Props: ", this.props);
    historyAction(this.props);
  }

  render() {
    return <MainView {...this.props} />;
  }
}

const MainView = (props) => {
  // componentDidMount() {
  //   console.log("MainView Props: ", this.props);
  //   const { params, url } = this.props.match;
  //   const { action } = this.props.history;
  //   const { onGetData, onSearchData, userSearch } = this.props;

  //   switch (action) {
  //     case "POP":
  //       console.log("action POP - navegación por URL");
  //       if (url === "/") return onGetData(0);
  //       if (url === `/search/${userSearch}`) return onSearchData(userSearch);
  //       if (params.hasOwnProperty("id")) return onGetData(params.id);
  //       if (params.hasOwnProperty("string")) return onSearchData(params.string);
  //       break;
  //     case "PUSH":
  //       return console.log("action PUSH - navegación por links");
  //     default:
  //       console.log("default");
  //       break;
  //   }
  // }

  console.log("props", props);
  const { error, data } = props;

  const mapNews = () => {
    if (!data.length) {
      if (error) return <Error />;
      else return <Loading />;
    } else {
      return data.map((newsData, index) => (
        <Card data={newsData} key={index} />
      ));
    }
  };

  return <main className="main-view">{mapNews()}</main>;
};

export default MainViewContainer;
