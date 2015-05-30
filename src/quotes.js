// *************************************
//
//   Quotes
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

var Quote   = require( './Quote' );

// -------------------------------------
//   Base
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

  // ----- Get JSON ----- //

  _getJSON: function( url, fn ) {
    var request = new XMLHttpRequest();
    var data    = null;
    request.open( 'GET', url, true );

    request.onload = function() {
      if ( request.status >= 200 && request.status < 400 ) {
        data = JSON.parse( request.responseText );
       fn( data );
      }
    };

    request.send();
  },

  // ----- Load Stories From Server ----- //

  _loadStoriesFromServer: function() {
    this._getJSON( this.props.url, function( data ) {
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

module.exports = Quotes;
