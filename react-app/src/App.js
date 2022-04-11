import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import { OrderForm } from "./orders/views/OrderForm";
import { ContactForm } from "./orders/views/ContactForm";
import { SelectProduct } from "./orders/views/SelectProduct";
import { SelectProductDetails } from "./orders/views/SelectProductDetails";
import { UserHome } from "./orders/views/UserHome";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/new-order' exact={true}>
          <OrderForm />
        </Route>
        <ProtectedRoute path='/users' exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/new-client' exact={true}>
          <ContactForm />
        </ProtectedRoute>
        <ProtectedRoute path='/select-product' exact={true}>
          <SelectProduct />
        </ProtectedRoute>
        <ProtectedRoute path='/product-order/:productId' exact={true}>
          <SelectProductDetails />
        </ProtectedRoute>
        <Route exact path="/profile/user">
						<UserHome />
				</Route>
        <Route exact path="/profile/user/:id">
							<UserHome />
				</Route>
				<Route exact path="/profile/user/:id/:profileoption">
							<UserHome />
				</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
