/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import history from '../utils/history';
import { LoginWithToken } from '../services/auth';
import { LoginLayout } from '../components/Login';
import { loginSuccess } from '../redux/actions';

import wobizImage from '../assets/wobiz-image.png';
import wobizLogo from '../assets/wobiz-logo.png';


interface Props {}

const Login: React.FC<Props> = () => {
  const SignupSchema = Yup.object().shape({
    Username: Yup.string().email()
      .required('Campo requerido'),
    Password: Yup.string()
      .min(6, 'Al menos debe tener 6 caracteres')
      .required('Campo requerido'),
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setError(false);
  }, []);

  const handleLogin = async (values: {
    Username: string;
    Password: string;
  }) => {
    try {
      const result = await LoginWithToken(
        values.Username,
        values.Password
      );
      if (result.code === 200) {
        dispatch(loginSuccess(result));
        history.push(`/dashboard`);
      } else if (result.code === 106) {
        setError(true);
        setErrorMessage('Contraseña inválida');
      } else if (result.code === 108) {
        setError(true);
        setErrorMessage('Usuario inválido');
      }
    } catch (err) {
      setError(true);
      setErrorMessage('Se produjo un error, por favor intentalo nuevamente.');
    }
  };
  return (
    <>
      <LoginLayout>
        <div className='col-md-4' style={{padding: '40px'}}>
          <img src={wobizLogo} alt='Wobiz' className='logo' />
          <Formik
            onSubmit={handleLogin}
            initialValues={{
              Username: '',
              Password: '',
            }}
            validationSchema={SignupSchema}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit} className="form-vertical">
                <h2 className='greenish-blue-text mt-5 mb-4 bolder' style={{color: '#363636'}}>Ingresa a tu cuenta</h2>
                <div className="form-group is-empty">
                  <label>Email</label>
                  <div className="group">
                    <Field
                      name="Username"
                      className="form-control"
                      id="email"
                      placeholder="ej: usuario@mail.com"
                      autoComplete="off"
                      error={error}
                      helperText={errorMessage}
                    />
                    {errors.Username && touched.Username ? (
                      <p className="alert alert-danger">
                        {errors.Username}
                      </p>
                    ) : null}
                    {error ? (
                      <p className="alert alert-danger">{errorMessage}</p>
                    ) : null}
                  </div>
                </div>
                <div className="form-group is-empty">
                  <label>Password</label>
                  <div className="group">
                    <Field
                      name="Password"
                      className="form-control"
                      id="password"
                      placeholder="Escribe tu contraseña"
                      autoComplete="off"
                      type="password"
                      error={error}
                      helperText={errorMessage}
                    />
                    {errors.Password && touched.Password ? (
                      <p className="alert alert-danger">{errors.Password}</p>
                    ) : null}
                    {error ? (
                      <p className="alert alert-danger">{errorMessage}</p>
                    ) : null}
                  </div>
                </div>
                <div className='pl-0 mt-2 mb-2 link-decoration'>
                      <a className='gray-text forgot-pass' href='#' style={{textDecoration: 'none'}}>¿Olvidaste tu contraseña?</a>
                </div>
                <button type="submit" className="btn btn-action-2 btn-lg btn-block mt-3 btn-validate btn-secondary" style={{backgroundColor: '#1bb8e3', border: 'none'}}>
                  Ingresar
                  <span className="icon fa-long-arrow-right" />
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className='col-md-8'>
          <img src={wobizImage} alt='Wobiz' className='vh-100 position-relative vw-img'/>
        </div>
      </LoginLayout>
    </>
  );
};

export default Login;
