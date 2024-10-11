import React, { useEffect } from "react";
import "./Nav.css";
import logo from "./reinfosec.png";
import { Link } from "react-router-dom";
// import Card from "../../../../react-app/src/components/Home/card/Card";
// import No_clints from "../clients/No_clients";
// import Home from "../home/Home";
// import Create_project from "../clients/Create_project";
// import Timeline from "../../../../react-app/src/components/Home/time line chart/Timeline";
// import TodoList from "../todo/TodoList";
// import SeperateCard from "../../../../react-app/src/components/Home/card/SeperateCard"
import AppRoutes from "../../Routes";

function Navbar() {
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    const toggleSidebar = () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    };

    closeBtn.addEventListener("click", toggleSidebar);
    searchBtn.addEventListener("click", toggleSidebar);

    // Cleanup event listeners when component unmounts
    return () => {
      closeBtn.removeEventListener("click", toggleSidebar);
      searchBtn.removeEventListener("click", toggleSidebar);
    };
  }, []);

  // Function to change the sidebar button icon
  const menuBtnChange = () => {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    closeBtn.classList.toggle(
      "bx-menu-alt-right",
      sidebar.classList.contains("open")
    );
    closeBtn.classList.toggle("bx-menu", !sidebar.classList.contains("open"));
  };

  // Top navbar toggle function
  const myFunction = () => {
    const x = document.getElementById("myTopnav");
    x.className = x.className === "topnav" ? "topnav responsive" : "topnav";
  };

  return (
    <div>
      <div className="sidebar">
        <div className="logo-details">
          <img src={logo} alt="logo" className="icon small-logo" />
          <div className="logo_name">Reinfosec</div>
          <i className="bx bx-menu" id="btn"></i>
        </div>
        <ul className="nav-list">
          <li>
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>
          <li>
            <Link to={'/Clients'}>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="links_name">Accounts</span>
            </a>
            <span className="tooltip">Accounts</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pen"></i>
              <span className="links_name">Pen Testers</span>
            </a>
            <span className="tooltip">Pen Testers</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Analytics</span>
            </a>
            <span className="tooltip">Analytics</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-calendar"></i>
              <span className="links_name">Planner</span>
            </a>
            <span className="tooltip">Planner</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-file"></i>
              <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <img
                src="https://img.freepik.com/free-photo/young-crazy-man-happy-expression_1194-5236.jpg"
                alt="profileImg"
              />
              <div className="name_job"></div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>

      <section className="home-section">
        <div className="top">
          <div className="topnav" id="myTopnav">
            <a href="#workspace">Workspace</a>
            <a href="#assets">Assets</a>
            <a href="#services">Services</a>
            <a href="#vulnerabilities">Vulnerabilities</a>
            <a className="icon" onClick={myFunction}>
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
        <div className="text w-full">
          <AppRoutes />
        </div>
        {/* <div className="text"><TodoList /> </div> */}
        {/* <div className="text"><SeperateCard /> </div> */}
      </section>
    </div>
  );
}

export default Navbar;
