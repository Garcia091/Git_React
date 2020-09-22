import React from 'react';
//Navegación
import { Link, withRouter } from 'react-router-dom';

const Nav = (props) => {
const {history} = props;
  return (
    <React.Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link className="navbar-brand" to="/Inicio">
            Carousel
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=> history.push('/Login')}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/Registro"> Registro</Link> 
                  <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Destino"> Destino</Link> 
              </li>
              <li className="nav-item">  
              <Link className="nav-link" to="/Login"> Login</Link> 
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default withRouter (Nav);
