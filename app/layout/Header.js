
import AppBar from '@mui/material/AppBar';
import Settings from '@mui/icons-material/Settings';

const Header = () => (
  <AppBar position="static">
    <div className='branding'>
      <div className='site-name'>
        Cloud Competency
      </div>
      <div className='secondary-links'>
        <div className='secondary-item'><Settings /></div>
      </div>
    </div>
  </AppBar>
);

export default Header;
