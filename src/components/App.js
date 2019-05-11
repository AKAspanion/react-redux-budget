import React from 'react';
import { connect } from 'react-redux';

import BudgetBanner from './Banner/BudgetBanner';
import Content from './Content/Content';
import Menu from "./Menu/Menu";
import Error from './Content/Error';


import {
  updateIncome,
  updateExpense,
  updateError
} from '../actions';

import './style.css';

class App extends React.Component {

  componentDidMount = () =>{
    this.props.updateIncome(0);
    this.props.updateExpense(0);
    this.props.updateError('');
  }


  render() {
      return (
          <div className="app">     
            <BudgetBanner />
            <Menu />       
            <Error/>
            <Content />
          </div>
      );
  }
} 

export default connect(null, {
  updateIncome,
  updateExpense,
  updateError
})(App);
