import { connect } from "react-redux";
import { searchNewsData } from "../actions/index";
import SearchInput from "../components/SearchInput/SearchInput";

const mapStateToProps = (state) => {
  return {
    textSearch: state.userSearch
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSearchData: (str) => dispatch(searchNewsData(str))
});

const SearchPropsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);

export default SearchPropsContainer;
