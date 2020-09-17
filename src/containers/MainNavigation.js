import { connect } from "react-redux";
import { getNewsData } from "../actions/index";
import MainView from "../components/MainView/MainView";

const mapStateToProps = (state) => {
  return {
    fetched: !state.loadingInProgress,
    error: state.loadingError,
    data: state.newsData
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetData: (id) => dispatch(getNewsData(id))
});

const MainNavigation = connect(mapStateToProps, mapDispatchToProps)(MainView);

export default MainNavigation;
