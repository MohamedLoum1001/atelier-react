import React from 'react'
import { Maillot } from '../Data/Data'
import './Services.css';

export default function Services() {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="text-center mt-5">
                    <h1>Nos Services</h1>
                </div>
                {Maillot.map((item) => {
                        return (
                            <div className="col-md-3 text-center mt-5">
                               <img src={item.img} alt="" className='img-fluid mx-auto'/>
                                <h3 className='fs-3'>{item.titre}</h3>
                                <p className='text-dark'>{item.texte}</p>
                            </div>
                        );
                    })}
            </div>


        </div>
    )
}
