// *************************************
//
//   Quote
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

var Gravatar = require( './Gravatar' );

// -------------------------------------
//   Base
// -------------------------------------

var Quote = React.createClass({

  // -------------------------------------
  //   Render
  // -------------------------------------

  render: function() {

    return(
      <div className={ 'quote ' + this.props.cName }>
        <blockquote className='quote-content'>
          { this.props.data.text }
        </blockquote>

        <div className='bucket bucket--flag'>
          <div className='bucket-media'>
            <Gravatar email={ this.props.data.email } />
          </div>
          <div className='bucket-content'>
            <h2>{ this.props.data.author }</h2>
          </div>
        </div>
      </div>
    );

  }

});

module.exports = Quote;
