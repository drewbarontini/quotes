// *************************************
//
//   Quote
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

var React    = require( 'react' );
var Gravatar = require( './Gravatar' );

// -------------------------------------
//   Base
// -------------------------------------

var Quote = React.createClass({

  // ----- Render ----- //

  render: function() {

    var quote = this.props.data;

    return(
      <div className={ 'quote ' + this.props.cName }>
        <blockquote className='quote-content'>
          { quote.text }
        </blockquote>

        <div className='bucket bucket--flag'>
          <div className='bucket-media'>
            <Gravatar email={ quote.email } />
          </div>
          <div className='bucket-content'>
            <h2>{ quote.author }</h2>
          </div>
        </div>
      </div>
    );

  }

});

module.exports = Quote;
