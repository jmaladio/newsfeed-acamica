import { connect } from "react-redux";
import { getNewsData, searchNewsData } from "../actions/index";
import MainViewLogicContainer from "../components/MainView/MainView";

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

const MainPropsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainViewLogicContainer);

export default MainPropsContainer;
