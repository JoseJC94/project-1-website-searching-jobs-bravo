import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Globales/css/style.css';
import './Globales/css/login.css';
import './Globales/css/normalize.css';

class Pagina extends Component {
    static propTypes = 
       {
           body:PropTypes.object.isRequired
       }
    
    render() {
    
    const {body} = this.props;
        
    return (
            <div className="Content">
               {body} 
            </div>
    );
  }
}

export default Pagina;
