import React, { Component } from 'react'
import '../style/homePage.css'
import { Link } from "react-router-dom";

export default class Wallpaper extends Component {
constructor(){
    super();
    this.state={
        location:[],
        restaurants:[]
    }
}
  
componentDidMount(){
    fetch('http://localhost:9091/locations',{method:'GET'})
    .then(result => result.json())
    .then(data =>this.setState({location:data.DATA}))
}

fetchRestaurants = (events) => {
    fetch(`http://localhost:9091/restaurants/city/${events.target.value}`,{method:'GET'})
    .then(result=>result.json())
    .then(data=>this.setState({restaurants:data.DATA}))
}

render() {
    let locationList =this.state.location.length && this.state.location.map((item) => 
        <option key={item.name} value={item.city_id}>{item.name}</option>)
    let restaurantsList=this.state.restaurants.length && <ul>{this.state.restaurants.map(item=>
                        <li key={item.name}>
                            <Link to={`/details/${item.name}`}>{item.name}</Link>
                        </li>)}</ul>
    return (
    <div className="container pic">
        <div className="d-inline p-4 me-5 float-end login-div">
            <a href="#" className="text-white text-decoration-none" style={{opacity:"0.6"}}>login</a>
            <a href="#" className="text-white text-decoration-none border p-2 ms-3 rounded" style={{opacity:"0.6"}}>create an account</a>
        </div>
        <div className="d-inline-flex justify-content-around align-items-center flex-column pic-flex">
            <div className="border rounded-circle bg-white logo">e!</div>
            <div style={{color:"white",fontSize:"2rem" }} className="pic-title ">Find the best restaurants, cafés, and bars</div>
            <div className="box-div">
                <select className="border p-3 location-box" onChange={(any_variable)=>this.fetchRestaurants(any_variable)}>
                    <option defaultValue='selected' >Please type a location</option>
                    {locationList}
                </select>
                <button className="search-box-button" style={{backgroundColor:"white"}}>
                    <i className="bi bi-search bg-white search-box-icon" style={{display:"inline",float:"left" }}></i>
                    <input type="text" placeholder="Search for restaurants" className="border p-3 search-box"/>
                    {restaurantsList}
                </button>
            </div>
        </div>
    </div>
    )
  }
}
