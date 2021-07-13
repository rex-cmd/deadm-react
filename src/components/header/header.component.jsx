import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { HeaderContainer, OptionsContainer, OptionLink } from "./header.styles";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
const Header = ({ currentUser }) => (
  <HeaderContainer>
    <OptionsContainer>
      {/* <OptionLink to="/">Dead Moroz</OptionLink>
      <OptionLink to="/giftspage">My Gifts</OptionLink>
      <OptionLink to="/userspage">Users</OptionLink>
      <OptionLink to="/invitationspage">Invitations</OptionLink> */}
      <OptionLink to="/">Dead Moroz</OptionLink>
      {currentUser ? (
        <OptionsContainer>
          <OptionLink to="/">Dead Moroz</OptionLink>
          <OptionLink to="/giftspage">My Gifts</OptionLink>
          <OptionLink to="/userspage">Users</OptionLink>
          <OptionLink to="/invitationspage">Invitations</OptionLink>
          <OptionLink as="div" onClick={signOutStart}>
            Sign Out
          </OptionLink>
        </OptionsContainer>
      ) : (
        <OptionsContainer>
          <OptionLink to="/signin">Sign In</OptionLink>
          <OptionLink to="/signup">Sign Up</OptionLink>
        </OptionsContainer>
      )}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
