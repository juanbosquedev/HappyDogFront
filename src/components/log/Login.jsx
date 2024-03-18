
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { userLog } from '../../redux/actions/actionCreator';
function Login() {
  const dispatch = useDispatch();
  const userLogg = useSelector((state) => state.userLogged.logged);


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(userLog({ email, password }));

  };

  return ( !userLogg && 
    <div className="container">
      {/* Outer Row */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"><img src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710649100/happydog/veez7lqfqp79tq2ugpmi.png" alt="loginImage"/></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={onSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          name="email"
                          value={email}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
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
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input type="checkbox" className="custom-control-input" id="customCheck" />
                          <label className="custom-control-label" htmlFor="customCheck">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                      <hr />
                      <button className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw"></i> Login with Google
                      </button>
                      <button className="btn btn-facebook btn-user btn-block">
                        <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="/">
                        Menú principal
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="/registrarse">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
