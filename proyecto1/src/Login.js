import React, { Component } from 'react';

import './Globales/css/login.css';
import './Globales/css/normalize.css';


class Login extends Component {
  render() {
    return (
     <body className="cuerpoEjem">    
        <div  className="container" >
            <div className="row">
                <div className="col-md-12">

                    <div className="wrap">
                        <p className="form-title">
                            Inicio de Sesión</p>



                        <form className="login">
                            <img id="logo"  src={require('./imagenes/second_logo.jpg')} alt="logo" className="media-object" />
                            <input type="text"  id="field-nombre" placeholder="Nombre de usuario" required/>
                            <input type="password" id="field-contra" placeholder="Contraseña" required/>
                            <input type="submit" id="btn-loguear" value="Iniciar Sesión" className="btn btn-primary btn-sm" />
                            <p id="mensaje"></p>
                            <div className="remember-forgot">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="checkbox">
                                            <label>
                                                <input id="myCheck" type="checkbox" onclick="Chequeo()"/>
                                                Recuérdame 
                                            </label>

                                        </div>
                                    </div>
                                    <div className="col-md-6 forgot-pass-content">
                                        <a href="registro.html" className="registro">¿No tienes cuenta aún?</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</body>   
    );
  }
}

export default Login;
