import React from 'react'
import { Link } from "react-router-dom";
import img from '../../Images/bakeli.png'
import '../Connexion/Connexion'
import './inscription.css'

const Incription = () => {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-12 text-center my-5">
          <img src={img} alt="" className='img-fluid mx-auto mt-5' />
        </div>
      </div>

      <h1 className='text-center mt-3'>Créer un compte</h1>
      <form className='d-flex flex-column justify-content-center align-items-center '>
        <div class="row g-2 justify-content-center w-100">
          <div className="col-md-6">
            <div class="form-group">
              <label for="text" class="form-label">Prénom & Nom</label>
              <input type="text" class="form-control" />

            </div>
            <div class="form-group">
              <label for="text" class="form-label">Email</label>
              <input type="email" class="form-control" />
            </div>
          </div>

          <div className="col-md-6">
            <div class="form-group">
              <label for="text" class="form-label">Mot de passe</label>
              <input type="password" class="form-control" />
            </div>
            <div class="form-group mb-2">
              <label for="text" class="form-label">Confirmer le mot de passe</label>
              <input type="email" class="form-control" />
            </div>
          </div>
        </div>
      </form>

      <div className="row justify-content-center">
        <div className="col-12">
          <div>
            <button type="submit" class="btn btn-primary w-100">Créer un compte</button>
          </div>

          <div className='d-flex flex-row justify-content-center text-center my-2'>
            <p className='text-center'>Si vous avez déjà un compte</p>
            <Link to='/connexion' className='text-primary ms-2 text-center'>Connectez-vous</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Incription
