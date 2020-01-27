import React from "react";
import WeatherList from "./WeatherList";

class SearchForm extends React.Component {
  state = { city: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.city);
  };

  render() {
    return (
      <div className="weather-list-parent">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui input">
            <input
              type="text"
              placeholder="Enter City"
              value={this.state.city}
              onChange={event => this.setState({ city: event.target.value })}
            />
          </div>
          <button className="ui center floated secondary button m-2">
            Search
          </button>
        </form>

        <div className="ui compact segments weather-list">
          <WeatherList
            cityList={this.props.cityList}
            onItemSelect={this.props.onItemSelect}
          />
        </div>
      </div>
    );
  }
}

export default SearchForm;
