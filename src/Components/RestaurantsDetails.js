import React,{useEffect,useState} from 'react';
import '../style/RestaurantsDetails.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';

export default function RestaurantsDetails() {

  let {RestaurantsName} = useParams();

  const [restaurant, setrestaurant] = useState({});
  
  let {name,cost,thumb,address,Cuisine,contact_number} = restaurant;


  useEffect(() => {
    fetch(`http://localhost:9091/restaurants/${RestaurantsName}`,{method:'GET'})
    .then(result=>result.json())
    .then(data=>setrestaurant(data.DATA[0]))
  }, [])

  let CuisineList = !(Cuisine==undefined) && Cuisine.length && <ul>{Cuisine.map((item)=>
    <li key={item.name}>{item.name}</li>)}</ul>

    return (
    <div style={{height:"1200px"}}>
        <div className="head">
            <div className="logo">e!</div>
            <div className="login">
                <a className="login_anchor" > login </a>
                <button> create an account </button>
            </div>
        </div>
        <div className='text-center' style={{display:"inline"}}>
            <img className='img-pic border border-primary ' src={thumb}/>
        </div>
        <div>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Contact</Tab>
                </TabList>
                <TabPanel>
                    <div>About the place</div>
                    <div>Cuisine</div>
                    {CuisineList}
                    <div>Average Cost :</div>
                    <div>&#8377;{cost}</div>
                </TabPanel>
                <TabPanel>
                <div>Address :</div>
                <div>{address}</div>
                <div>Phone no. :</div>
                <div>{contact_number}</div>
                </TabPanel>
            </Tabs>
        </div>
    </div>
        
  )
}
