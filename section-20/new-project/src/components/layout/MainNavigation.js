import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav>
        <header>Great Quotes</header>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/all-quotes">
            All Quotes
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="add-quote">
            Add a Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
