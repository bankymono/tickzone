import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import CreateTicket from './pages/CreateTicket/CreateTicket';
import EventDetail from './pages/EventDetail/EventDetail';
import EventsDashboard from './pages/EventsDashboard/EventsDashboard';
import HomePageTwo from './pages/HomepageTwo/HomePageTwo';
// import { Homepage } from './pages/Homepage/Homepage';
import LoginPage from './pages/LoginPage/LoginPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import PublishPage from './pages/PublishPage/PublishPage';
import SignupPage from './pages/SignupPage/SignupPage';
import TicketList from './pages/TicketList/TicketList';
import TicketPage from './pages/TicketPage/TicketPage';
import UploadImage from './pages/UploadImage/UploadImage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePageTwo} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/event-detail/:id?" component={EventDetail} />
        <Route exact path="/payment-page/:id?" component={PaymentPage} />
        <Route exact path="/events-dashboard" component={EventsDashboard} />
        <Route exact path="/create-event/:id?" component={CreateEvent} />
        <Route exact path="/event-ticket" component={TicketList} />
        <Route exact path="/upload-image" component={UploadImage} />
        <Route exact path="/publish" component={PublishPage} />
        <Route exact path="/create-ticket/:id?" component={CreateTicket} />
        <Route exact path="/bought-ticket" component={TicketPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
