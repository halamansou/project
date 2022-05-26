
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from "react-router-dom";
const Navbar=()=>{
  return(
  <div>
      <AppBar position="static">
<Toolbar variant="dense">
  <IconButton
    edge="start"
    color="inherit"
    aria-label="menu"
    sx={{ mr: 2 }}>
  
    <MenuIcon />
  </IconButton>
  <Typography variant="h6" color="inherit" component="div">
  𝑺𝑬𝑨𝑭𝑶𝑶𝑫
  </Typography>

  <Typography variant="h6" color="inherit" component="div">
  <Link to="/home"><span className="link_style">Home</span></Link>
  </Typography>

  <Typography variant="h6" color="inherit" component="div">
  <Link to="/posts"><span className="link_style">Posts</span></Link>
  </Typography>
 
  <Typography variant="h6" color="inherit" component="div">
  <Link to="/login"><span className="link_style">Login <AccountBoxIcon/></span></Link>
  </Typography>
</Toolbar>
</AppBar>
  </div>
  );

};
export default Navbar;