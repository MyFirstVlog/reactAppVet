import React from'react'
import {Link} from 'wouter'

export default function Nav(){
    return(<nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Vet</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Pets</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/vets">Vets</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/owners">Owners</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/consults">Consults</Link>
                </li>
                </ul>               

            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
)
}