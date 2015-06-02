// *************************************
//
//   Gravatar
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

var React = require( 'react' );
var md5   = require( 'MD5' );

// -------------------------------------
//   Base
// -------------------------------------

var Gravatar = React.createClass({

  // ----- Is Default Gravatar ----- //

  _isDefaultGravatar: function( gravatar ) {
    return gravatar == 'http://www.gravatar.com/avatar/61792e37c91ef1e56ac90624e5a94f26';
  },

  // ----- Get Gravatar ----- //

  _getGravatar: function( email ) {
    var gravatar = 'http://www.gravatar.com/avatar/' + md5( email );

    if ( this._isDefaultGravatar( gravatar ) ) {
      return 'http://lorempixel.com/60/60/food/';
    }

    return gravatar;
  },

  // ----- Render ----- //

  render: function() {
    return(
      <img className='quote-media' src={ this._getGravatar( this.props.email ) } width='60' />
    );
  }

});

module.exports = Gravatar;
