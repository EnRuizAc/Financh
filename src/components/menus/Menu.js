import { faHatCowboySide } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminButton from "./AdminButton";


const ROLES = {
  "User": 2001,
  "Admin": 5150
}

function Menu () {
  const history = useNavigate();
  const userInfo = useAuth();
  const userRole = userInfo.auth.roles;




    return(
        <div className="main">
          <div className = "titulo"><h1>Menu Principal</h1></div>
          
            <div className = "centeredContainer">
              <button className="button"onClick={()=> history("/reportes/insertar")}>Registrar Información</button>
              <button className="button" onClick={()=> history("/reportes")}> Generar Reporte</button>
              {userRole === ROLES.Admin ? <AdminButton/> : null}
             
              
            </div>
          </div>
    );
} 

export default Menu;
