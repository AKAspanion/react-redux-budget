import React from 'react';
import { connect } from 'react-redux';

import BudgetBanner from './Banner/BudgetBanner';
import Content from './Content/Content';
import Menu from "./Menu/Menu";

import {
  updateIncome,
  updateExpense
} from '../actions';

import './style.css';

class App extends React.Component {

  componentDidMount = () =>{
    this.props.updateIncome(0);
    this.props.updateExpense(0);
  }

  render() {
      return (
          <div className="app">
            <BudgetBanner />
            <Menu />
            <Content />
          </div>
      );
  }
} 

export default connect(null, {
  updateIncome,
  updateExpense
})(App);
