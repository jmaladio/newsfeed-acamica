import { connect } from "react-redux";
import { searchNewsData } from "../actions/index";
import Search from "components/pages/Search";

const mapStateToProps = (state) => {
  return {
    loading: state.loadingInProgress,
    error: state.loadingError,
    news: state.newsData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSearchData: (str) => dispatch(searchNewsData(str)),
});

export const SearchReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
