import React from 'react'
import {connect} from 'react-redux'
import { handleUsernameChange, handleUserPasswordChange } from '../../actions/actions';

const LoginPage = ({userName, password}) => {
    return(
        <div className="form-horizontal">
        <form >
          <div className="form-group">
            <label>Usuario</label>
            <input type="text" value={userName} className="form-group" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input  type="password" value={password} className="form-group" />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-warning" value="Iniciar sesión" />
          </div>
        </form>
      </div>
    )
}
const mapStateToProps = state => ({
    userName: state.user,
    password: state.password
})
const mapDispatchToProps = dispatch => ({
    handleUser : handleUsernameChange,
    handlePassword: handleUserPasswordChange
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);

