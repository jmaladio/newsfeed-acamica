import React from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

class MainView extends React.Component {
  componentDidMount() {
    if (!this.props.fetched) {
      const { id } = this.props.match.params;
      this.props.onGetData(id);
    }
  }

  render() {
    const { fetched, error, data } = this.props;

    const mapNews = () => {
      console.log("is fetched?", fetched);
      if (!data.length) {
        if (error) return <Error />;
        else return <Loading />;
      } else {
        return data.map((newsData) => <Card data={newsData} />);
      }
    };

    return <main className="main-view">{mapNews()}</main>;
  }
}

export default MainView;
