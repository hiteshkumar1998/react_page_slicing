import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import UserRegistration from './pages/UserRegistration/';
import EmailUserRegistration from './pages/EmailUserRegistration/';
import LoadScreenConsumer from './pages/LoadScreenConsumer/';
import LocationPermission from './pages/LocationPermission/';
import HomeGettingStarted from './pages/HomeGettingStarted/';
import AccountProfile from './pages/AccountProfile/';
import MarketplaceMerchantProfile from './pages/MarketplaceMerchantProfile/';
import MarketplaceHomeView from './pages/MarketplaceHomeView/';
import MarketplaceDetailPage from './pages/MarketplaceDetailPage/';
import AddressPage from './pages/AddAddress/';
import OrderConfirmation from './pages/OrderConfirmation/';
import CheckoutMarketplace from './pages/CheckoutMarketplace/';
import PaymentMethod from './pages/PaymentMethod/';
import SelectCard from './pages/SelectCard/';
import ManagePaymentMethod from './pages/ManagePaymentMethod/';
import EditPaymentMethod from './pages/EditPaymentMethod/';
import AccountInformation from './pages/AccountInformation/';
import NotificationPermission from './pages/NotificationPermission/';
import DeliveryOption from './pages/DeliveryOptions/';
import Wishlist from './pages/Wishlist/';
import ShoppingCartCheckout from './pages/ShoppingCartCheckout/';
import Notification from './pages/Notifications/';
import MyOrders from './pages/MyOrders/';
import Search from './pages/Search/';
import MerchantPopUp from './pages/MerchantPopUp/';

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/user_registration" component = {UserRegistration} />
          <Route exact path="/email_user_registration" component = {EmailUserRegistration} />
          <Route exact path="/load_screen_consumer" component = {LoadScreenConsumer} />
          <Route exact path="/location_permission" component = {LocationPermission} />
          <Route exact path="/home_getting_started" component = {HomeGettingStarted} />
          <Route exact path="/account_profile" component = {AccountProfile} />
          <Route exact path="/marketplace_merchant_profile" component = {MarketplaceMerchantProfile} />
          <Route exact path="/marketplace_home_view" component = {MarketplaceHomeView} />
          <Route exact path="/marketplace_detail_page" component = {MarketplaceDetailPage} />
          <Route exact path="/add_address" component = {AddressPage} />
          <Route exact path="/order_confirmation" component = {OrderConfirmation} />
          <Route exact path="/checkout_marketplace" component = {CheckoutMarketplace} />
          <Route exact path="/payment_method" component = {PaymentMethod} />
          <Route exact path="/select_card" component = {SelectCard} />
          <Route exact path="/manage_payment_method" component = {ManagePaymentMethod} />
          <Route exact path="/edit_payment_method" component = {EditPaymentMethod} />
          <Route exact path="/account_information" component = {AccountInformation} />
          <Route exact path="/notification_permission" component = {NotificationPermission} />
          <Route exact path="/delivery_options" component = {DeliveryOption} />
          <Route exact path="/wishlist" component = {Wishlist} />
          <Route exact path="/shopping_cart_checkout" component = {ShoppingCartCheckout} />
          <Route exact path="/notifications" component = {Notification} />
          <Route exact path="/my_orders" component = {MyOrders} />
          <Route exact path="/search" component = {Search} />
          <Route exact path="/merchant_popup" component = {MerchantPopUp} />
      </Router>
    );
  }
}

export default App;
