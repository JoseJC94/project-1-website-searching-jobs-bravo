import React, { Component } from 'react';
import './Globales/css/login.css';
import './Globales/css/normalize.css';

class Signin extends Component {
  render() {
    return (
   <body className="cuerpoEjem">        
    <div className="container">
            <div className="row">

                <div className="col-md-12">

                    <div className="wrap">
                        <p className="form-title">
                            Registro</p>

                        <form className="login">
                            <img id="logo"  src={require('./imagenes/second_logo.jpg')} alt="logo" className="media-object" />
                            <input type="hidden" id="field-id" value="" />
                            <input type="text" id="field-name" placeholder="Nombre de usuario" required/>
                            <input type="password"  id="field-pass" placeholder="Contraseña" required/>
                            <input type="password"  id="field-repass" placeholder="Repita la contraseña" required/>
                            <input type="submit" id="btn-salvar" value="Crear cuenta" className="btn btn-primary btn-sm" />
                            <div className="remember-forgot">
                                
                                
                                <div className="row">
                                    <div className="col-md-12 forgot-pass-content">
                                        <p>¿Tienes cuenta?    <br /><a href="login.html" className="registro">¡Inicia Sesión aquí!</a></p>
                                        
                                    </div>
                                </div>
                                
                               
                            </div>
                        </form>
                    </div>


                    <table id="table-register">
                        <thead>
                        <th>Nombre</th>
                        <th>Contrasena</th>
                        </thead>
                        <tbody id="tbody-register">

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </body> 
    );
  }
}

export default Signin;
