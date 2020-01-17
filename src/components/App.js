import React from 'react';
import SearchForm from './SearchForm';

class App extends React.Component {
    state = {  }

    onFormSubmit = async (city, countryCode) => {
        const response = await ("/data/2.5/weather?q=", {
            params: {
                q: city + "," + countryCode
            }
        })
    };

    render() { 
        return ( 
        <div className="ui center aligned container">
            <SearchForm onFormSubmit={this.onFormSubmit}></SearchForm>
        </div> );
    }
}
 
export default App;

