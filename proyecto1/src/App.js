import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagina from './Pagina';


class App extends Component {
    static propTypes = {
           children: PropTypes.object.isRequired
       }
    
    render() {
    
    const { children } = this.props;
        
    return (
            <div className="App">
               <Pagina body={children} />
            </div>
    );
  }
}

export default App;
