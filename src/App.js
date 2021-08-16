import logo from './logo.svg';
import './App.css';
import "./styles/styles.scss"
import "./styles/styles.css"
import OrderCard from './OrderCard';
import Error from './Error'
import NavBar from './NavBar';
import CorrectPayment from './CorrectPayment'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={NavBar} />
        <Route exact path="/order-summary" component={OrderCard} />
        <Route exact path="/correct-payment" component={CorrectPayment} />
        <Route component={Error}/>
      </Switch>
    </main>
    
  );
}

export default App;
