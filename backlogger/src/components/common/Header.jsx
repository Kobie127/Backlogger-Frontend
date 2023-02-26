import React, {useState} from "react"
import {AppBar, Button, InputAdornment, TextField, Toolbar, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from "prop-types";


const Header = ({isSignedIn}) => {
  const [signedIn, setSignedIn] = useState(isSignedIn);

  return (
  <div className="header-bar">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Backlogger
        </Typography>
        <div className="header-right">
          {!isSignedIn && (
            <>
              <div className="header-button">
                <Button variant="contained">Sign In</Button>
              </div>
              <div className="header-button">
                <Button variant="contained">Sign Up</Button>
              </div>
              <div className="search">
                <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                InputProps={{
                  placeholder: 'Search',
                  endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>
                }}
                />
              </div>
            </>
            )}
        </div>
      </Toolbar>
    </AppBar>
  </div>
  );
}

Header.propTypes = {
  isSignedIn: PropTypes.bool.isRequired
}

export default Header;