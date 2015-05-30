// *************************************
//
//   Application
//
// *************************************

// -------------------------------------
//   Quotes
// -------------------------------------

var Quotes = React.createClass({

  // ----- Get Initial State ----- //

  getInitialState: function() {
    return { data: [] };
  },

  // ----- Get Next Quote ----- //

  _getNextQuote: function() {
    if ( this.state.quotes.length > 0 ) {
      var nextQuote = this.state.quotes.shift();

      setTimeout( function() {
        this._loadNextQuote( nextQuote );
      }.bind( this ), 1000 );

    } else {
      this.setState({ cName: 'is-last-active' });
      setTimeout( function() {
        this._loadStoriesFromServer();
      }.bind( this ), 1000 );
    }
  },

  // ----- Load Next Quote ----- //

  _loadNextQuote: function( nextQuote ) {
    this.setState({ cName: '', data: nextQuote });

    setTimeout( function() {
      this.setState({ cName: 'is-active', data: nextQuote });
    }.bind( this ), 1000 );

    setTimeout( function() {
      this._hideLastQuote( nextQuote );
    }.bind( this ), 5000 );
  },

  // ----- Hide Last Quote ----- //

  _hideLastQuote: function( lastQuote ) {
    this.setState({ cName: 'is-last-active', data: lastQuote });
    this._getNextQuote();
  },

  // ----- Load Stories From Server ----- //

  _loadStoriesFromServer: function() {
    $.getJSON( this.props.url, function( data ) {
      if ( this.isMounted() ) {
        this.setState({ data: data, quotes: data });
        this._getNextQuote();
      }
    }.bind( this ) );
  },

  // ----- Component Did Mount ----- //

  componentDidMount: function() {
    this._loadStoriesFromServer();
  },

  // ----- Render ----- //

  render: function() {
    return (
      <div className='quotes'>
        <Quote cName={ this.state.cName } data={ this.state.data } />
      </div>
    );
  }

});

// -------------------------------------
//   Quote
// -------------------------------------

var Quote = React.createClass({
  render: function() {
    return(
      <div className={ 'quote ' + this.props.cName }>
        <blockquote className='quote-content'>
          { this.props.data.text }
        </blockquote>

        <div className='bucket bucket--flag'>
          <div className='bucket-media'>
            <img className='quote-media' src='http://placecage.com/60/60' />
          </div>
          <div className='bucket-content'>
            <h2>{ this.props.data.author }</h2>
          </div>
        </div>
      </div>
    );
  }
});

// -------------------------------------
//   Render
// -------------------------------------

React.render(
  <Quotes url='quotes.json' />,
  document.getElementById( 'app' )
);
