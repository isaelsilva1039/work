import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaExchangeAlt,
    FaChartLine,
    FaNewspaper,
    FaCog,
    FaLifeRing,
    FaNetworkWired,
    FaBuilding
} from "react-icons/fa";
import { Tooltip } from "@mui/material";
import Profile from "../Images/profile.png";
import { PiMonitorFill, PiUsersThreeFill } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";

const Sidebar = ({ closeMenu, setCloseMenu }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    const handleItemClick = (path) => {
        navigate(path);
    };

    const menuItems = [
        { path: "/", label: "Contratos", icon: <PiUsersThreeFill size={18} /> },
        { path: "/empresa", label: "Empresa", icon: <FaBuilding size={16} /> },
        { path: "/filial", label: "Filial", icon: <FaNetworkWired size={16} /> },
        { path: "/pdvs", label: "PDV’s", icon: <PiMonitorFill size={16} /> },
        { path: "/faturas", label: "Minhas faturas", icon: <MdOutlinePayment size={16} /> },
        { path: "/support", label: "Suporte", icon: <FaLifeRing size={16} /> },
    ];

    return (
        <div className={closeMenu ? "sidebar active" : "sidebar"}>
            <div
                className={closeMenu ? "logoContainer active" : "logoContainer"}
                onClick={handleCloseMenu}
            >
                <FaNetworkWired size={closeMenu ? "40px" : "30px"} />
                <h2 className="title">Work</h2>
            </div>
            <div
                className={
                    closeMenu === false
                        ? "burgerContainer"
                        : "burgerContainer active"
                }
            >
                <div
                    className="burgerTrigger"
                    onClick={() => {
                        handleCloseMenu();
                    }}
                ></div>
                <div className="burgerMenu"></div>
            </div>
            <div
                className={
                    closeMenu
                        ? "profileContainer active"
                        : "profileContainer"
                }
            >
                <img src={Profile} alt="profile" className="profile" />
                <div className="profileContents">
                    <p className="name">Hello, Jóse</p>
                    <p>johnsmith@gmail.com</p>
                </div>
            </div>
            <div
                className={
                    closeMenu
                        ? "contentsContainer active"
                        : "contentsContainer"
                }
            >
                <ul>
                    {menuItems.map((item) => (
                        <li
                            key={item.path}
                            className={location.pathname === item.path ? "active" : ""}
                            onClick={() => handleItemClick(item.path)}
                        >
                            <Tooltip
                                title={!closeMenu ? "" : item.label} // Mostra o tooltip somente se o menu estiver fechado
                                placement="right"
                                arrow
                            >
                                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    {item.icon}
                                    {!closeMenu && <span>{item.label}</span>} {/* Mostra o nome somente se o menu estiver aberto */}
                                </span>
                            </Tooltip>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
