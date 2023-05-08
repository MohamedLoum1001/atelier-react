import React from 'react'
import "./Product.css"
import { Products } from '../Data/Data'

export default function Product() {
  return (
    <div className='container mt-5'>
      <div className="row mt-5 align-items-center">
        <div className="col-12 text-center mt-5">
          <h1>Autres Produits</h1>
        </div>


        {Products.map((item) => {
          return (
            <div className="col-md-4 text-center mt-5">
              <img src={item.img} alt="" className='img-fluid mx-auto' />
              <h3 className='fs-3 text-center'>{item.titre}</h3>
            </div>
          );
        })}
      </div>
    </div>
  )
}