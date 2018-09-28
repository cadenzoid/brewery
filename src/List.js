import React, { Component }   from 'react';
import './App.css';

class List extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount() {
      // called the first time the component is loaded right before the component is added to the page
      this.updateSearch;
  }

  componentDidMount() {
      // Called after the component is loaded on the page
  }

  componentWillReceiveProps() {
      // Called when the props provided to the component are changed
  }

  componentWillUpdate() {
    // called when the state or props are changed
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  search(query = "fish") {
    var url = `https://api.scryfall.com/cards/search?q=${query}`;
    Request.get(url).then((response) => {
      this.setState({
        cards: response.body.data,
      });
    });
  }

  render() {
    var cards = _.map(this.state.cards, (card) => {
      return <li 
        key={card.id} 
        title={card.name} 
        alt={card.name} 
        cmc={card.cmc} 
        set={card.set} 
        usd={card.usd} 
        color={card.color_identity} 
        type={card.type_line} >
        
        
        {card.name}

        </li>;
    });
    return (
      <div className="App">
        <div className="card-results">
          <input ref="query"  type="text" />
          <button onClick={ (e) => { this.updateSearch();}} ref="submit">Submit</button>
          <ul>{cards}</ul>
        </div>
      </div>
    );
  }

  
}

export default App; 
