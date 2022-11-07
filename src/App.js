import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import EventDetail from './pages/EventDetail/EventDetail';
import HomePageTwo from './pages/HomepageTwo/HomePageTwo';
// import { Homepage } from './pages/Homepage/Homepage';
import LoginPage from './pages/LoginPage/LoginPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePageTwo} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/event-detail" component={EventDetail} />
        <Route exact path="/payment-page" component={PaymentPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
