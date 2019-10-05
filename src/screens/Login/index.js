import React from 'react'

const LoginPage = () => {
    return(
        <div className="form-horizontal">
        <form onSubmit={onSubmitForm}>
          <div className="form-group">
            <label>Usuario</label>
            <input value={username} onChange={onChangeUsername} type="text" className="form-group" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input value={password} onChange={onChangePassword}  type="password" className="form-group" />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-warning" value="Iniciar sesión" />
          </div>
        </form>
      </div>
    )
}

export default LoginPage;

