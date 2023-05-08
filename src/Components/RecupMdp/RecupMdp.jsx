import React from 'react'
import { Link } from "react-router-dom";
import img from '../../Images/bakeli.png'
import './RecupMdp.css'


const RecupMdp = () => {
  return (
    <div className='container mt-5'>
            <div className="row mt-5 justify-content-center">
                <div className="col-12 mt-5 text-center">
                    <img src={img} alt="" className='img-fluid mx-auto' />
                </div>

            
                    <div className="col-6 mt-5 d-flex flex-column justify-content-center">
                        <h1 className='text-center'>Recupérer Mot de pass</h1>

                        <div class="mb-3">
                            <label for="text" class="form-label">Email</label>
                            <input type="email" class="form-control" />
                        </div>

                        <Link to='/' className='btn btn-primary text-white'>Envoyer</Link>
                        
                    </div>

                
            </div>

        </div>
  )
}

export default RecupMdp
