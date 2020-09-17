import React from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

class MainView extends React.Component {
  componentDidMount() {
    console.log(this.props);

    if (this.props.history.action === "POP" && this.props.userSearch === "") {
      const { id } = this.props.match.params;
      this.props.onGetData(id);
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
