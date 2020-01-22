import React from "react";

class SearchForm extends React.Component {
  state = { city: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.city);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui input">
            <input
              type="text"
              placeholder="Enter City"
              value={this.state.city}
              onChange={event => this.setState({ city: event.target.value })}
            />
          </div>
          <button className="ui center floated primary button m-2">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
