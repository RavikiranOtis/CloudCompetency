import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

const SidebarMenu = () =>
(
    <List className='main-menu'>
        <ListItem button component={Link} to="/">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/services">
            <ListItemIcon><BuildIcon /></ListItemIcon>
            <ListItemText primary="Services" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/contact">
            <ListItemIcon><ContactMailIcon /></ListItemIcon>
            <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
    </List>
)

export default SidebarMenu;