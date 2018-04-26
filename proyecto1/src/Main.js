import React, { Component } from 'react';
import './Globales/css/style.css';
import './Globales/css/normalize.css';
import logo from './imagenes/logo.jpg';
import ronald from './imagenes/ron.png';
import jose from './imagenes/Jose.png';
import david from './imagenes/david.png';
import demo from './imagenes/image2.png';
import virtud from './imagenes/image3.png';
import logo_peque from './imagenes/loguito.jpg';


class Main extends Component {
  render() {
    return (
     <div>       
        <div className="row">
            <div className="col-sm-12">
                <header>
                    <h1 className="titulo"> Work & talent </h1>
                </header>
            </div>
        </div>

        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" href="#"  id="main-section">Todos los trabajos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" id="contact-us">¿Necesitas ayuda?</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" id="about-us">Sobre nosotros</a>
            </li>
        </ul>

        <div id="section-slider" className="carousel slide" data-ride="carousel">


            <ul className="carousel-indicators">
                <li data-target="#section-slider" data-slide-to="0" className="active"></li>
                <li data-target="#section-slider" data-slide-to="1"></li>
                <li data-target="#section-slider" data-slide-to="2"></li>
            </ul>


            <div className="carousel-inner">
                <div className="carousel-item active ">
                    <div className="row" id="main_section">
                        <div className="col-sm-3 align-items-left" id="aside">
                            <img id="logo1" src={logo} alt="logo" className="img-fluid" />

                            <div id="trans">
                                <button type="button" id="TT" className="btn btn-primary btn-sm btn-responsive">Tiempo Completo</button>
                            </div>    
                                <div>
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-primary">Nivel de experiencia</li>
                                    </ul>

                                    <div className="list-group">
                                        <button type="button" className="list-group-item list-group-item-action">Junior</button>
                                        <button type="button" className="list-group-item list-group-item-action">Mid</button>
                                        <button type="button" className="list-group-item list-group-item-action">Senior</button>
                                    </div>

                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-primary">Por fecha</li>
                                    </ul>

                                    <div className="list-group">

                                        <button type="button" className="list-group-item list-group-item-action">Último mes</button>
                                        <button type="button" className="list-group-item list-group-item-action">Última semana</button>
                                        <button type="button" className="list-group-item list-group-item-action">Último día</button>
                                    </div>

                                </div>
                        </div>

                                <div className="col-sm-9" id="busca">
                                    <div  id="wrap">
                                        <div className="form-inline" >
                                            <div className="form-group">
                                                <label htmlFor="trabajo"><strong>Descripción del trabajo:</strong> </label>
                                                <input type="text" size="40" className="form-control" id="trabajo" placeholder="Digite el trabajo" name="trabajo" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="contrasena"><strong>Localización: </strong></label>
                                                <input type="text" size="40" className="form-control" id="contrasena" placeholder="Digite localización" name="contrasena" />
                                            </div>
                                            <button className="btn btn-default" onclick="getTrabajosDesLoc();" id="buston">Buscar</button>
                                        </div>
                                        <div id="trabajosContent" name="trabajosContent">
                                            <table id="trabajoslist">
                                                <tbody id='tableContent'></tbody>
                                            </table>
                                        </div>
                                    </div>   

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" id="contact_section">
                            <div className="row container ">
                                <div className="col-sm-1"></div>
                                <div className="card col-sm-3" styles="width: 18rem;">
                                    <img className="img-thumbnail rounded-circle cardimage" src={ronald} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Rónald González</h5>
                                        <p className="card-text">Estudiante en Universidad Nacional</p>
                                        <a href="#" className="btn btn-primary">Contacto</a>
                                    </div>
                                </div>
                                <div className="col-sm-1"></div>
                                <div className="card col-sm-3" styles="width: 18rem;">
                                    <img className="img-thumbnail rounded-circle cardimage" src={jose} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">José Jiménez</h5>
                                        <p className="card-text">Estudiante en Universidad Nacional</p>
                                        <a href="#" className="btn btn-primary">Contacto</a>
                                    </div>
                                </div>
                                <div className="col-sm-1"></div>
                                <div className="card col-sm-3" styles="width: 18rem;">
                                    <img className="img-thumbnail rounded-circle cardimage" src={david} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">David Padilla</h5>
                                        <p className="card-text">Estudiante en Universidad Nacional</p>
                                        <a href="#" className="btn btn-primary">Contacto</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" id="about_section">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                        <div className="card-body d-flex flex-column align-items-start">
                                            <strong className="d-inline-block mb-2 text-success">Work & Talent</strong>
                                            <div className="mb-0">
                                                <h2 className="modelado">Descripción de la empresa</h2>
                                            </div>
                                            <div className="mb-1 text-muted"><script>
                                                DameLaFechaHora();
                                                </script></div>
                                            <p className="card-text mb-auto">
                                                Work and Talent es una herramienta profesional que permite encontrar 
                                                proveedores o contactar con potenciales clientes. Éste un sitio web 
                                                especializado que integra oferta y demanda laboral que existe en el mercado.
                                                El objetivo principal de este espacio es ofrecer a sus usuarios un servicio
                                                de búsqueda de trabajo en línea, de manera rápida y simple.Muchos usuarios
                                                encuentran una oportunidad para darse a conocer profesionalmente,
                                                una oportunidad para encontrar 
                                                un puesto de trabajo o encontrar colaboradores profesionales.
                                            </p>
                                        </div>
                                        <img className="card-img-right flex-auto d-none d-md-block" alt="Thumbnail [200x250]" src={demo} data-holder-rendered="true" />
                                    </div>
                                    
                                    
                                    
                                </div>
                                
                                <div className="col-md-4">
                                    <img id="imageTin" src={virtud} alt="image3" className="img-fluid" />
                                </div>
                                
                                <div className="col-md-4">
                                    <h2 className="modelado">Misión</h2>
                                    <p className="cuerpo">Nuestra misión siempre ha sido poder proporcionar a 
                                        todos y cada uno de los solicitantes de empleo una lista 
                                        completa de puestos de trabajo en todo 
                                        el mundo para que así encuentren su trabajo de ensueño en
                                     las empresa ideales. Por esta razón fundamos la comunidad 
                                     profesional más transparente del mundo.</p>
                                </div>
                                
                                <div className="col-md-4">
                                    <h2 className="modelado">Visión</h2>
                                    <p className="cuerpo">
                                        Mejorar y establecer más y mejores oportunidades económicas 
                                        para cada uno de los miembros del mercado laboral 
                                        mundial, sin afectar a ninguna clase trabajadora en el proceso. Todo esto 
                                        gracias al desarrollo ininterrumpido 
                                        del gráfico económico global.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="row">
                    <div className="col-sm-12">
                        <footer>
                            <div id="centrado">        
                            <img id="logo_peque" align="center" src={logo_peque} alt="logo" className="media-object" />
                            </div>
                            2018 Work & talent. Derechos reservados <br />

                        </footer>
                    </div>
                </div>
        </div>
    );
  }
}

export default Main;
