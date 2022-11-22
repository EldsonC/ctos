import { Logo } from "../../assets/icons/logo"
import { StyleHeader } from "./style"

import { NavLink } from "react-router-dom"

export function Header() {
    return (
        <StyleHeader>
            <div className="container_header">
                <div className="logo__home">
                    <Logo/>
                    <span>CTS Softwares</span>
                </div>
                <nav className="nav__home">
                    <NavLink to="/about" className={({isActive}) => (isActive ? "selected" : "not_selected")}>
                        <span>Sobre</span>
                    </NavLink>
                    <NavLink to="/oq" className={({isActive}) => (isActive ? "selected" : "not_selected")}>
                        <span>O que fazemos</span>
                    </NavLink>
                    <NavLink to="/produtos" className={({isActive}) => (isActive ? "selected" : "not_selected")}>
                        <span>Produtos</span>
                    </NavLink>
                </nav>
                <div className="contact_home">
                    <NavLink to="/contato" className={({isActive}) => (isActive ? "selected" : "not_selected")}>
                        <span>contato</span>
                    </NavLink>
                </div>
            </div>
        </StyleHeader>
    )
}