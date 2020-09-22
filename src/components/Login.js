import React from 'react';
import '../style/Registro.css'
import Navegation from '../components/Navegation'

const Login  = () => {
  return (
    <div className="Registro py-5 text-center mb-4">
      <form className="form-signin">
        <img className="mb-4" src="" alt="Logo" width="72" height="72" />
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
        />
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required=""
        />

        <div className="form-signin  ">
          <select name="priority" className="form-control py-2" value="" onChange="">
            <option>Usuario</option>
            <option>Estudiante</option>
            <option>Profesor </option>
            <option>Admininistrador</option>
          </select>
        </div>

        <div class="checkbox mb-2">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>

        <button class="btn btn-lg btn-primary btn-block " type="submit">
          Sign in
        </button>
        <p class="mt-2 mb-3 text-muted">© Dic - 2020</p>
      </form>
      <Navegation/>
    </div>
  );
};

export default Login;