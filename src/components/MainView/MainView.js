import React from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

class MainView extends React.Component {
  componentDidMount() {
    // console.log("MainView Props: ", this.props);
    const { params, path } = this.props.match;
    const { action } = this.props.history;
    const { onGetData, onSearchData } = this.props;

    switch (action) {
      case "POP":
        console.log("action POP - navegación por URL");
        if (path === "/") return onGetData(0);
        if (params.hasOwnProperty("id")) return onGetData(params.id);
        if (params.hasOwnProperty("string")) return onSearchData(params.string);
        break;
      case "PUSH":
        return console.log("action PUSH - navegación por links");
      default:
        console.log("default");
        break;
    }
  }

  render() {
    const { error, data } = this.props;

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
  }
}

export default MainView;
