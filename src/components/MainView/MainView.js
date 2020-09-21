import React from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
export class MainViewContainer extends React.Component {
  componentDidMount() {
    console.log("mount", this.props);

    this.handleURLNav();
  }

  handleURLNav = () => {
    const PATH_HOME = "/";
    const PATH_CATEGORY = "/categoria/:id";
    const PATH_SEARCH = "/search/:text";
    if (this.props.match.path === PATH_HOME) {
      if (!this.props.location.state || !this.props.location.state.category) {
        console.log("empty");
        this.props.onGetData(0);
      }
    }
    if (this.props.match.path === PATH_CATEGORY) {
      if (!this.props.location.state || this.props.userSearch) {
        console.log("empty");
        this.props.onGetData(this.props.match.params.id);
      }
    }
    if (this.props.match.path === PATH_SEARCH) {
      console.log("text");
      const state = {
        search: this.props.match.params.text
      };
      this.props.location.state = { ...state };
      this.props.onSearchData(this.props.match.params.text);
    }
  };

  componentDidUpdate(prevProps) {
    console.log("update", this.props);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.onGetData(this.props.match.params.id);
    }
    if (prevProps.match.params.text !== this.props.match.params.text) {
      this.props.onSearchData(this.props.match.params.text);
    }
  }
  render() {
    const { data, error } = this.props;
    return (
      <MainView data={data} error={error} key={Math.random() * 1000000000} />
    );
  }
}

const MainView = (props) => {
  const { data, error } = props;

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
