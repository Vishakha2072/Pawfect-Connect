import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
//import Register1 from './Register1.js'

function Header(props) {
  const { sections, title } = props;
  const location = useLocation();

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          sx={{ flex: 5 }}
        >
          <Link to="/">
            <img src="images/logo1.png" width="180" height="100"/>
          </Link>
          <div>
          <p style={{color:"#212529",fontFamily:"cursive",fontSize:"20px"}}>Every pet deserves a good care.....</p>
          <span role="img" aria-label="pets">🐶🐱🐰🦊🐻🐼🐨🐯🦁🐮🐷🐸🐵</span>
          </div>
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            to={section.url}
            key={section.url}
            className={location.pathname === section.url ? "activeNavLink" : ""}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
