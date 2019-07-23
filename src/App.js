import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  //This is to store the login (Current user Data) so that we can manage to logout. So the application is listening to the
  // authentication
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        //If there is a userAuth if create the user in the db or get the info back only from db
        const userRef = await createUserProfileDocument(userAuth);

        //Then we get a snapshop and we will get the info and pass to the STATE of our app
        userRef.onSnapshot(snapShop => {
          setCurrentUser({
            id: snapShop.id,
            ...snapShop.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  //This is basically to Logout the user as soon the component will Unmount.
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
