import React, { Component } from "react";

class About extends Component {
  state = {
  };
 
  render() {
    return (
      <React.Fragment>
       <br/>
        <div className="row">
          <div className="col-md-12">
            <h1>About Cocktail DB</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <h5 style={{marginTop:"50px"}}>Technologies used</h5>
                <div className="about">
                  <p style={{margin:"10px"}}>
                    Cocktail DB is an single page application made with React and Bootstrap. 
                    The cocktail data comes from an open API called <a target="_blank" href="https://www.thecocktaildb.com/">The Cocktail DB</a>.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
                <h5 style={{marginTop:"50px"}}>About me</h5>
                <div className="about">
                  <p style={{margin:"10px"}}>
                    My name is Aleko Bongiovanni, male and 28 years old. I currenlty live in Belgium, Houthalen-Helchteren.
                    At the moment i am looking for a job in web development. Please visit my portfolio website to
                    see more projects and to get in contact with me.
                     <br/>
                     <a target="_blank" href="https://www.bongiodev.be">www.bongiodev.be</a>
                     <br/>
                     <a target="_blank" href="https://www.linkedin.com/in/aleko-bongiovanni-983645196/">LinkedIn</a>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
