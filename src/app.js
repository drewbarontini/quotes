// *************************************
//
//   Application
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

var React   = require( 'react' );
var Quotes  = require( './Quotes' );

// -------------------------------------
//   Render
// -------------------------------------

React.render(
  <Quotes url='quotes.json' />,
  document.getElementById( 'app' )
);
