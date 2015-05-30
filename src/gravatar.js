// *************************************
//
//   Gravatar
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

var md5 = require( 'MD5' );

// -------------------------------------
//   Base
// -------------------------------------

var Gravatar = React.createClass({

  _getGravatar: function( email ) {
    return 'http://www.gravatar.com/avatar/' + md5( email );
  },

  render: function() {
    return(
      <img className='quote-media' src={ this._getGravatar( this.props.email ) } width='60' />
    );
  }

});

module.exports = Gravatar;
