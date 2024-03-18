
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/actionCreator'; 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const registerState= useSelector(state=> state.registerState)
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordValidate: '',
  });

  const { name, email, password, passwordValidate } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    
    dispatch(register({ name, email, password, passwordValidate}));

  };

  useEffect(() => {
    if (registerState===true) {
      navigate('/entrar');
    }
  }, [registerState, navigate]);

  return (
    
    <div className="container">

      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          {/* Nested Row within Card Body */}
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"><img src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710649108/happydog/for7tackfqs0aid4kzp0.png" alt="imageRegister"/></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user" onSubmit={onSubmit}>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="examplename"
                        placeholder="First Name"
                        name="name"
                        value={name}
                        onChange={onChange}
                      />
                    </div>
                   
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Email Address"
                      name="email"
                      value={email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        name="passwordValidate"
                        value={passwordValidate}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-user btn-block">
                    Register Account
                  </button>
                  <hr />
                  {((registerState !== true )& registerState !== "")&& (
                    <>
                      {registerState.response.data?.error}
                      <hr />
                    </>
                  )}
                  <button className="btn btn-google btn-user btn-block">
                    <i className="fab fa-google fa-fw"></i> Register with Google
                  </button>
                  <button className="btn btn-facebook btn-user btn-block">
                    <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                  </button>
                </form>
                <hr />
                {registerState && <p>{registerState.error}</p>} 
                <div className="text-center">
                      <a className="small" href="/">
                        Menú principal
                      </a>
                    </div>
                <div className="text-center">
                  <a className="small" href="login.html">Already have an account? Login!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default RegisterPage;
