import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user: { profileList } } = state;
  return {
    profileList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUserProfile: () => {
        dispatch(userActions.getUserProfile());
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Container);