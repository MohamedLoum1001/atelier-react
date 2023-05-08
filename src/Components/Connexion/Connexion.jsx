import React from 'react'
import { Link } from "react-router-dom";
import img from '../../Images/bakeli.png'
import './Connexion.css'

const Connexion = () => {
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-12 mt-5 text-center">
                    <img src={img} alt="" className='img-fluid mx-auto mt-4 mb-4' />
                </div>

                <div className="col-12 text-center">
                    <h1 className='text-center'>Systéme d'authentification</h1>
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-12'>
                <form className='d-flex flex-column justify-content-center align-items-center'>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div class="form-group mb-2">
                            <label for="text" class="form-label">Email</label>
                            <input type="email" class="form-control" />
                        </div>
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div class="form-group mb-2">
                            <label for="text" class="form-label">Mot de pass</label>
                            <input type="password" class="form-control" />
                        </div>
                    </div>

                    <div className='col-md-6 mb-3'>
                        <Link to='/recupMdp' className='text-primary'>Mot de pass Oublié</Link>
                    </div>

                    <div className='col-md-6'>
                        <Link to='/' className='btn btn-primary text-white w-100'>Se Connecter</Link>
                    </div>


                </form>

                </div>
            </div>
            <div className="row justify-content-center">
                <div className='col-12 d-flex flex-row justify-content-center mt-3'>
                    <p className='text-center'>Si vous n'avez pas un compte</p><Link to='/inscription' className='text-primary text-center ms-1'>Créez un compte</Link>
                </div>
            </div>

        </div>
    )
}

export default Connexion
