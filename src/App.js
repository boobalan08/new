import React from 'react';
import "./App.css";

export default function App() {

  var cards = [
    {
      heading: "FREE",
      Rupees: `$ ${0}`,
      valid:"/month",
      users: "✔ Single user",
      storage: "✔ 5GB Storage",
      projects: "✔ Unlimited Public Projects",
      Access: "✔ Community Access",
      private_project_limit: "✘ Unlimited Private Project",
      phone_support: "✘ Dedicated Phone Support",
      subdomain: "✘ Free Subdomain",
      report: "✘ Monthly Status Report",
      swi : "<button> </button>"
    },
    {
      heading: "PLUS",
      Rupees: `$ ${9}`,
      valid:"/month",
      users: "✔ Single user",
      storage: "✔ 5GB Storage",
      projects: "✔ Unlimited Public Projects",
      Access: "✔ Community Access",
      private_project_limit: "✔ Unlimited Private Project",
      phone_support: "✔ Dedicated Phone Support",
      subdomain: "✔ Free Subdomain",
      report: "✘ Monthly Status Report",
      swi : "<button> </button>"
    },
    {
      heading: "PRO",
      Rupees: `$ ${49}`,
      valid:"/month",
      users: "✔ Single user",
      storage: "✔ 5GB Storage",
      projects: "✔ Unlimited Public Projects",
      Access: "✔ Community Access",
      private_project_limit: "✔ Unlimited Private Project",
      phone_support: "✔ Dedicated Phone Support",
      subdomain: "✔ Unlimited Free Subdomain",
      report: "✔ Monthly Status Report",
    }
  ]
  return (

   
 <section className='pricing py-2'>
  <h1 className='text-center mb-4'> Choose Your Plan </h1>
    <div className='container mb-5'>
    <div className="row mb-5">
      {cards.map((key) => {
        return <Pricecard
       
          head={key.heading}
          Rupee={key.Rupees}
          valid={key.valid}
          user={key.users}
          stor={key.storage}
          proj={key.projects}
          Acces={key.Access}
          project_limit={key.private_project_limit}
          support={key.phone_support}
          domain={key.subdomain}
          rep={key.report}
          
        />
       
      })}
      
    </div>
    </div>
    
    </section>


  )
}

function Pricecard(props) {
  return (
   
    <div className="col-md-6 col-lg-4">
    <div className="card mb-5 mb-lg-0">
    <div className="card-body">
    <h5 className="card-title text-muted text-uppercase text-center">
    {props.head} 
          </h5>
          <h6 className="card-price text-center">
          {props.Rupee}<span className=".period">{props.valid}</span> 
          </h6>
          <hr />
    
      <h4 className='down-box'> {props.user} </h4>
      <h4 className='down-box'> {props.stor} </h4>
       <h4 className='down-box'> {props.proj} </h4>
       <h4 className='down-box'> {props.Acces} </h4>
      <h4 className='down-box'> {props.project_limit} </h4>
      <h4 className='down-box'> {props.support} </h4>
      <h4 className='down-box'> {props.domain} </h4>
       <h4 className='down-box'> {props.rep} </h4>
       <div className="d-grid">
            <button className="btn btn-primary text-uppercase">
              Subscribe
            </button>
          </div>
    </div>
    </div>
    </div>
  
  )
}
