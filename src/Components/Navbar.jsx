import React from 'react'

export const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"s>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsBank</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link cursor-pointer" onClick={()=>setCategory("technology")} href="#">Technology</button>
        </li>
        <li className="nav-item">
          <button className="nav-link cursor-pointer" onClick={()=>setCategory("business")} href="#">Business</button>
        </li>
        <li className="nav-item">
          <button className="nav-link cursor-pointer" onClick={()=>setCategory("health")}  href="#">Health</button>
        </li>
        <li className="nav-item">
          <button className="nav-link cursor-pointer" onClick={()=>setCategory("sports")}  href="#">Sports</button>
        </li>
        <li className="nav-item">
          <button className="nav-link cursor-pointer" onClick={()=>setCategory("entertainment")}  href="#">Entertainment</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;
