import React from 'react'
import { Rutas } from '../Rutas.json';
import Navegation from '../components/Navegation'


const Destinos = () => {
  return (
    <div className="container">
      <div className="album py-5 bg-light ">
        <div className="container">
          <div className="row">
          {
            Rutas.map((item, index) => {
              return(                
            <div className="col-md-4 " key={`item-Data-${index}`}>
              <div className="card mb-4 shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">{item.CardTitle}</text></svg>
                <div className="card-body">
                  <p className="card-text">{item.Parrafo}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group{item.Parrafo}">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

              )
            })}

          </div>
        </div>
      </div>
<Navegation/>
    </div>
  )
} 

export  default Destinos;