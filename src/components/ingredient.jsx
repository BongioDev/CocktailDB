import React, { Component } from "react";
import Main from './main.jsx';

class Ingredient extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          cocktailIngredient: "",
          cocktailData: [],
          detail: false,
          saved: [],
        };
      }
    
      handleCocktailIngredient = (event) => {
        this.setState({
          cocktailIngredient: event.target.value,
          detail: false,
        });
      };
    
      handleAPI = () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + this.state.cocktailIngredient)
          .then((res) => res.json())
          .then((json) => {
            this.setState({
                cocktailData: json.drinks,
                detail: false,
              });
          })
          .catch((err) => {
            // Do something for an error here
          });
      };

      showCocktail = (id) => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
              cocktailData: json.drinks,
              detail: true,
            });
        })
        .catch((err) => {
          // Do something for an error here
        });
      }

      // saveCocktail = (item) => {
      //   this.state.saved.push(item);
      //   localStorage.setItem('saved', JSON.stringify(this.state.saved));
      // }

      render() {
        
        console.log(this.state.cocktailData);
        var { cocktailData, detail } = this.state;
    
        return (
          <React.Fragment>
            <Main />
            <div>
            <h4>By ingredient:</h4>
              <br />
              <form>
                <div className="form-group">
                  {/* input */}
                  <input
                    type="text"
                    value={this.state.cocktailIngredient}
                    onChange={this.handleCocktailIngredient}
                    onKeyUp={this.handleAPI}
                    className="form-control"
                    placeholder="Enter an ingredient"
                  />
                  <br/>
                </div>
              </form>
            </div>
          {/* data array in view plaatsen */}
          <div className="row justify-content-center">
               {/* check als data null is anders error */}
               {cocktailData == null ? "No cocktail found." : 
                 cocktailData.map(item => (
                  <div className="col-md-4">
                   <div className="card" style={{width: '18rem'}, {margin: '0 auto'}}>
                     <img className="card-img-top" src={item.strDrinkThumb} alt="Card image cap"/>
                     <div className="card-body">
                       <h3 className="card-title">{item.strDrink}</h3>
                     <p className="card-text">
                      {detail == false ? "" :  <p style={{margin: '0'}}>Type: <b>{item.strAlcoholic}</b></p>}
                      <br/>
                      <br/>
                      {detail == false ? "" :  "Ingredients:"}
                      <br/>
                      <ul>
                      {item.strIngredient1 == null && item.strMeasure1 == null ? "" : <li><b>{item.strIngredient1} - {item.strMeasure1}</b></li>}
                      {item.strIngredient2 == null && item.strMeasure2 == null ? "" : <li><b>{item.strIngredient2} - {item.strMeasure2}</b></li>}
                      {item.strIngredient3 == null && item.strMeasure3 == null ? "" : <li><b>{item.strIngredient3} - {item.strMeasure3}</b></li>}
                      {item.strIngredient4 == null && item.strMeasure4 == null ? "" : <li><b>{item.strIngredient4} - {item.strMeasure4}</b></li>}
                      {item.strIngredient5 == null && item.strMeasure5 == null ? "" : <li><b>{item.strIngredient5} - {item.strMeasure5}</b></li>}
                      {item.strIngredient6 == null && item.strMeasure6 == null ? "" : <li><b>{item.strIngredient6} - {item.strMeasure6}</b></li>}
                      {item.strIngredient7 == null && item.strMeasure7 == null ? "" : <li><b>{item.strIngredient7} - {item.strMeasure7}</b></li>}
                      {item.strIngredient8 == null && item.strMeasure8 == null ? "" : <li><b>{item.strIngredient8} - {item.strMeasure8}</b></li>}
                      {item.strIngredient9 == null && item.strMeasure9 == null ? "" : <li><b>{item.strIngredient9} - {item.strMeasure9}</b></li>}
                      {item.strIngredient10 == null && item.strMeasure10 == null? "" : <li><b>{item.strIngredient10} - {item.strMeasure10}</b></li>}
                      {item.strIngredient11 == null && item.strMeasure11 == null? "" : <li><b>{item.strIngredient11} - {item.strMeasure11}</b></li>}
                      {item.strIngredient12 == null && item.strMeasure12 == null? "" : <li><b>{item.strIngredient12} - {item.strMeasure12}</b></li>}
                      {item.strIngredient13 == null && item.strMeasure13 == null? "" : <li><b>{item.strIngredient13} - {item.strMeasure13}</b></li>}
                      {item.strIngredient14 == null && item.strMeasure14 == null? "" : <li><b>{item.strIngredient14} - {item.strMeasure14}</b></li>}
                      {item.strIngredient15 == null && item.strMeasure15 == null? "" : <li><b>{item.strIngredient15} - {item.strMeasure15}</b></li>}
                      </ul>
                      {detail == false ? "" :  "Instructions:"}
                      <br/>
                      <b>{item.strInstructions}</b>
                      {detail == true ? "" : <a onClick={() => this.showCocktail(item.idDrink)} className="btn btn-outline-primary">See more details</a>}
                      {/* {detail == false ? "" : <a onClick={() => this.saveCocktail(item)} className="btn btn-outline-danger">Save</a>} */}
                     </p>
                     </div>
                   </div>
                   <br/>
                   </div>
                 ))
                 }
            </div>
            
          </React.Fragment>
    
        );
      }
}
 
export default Ingredient;