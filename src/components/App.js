import React from 'react';
import uniqid from 'uniqid';

import BudgetBanner from './BudgetBanner';
import Content from './Content';
import Menu from "./Menu";

import './style.css';

class App extends React.Component {

  state = {
      budgetType: '+',
      totalBudget: 100,
      totalIncome: 50,
      totalExpense: 40,
      currDescription: '',
      currAmount: '',
      items: {
        incomeItems:[
          {
            id:'1',
            description: 'hey',
            amount: 10
          },
          {
            id: '2',
            description: 'hola',
            amount: 20
          },
        ],
        expenseItems:[
          {
            id: '3',
            description: 'ey',
            amount: 5
          },
          {
            id: '4',
            description: 'ola',
            amount: 25
          },
        ]
      }
  };

  // getTotalExpense = () =>{
  //   const {incomeItems} = this.state.items;
  //   let totalIncome = 0;
  //   for(let item in incomeItems){
  //     totalIncome += item.amount;
  //   }
  //   return totalIncome;
  // }
  // getTotalIncome = () =>{
  //   const {expenseItems} = this.state.items;
  //   let totalExpense = 0;
  //   for(let item in expenseItems){
  //     totalExpense += item.amount;
  //   }
  //   return totalExpense;
  // }

  // getTotalBudget = () =>{
  //   return this.getTotalExpense() + this.getTotalIncome();
  // }

  getBudgetType = (type) =>{
    this.setState({budgetType: type});
  }

  onDeleteClick = (id) =>{
    let income = this.state.items.incomeItems;
    let expense = this.state.items.expenseItems;
    
    this.setState({items: {
      incomeItems: this.deleteFromList(id, income),
      expenseItems: this.deleteFromList(id, expense)
    }})
  }

  onAddClick = () =>{
    this.addToList();
  }

  onChangeDescription = (event) =>{
    this.setState({currDescription: event.target.value})
  }

  onChangeAmount = (event) =>{
    this.setState({currAmount: event.target.value})

  }

  addToList = () =>{
    let income = this.state.items.incomeItems;
    let expense = this.state.items.expenseItems;
    if(this.state.budgetType === '+'){
      let newIncome = [{
                          id: '10',
                          description: this.state.currDescription,
                          amount: this.state.currAmount
                        }, ...income];
      this.setState({items: {
        incomeItems: newIncome,
        expenseItems: expense
      }})
    }else{
      let newExpense = [{
            id: '11',
            description: this.state.currDescription,
            amount: this.state.currAmount
          }, ...expense];
      this.setState({items: {
      incomeItems: income,
      expenseItems: newExpense
      }})
    }
  }

  deleteFromList = (id, items) =>{
    let newItems = [];
    for(let i=0; i<items.length; i++){
      if(items[i].id  !== id){
        newItems.push(items[i])
      }
    }
    return newItems;
  }

  render() {
      console.log(this.state);
      return (
          <div className="app">
            <BudgetBanner 
                budgetType={this.state.budgetType}
                totalBudget={this.state.totalBudget}
                totalIncome={this.state.totalIncome}
                totalExpense={this.state.totalExpense}
            />
            <Menu
                addClick={this.onAddClick}
                amount={this.state.currAmount}
                description={this.state.currDescription}
                budgetType={this.state.budgetType}
                getBudgetType={this.getBudgetType}
                changeDescription={this.onChangeDescription}
                changeAmount={this.onChangeAmount}
            />
            <Content 
                items={this.state.items}
                onDeleteClick={this.onDeleteClick}
            />
          </div>
      );
  }
} 

export default App;
