import { connect } from "react-redux";
import { getNewsData } from "../actions/index";
import MainView from "../components/MainView/MainView";

const mapStateToProps = (state) => {
  console.log(state, "mapStatetoProps");
  return {
    fetched: !state.loadingInProgress,
    error: state.loadingError,
    data: state.newsData
  };
};

const mapDispatchToProps = {
  getNewsData
};

const MainNavigation = connect(mapStateToProps, mapDispatchToProps)(MainView);

export default MainNavigation;
