
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg"
import Windowsize from './Windowsize';
import axios from 'axios';
import Loader from './Loader';
import { OtherContext } from '../Contexts/OtherContext';
import { useContext } from 'react';
import SF from './SF';
import Rating from './Rating';
const Nav = () => {
  const navigate=useNavigate()
  const {loaders,authentication,searchpop,users}=useContext(OtherContext)
    const [loader,setloader]=loaders
    const [authen,setauthen]=authentication
    const [searc,setsearc]=searchpop
    const [user,setuser]=users
 const { width, height }= Windowsize()
  const handleSubmenuClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    
    const allSubmenus = document.querySelectorAll('.dropdown-submenu .dropdown-menu');

    
    allSubmenus.forEach(submenu => {
      if (submenu !== e.currentTarget.nextElementSibling) {
        submenu.classList.remove('show');
      }
    });

   
    const submenu = e.currentTarget.nextElementSibling;
    if (submenu) {
      submenu.classList.toggle('show');
    }
  };
 const handlelogout=async(e)=>{
  e.preventDefault()
  const val=localStorage.clear()
  if(!val){
       setauthen(false)
  }
       try {
        setloader(true)
        const res=await axios.post("https://projectbe-3-udjp.onrender.com/logout",{},{
          withCredentials:true
        })
        alert(res.data.message)
        if(res.data.message==="Logout successful"){
          navigate("/")
          window.location.reload()
        }
       } catch (err) {
         alert(err.message)
       }finally{
          setloader(false)
          
       }
 }
//  console.log(( (user.role =="admin") && ( authen)  ),authen)

  return (
    <>
    <SF/>
    <Rating/>
    <Loader/>
    <div id='nav'>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
           <img src={logo} alt="logo" className='logoimg' />
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>DD Car Services</div>
          </Link>
          <button className="navbar-toggler bg-white mb-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor:width<992?"black":"",padding:"20px",borderRadius:"5px"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/services/Periodic Maintenance Service">Periodic Maintenance Service</Link></li>
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" to="#" onClick={handleSubmenuClick}>
                      Body Shop
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/services/Dent & Paint">Dent & Paint</Link></li>
                      <li><Link className="dropdown-item" to="/services/Bumper Repair">Bumper Repair</Link></li>
                      <li><Link className="dropdown-item" to="/services/Accidental Repair">Accidental Repair</Link></li>
                      <li><Link className="dropdown-item" to="/services/Scratch Removal">Scratch Removal</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" to="#" onClick={handleSubmenuClick}>
                      Detailing
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/services/9H Ceramic Coating">9H Ceramic Coating</Link></li>
                      <li><Link className="dropdown-item" to="/services/Rubbing, Waxing and Polishing">Rubbing, Waxing and Polishing</Link></li>
                      <li><Link className="dropdown-item" to="/services/Exterior Cleaning">Exterior Cleaning</Link></li>
                      <li><Link className="dropdown-item" to="/services/Paint Enhancement">Paint Enhancement</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" to="#" onClick={handleSubmenuClick}>
                      Custom Repairs
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/services/Engine Repairs">Engine Repairs</Link></li>
                      <li><Link className="dropdown-item" to="/services/Brake Repairs">Brake Repairs</Link></li>
                      <li><Link className="dropdown-item" to="/services/Suspension Repairs">Suspension Repairs</Link></li>
                      <li><Link className="dropdown-item" to="/services/AC Repairs">Ac Repairs</Link></li>
                      <li><Link className="dropdown-item" to="/services/Electrical Repairs">Electrical Repairs</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" to="#" onClick={handleSubmenuClick}>
                      Scanning & Diagnostics
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/services/Troubleshooting and System Errors">Troubleshooting and System Errors</Link></li>
                      <li><Link className="dropdown-item" to="/services/79 Points Inspection">79 Points Inspection</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" to="#" onClick={handleSubmenuClick}>
                      Value Added Services
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/services/Battery Replacement">Battery Replacement</Link></li>
                      <li><Link className="dropdown-item" to="/services/Tyre Replacement">Tyre Replacement</Link></li>
                      <li><Link className="dropdown-item" to="/services/Insurance Renewal">Insurance Renewal</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              {authen?(null):( <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">LogIn</Link>
              </li>)}
             
              {authen?(null):( <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
              </li>)}
              {/* {authen?(null):()} */}
              {!authen?(null):( <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            History
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/userhistory">User history</Link></li>
            <li><Link className="dropdown-item" to="/vehiclehistory">Vehicle-related Expenses</Link></li>
          </ul>
        </li>)} 
        {!authen?(null):( <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/profile">User Profile</Link></li>
            <li><Link className="dropdown-item" to="" onClick={handlelogout}>Logout</Link></li>
          </ul>
        </li>)}
        {( (user.role =="admin") && ( authen)  )?(<li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/users">Users</Link>
              </li>):(null )}
             
              {!authen?(null):( <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/appointments">Appointments</Link>
              </li>)}
             
             
             
            </ul>
            {!authen?(null):( 
                <button className="btn btn-outline-success bg-transparent border-white mr-2 cus-btn" onClick={()=>setsearc(true)} type="submit">
                <i className="fa fa-search" id="search" aria-hidden="true"></i>
              </button>
              )}
          </div>
        </div>
      </nav>
    </div></>
  );
}

export default Nav;
