import React from "react";

import { Link } from "react-router-dom";

import { HeaderArea } from "./styled";

import { isLogged, doLogout } from "../../../helpers/AuthHandler";


const Header = () => {
  let logged = isLogged();

  const handleLogout = () => {
    doLogout();
    window.location.href = '/';
  }

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">N</span>
            <span className="logo-2">r</span>
            <span className="logo-3">r</span>
          </Link>
        </div>
        <nav>
          <ul>
            {logged && (
              <>
                <li>
                  <Link to="/my-account">Minha Conta</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sair</button>
                </li>
                <li>
                  <Link to="/post-an-ad" className="button">
                    Poste um anúncio
                  </Link>
                </li>
              </>
            )}
            {!logged && (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
                <Link to="/signin" className="button">
                  Poste um anúncio
                </Link>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;
