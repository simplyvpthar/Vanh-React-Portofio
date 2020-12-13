import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "../img/budget.png";
import Fitness from "../img/fitness.png";
import Notetaker from "../img/notetaker.png";
import Brews from "../img/Brews.png";
import Weather from "../img/weather.png";
import Workday from "../img/workday.png";

const portfolio = () => {
  return (
    <div className="portfolioApp">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Portfolio</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-1"></div>

              <div className="col-md-3">
                <a href="https://github.com/simplyvpthar/Work-Day-Scheduler.git">
                  <img
                    src={Workday}
                    className="card-img-top"
                    alt="img-one"
                  />
                </a>
                <h5 className="card-text">Work Day Scheduler</h5>
                <p id="repo">
                  <a href="https://github.com/simplyvpthar/Work-Day-Scheduler.git">
                    Link to Github Repo
                  </a>
                  <br></br>
                  <a href=" https://simplyvpthar.github.io/Work-Day-Scheduler/">
                  Link to Deployed Site
                  </a>
                </p>
              </div>
              <div className="col-md-3">
                <a href="https://github.com/simplyvpthar/Work-Day-Scheduler.git">
                  <img
                    src={Weather}
                    className="card-img-top"
                    alt="img-two"
                  />
                </a>
                <h5 className="card-text">Weather</h5>
                <p id="repo">
                  <a href="https://github.com/simplyvpthar/Weather-Dashboard.git">
                    Link to Github Repo
                  </a>
                  <br></br>
                  <a href=" https://simplyvpthar.github.io/Weather-Dashboard/">
                  Link to Deployed Site
                  </a>
                </p>
              </div>
              <div className="col-md-3">
                <a href="https://github.com/simplyvpthar/Progressive-Budget.git">
                  <img
                    src={Budget}
                    className="card-img-top"
                    alt="img-three"
                  />
                </a>
                <h5 className="card-text">Budget</h5>
                <p id="repo">
                  <a href="https://github.com/simplyvpthar/Progressive-Budget.git">
                    Link to Github Repo
                  </a>
                  <br></br>
                  <a href="https://vt-note-taker.herokuapp.com/">
                  Link to Deployed Site
                  </a>
                </p>
              </div>
              <div className="col-md-3">
                <a href="https://github.com/simplyvpthar/Fitness-Tracker.git">
                  <img
                    src={Fitness}
                    className="card-img-top"
                    alt="img-four"
                  />
                </a>
                <h5 className="card-text">Fitness</h5>
                <p id="repo">
                  <a href="https://github.com/simplyvpthar/Fitness-Tracker.git">
                    Link to Github Repo
                  </a>
                  <br></br>
                  <a href="https://vt-workout-tracker.herokuapp.com/">
                  Link to Deployed Site
                  </a>
                </p>
              </div>
              <div className="col-md-3">
                <a href="https://github.com/simplyvpthar/Note-Taker.git">
                  <img
                    src={Notetaker}
                    className="card-img-top"
                    alt="img-five"
                  />
                </a>
                <h5 className="card-text">Notetaker</h5>
                <p id="repo">
                  <a href="https://github.com/simplyvpthar/Note-Taker.git">
                    Link to Github Repo
                  </a>
                  <br></br>
                  <a href="https://vt-note-taker.herokuapp.com/">
                  Link to Deployed Site
                  </a>
                </p>
              </div>
              <div className="col-md-3">
                <a href="https://github.com/vsteere/Project_1-Brews_and_Chews.git">
                  <img
                    src={Brews}
                    className="card-img-top"
                    alt="img-six"
                  />
                </a>
                <h5 className="card-text">Team Project Brews and Chews</h5>
                <p id="repo">
                  <a href="https://github.com/vsteere/Project_1-Brews_and_Chews.git">
                    Link to Github Repo
                  </a>
                  <br></br>
                  <a href="https://vsteere.github.io/Project_1-Brews_and_Chews/index.html">
                  Link to Deployed Site
                  </a>
                </p>
              </div>
            </div>
            <br></br>
            <div className="gitProfile">
              <p>
                GitHub Profile:{" "}
                <a href="https://github.com/simplyvpthar">
                  https://github.com/simplyvpthar
                </a>{" "}
              </p>
              <p>
                Linkedin Profile:{" "}
                <a href="https://www.linkedin.com/in/vanh-tharavong-643a5397/">
                  https://www.linkedin.com/in/vanh-tharavong-643a5397/
                </a>
              </p>
              <p>
                Resume:{" "}
                <a href="https://drive.google.com/file/d/1xT3M5fLDOS7jhKiZeg35FGTvatcgcgD_/view?usp=sharing">
                  Link to my resume
                </a>
              </p>
              <p>Email Address: simplyvpthar@gmail.com</p>
              <p>Phone Number: 817.948.5381</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default portfolio;
