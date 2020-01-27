import React from "react";
import SearchForm from "./SearchForm";
import WeatherItemClicked from "./WeatherItemClicked";
import axios from "axios";

class App extends React.Component {
  state = {
    cityList: [],
    selectedCity: null
  };

  onFormSubmit = city => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&appid=34aaa0e555c329549590da7f88d639b3`
      )
      .then(response => {
        this.setState({
          cityList: response.data.list
        });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  onItemSelect = city => {
    this.setState({ selectedCity: city });
    this.setState({ cityList: []});
  };

  render() {
    return (
      <div className="ui center aligned container">
        <SearchForm onFormSubmit={this.onFormSubmit} 
        cityList={this.state.cityList}
        onItemSelect={this.onItemSelect}/>
        
        <div className="ten wide column">
          <WeatherItemClicked selectedCity={this.state.selectedCity} />
        </div>
      </div>
    );
  }
}

export default App;
