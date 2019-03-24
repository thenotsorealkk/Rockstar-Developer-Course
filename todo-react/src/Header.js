import React from 'react';

class Header extends React.Component {
     render() {
          return(
               <h1> {this.props.name}({this.props.count}) </h1>
          )
     }
}

export default Header;
