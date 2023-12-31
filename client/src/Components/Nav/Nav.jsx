import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import style from "./Nav.module.css";
import { SearchBar }  from "../index";
import icono from "../../assets/pokeball.png";

const Nav = () => {
 
let navigate = useNavigate();
const dispatch = useDispatch();
const location = useLocation()
const user = useSelector((state) => state.user);

const logOut = () => {
  dispatch(logout()) && navigate("/");
};

  return (
    <div>
        <Link to="/home">
          <img className={style.icono} src={icono} alt="icono" />
        </Link>
      <div className={style.nav}>
        <Link to="/about">
          <h2 className={style.about}>About us</h2>
        </Link>
        <Link to="/home">
          <h2 className={style.home}>Home</h2>
        </Link>
        <Link to="/pokedex">
          <h2 className={style.pokedex}>Pokédex</h2>
        </Link>
        <Link to="/play">
          <h2 className={style.play}>Play</h2>
        </Link>
        <Link to="/create">
          <h2 className={style.create}>Create your own pokémon</h2>
        </Link>
        <h2 className={style.logout} onClick={logOut}>
          Log out
        </h2>

        {location.pathname === "/home" ?
        <SearchBar />
        : null}
        
      </div>
    </div>
  );
};


export default Nav;