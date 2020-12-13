import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function body(props) {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
         </h3>
            </div>
            <div className="card-body">
                        <blockquote className="blockquote mb-0">
          <div className="row">
         <div className="col-md-3">
       <img id="pic" src="https://avatars1.githubusercontent.com/u/67251570?s=460&u=caa7d4f2dfc179a7d3945130673db57a95b942c8&v=4" alt="profile pic" width="100%" height="auto%" />
      </div>

    <div className="col-md-8">

     <p>hi</p>
    
    <p>more info</p>
        
    <p>more stuff</p>
<p>more stff.</p>
 </div>
  </div>
   </blockquote>
   </div>
 </div>
            </div>

        </div>
            )
        }
export default body

