import React from "react";
import ReactDOM from "react-dom/client";

//react elemnt   returnning a object
const Title=() => (
    <img 
    className="logo"
    alt="logo"
    src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"></img>
    // <h1 
    //     id="title"
    //     key="h2"> Food Villa
    //     </h1>
);


//functional components name start with capital letter
// normal function jst return some piece of jsx, js 
//react component : function
const Header = () =>{ 
    return (
    <div className= "header">

        <Title/>

            <div className= "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>cart</li>
                </ul>
             </div>
    </div>
    );
}


const RestaurantCard=()=>
{
    return (
        <div className="card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yyrjmyajqhyjq6mp1gha"></img>
            <h2>Punjabi Dhaba</h2> 
            <h3>Prathas, Sabji</h3> 
            <h4>3.4 stars</h4> 
           
        </div>
    );
};
const Body=()=>
{
    return (<div><RestaurantCard/></div>)
}

const Footer=()=>
{
    return (<h4>Footer</h4>)
};


const AppLayout=()=>{
  return (
    <React.Fragment>
    <Header/>
    <Body/>
    <Footer/> 
    </React.Fragment>

  );

}



const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering a  fucntional component
root.render(<AppLayout />); // rendering a  fucntional component
