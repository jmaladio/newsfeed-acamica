import { connect } from "react-redux";
import { getNewsData } from "../actions/index";
import NavBar from "../components/NavBar/NavBar";

const mapDispatchToProps = (dispatch) => ({
  onGetData: (id) => dispatch(getNewsData(id))
});

const NavPropsContainer = connect(null, mapDispatchToProps)(NavBar);
export default NavPropsContainer;
