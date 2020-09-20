import { connect } from "react-redux";
import { getNewsData, searchNewsData } from "../actions/index";
import { ComponenteContainer } from "../components/ComponenteContainer/ComponenteContainer";

const mapStateToProps = (state) => {
  return {
    fetched: !state.loadingInProgress,
    error: state.loadingError,
    data: state.newsData,
    userSearch: state.userSearch
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetData: (id) => dispatch(getNewsData(id)),
  onSearchData: (str) => dispatch(searchNewsData(str))
});

const MainNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponenteContainer);

export default MainNavigation;
