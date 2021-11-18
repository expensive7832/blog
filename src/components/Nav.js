import { getAuth, signOut } from '@firebase/auth';
import { FaSearch } from 'react-icons/fa';
import {Link } from "react-router-dom";
import { useStatevalue } from '../Redux/context';


function Nav() {

  const [{ user }, dispatch] = useStatevalue();

  const Logout = () => {
    signOut(getAuth());
      dispatch({
        type: "SET_USER",
        payload: null,
      });
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fw-bold">
        <div className="container-fluid">
          <Link className="navbar-brand ms-1 ms-md-4" to="#">LiveNews</Link >
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/submitArticle">Submit Post</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">About</Link>
              </li>
              
            </ul>
            <form className="">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="search...." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  <span class="input-group-text" id="basic-addon2"><FaSearch/></span>
              </div>
           </form>
           <li className="d-flex align-items-center nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-dark" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={user?.photoURL} alt="" style={{width: "100%", height: "2rem", objectFit: "contain"}} />
                </Link>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdown">
                  <li className="text-center text-capitalize">{user?.displayName}</li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><button className="btn btn-primary w-100 btn-sm" onClick={Logout}>Logout</button></li>
                </ul>
              </li>
            
          </div>
        </div>
      </nav>
    )
}

export default Nav
