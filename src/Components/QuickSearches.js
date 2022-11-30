import React, { Component } from 'react'
import Mealtype from './Mealtype';
import '../style/homePage.css'

export default class QuickSearches extends Component {
    constructor(){
        super();
        this.state={
            mealtype:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:9091/mealtypes',{method:'GET'})
        .then(result => result.json())
        .then(data => this.setState({mealtype:data.DATA}))
    }

  render() {
    let mealtypeList = this.state.mealtype.length && this.state.mealtype.map((item) => <Mealtype prop={item} key={item.name}></Mealtype>)
    return (
      <div>
        <p className="items-heading" style={{fontWeight: "bold"}}>Quick searches</p>
        <span className="items-heading" style={{color: "#8C96AB", fontSize:"18px"}}>Discover restaurants by type of meal</span>
        <br/><br/>
        <div className="container row-div">
            <div className="row row-items" >
                {mealtypeList}
            </div>
        </div>
      </div>
    )
  }
}
