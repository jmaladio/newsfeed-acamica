import { connect } from "react-redux";
import { getNewsData, searchNewsData } from "../actions/index";
import { MainViewContainer } from "../components/MainView/MainView";

const mapStateToProps = (state) => {
  return {
    fetched: !state.loadingInProgress,
    error: state.loadingError,
    data: state.newsData
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetData: (id) => dispatch(getNewsData(id)),
  onSearchData: (str) => dispatch(searchNewsData(str))
});

const MainNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainViewContainer);

export default MainNavigation;
