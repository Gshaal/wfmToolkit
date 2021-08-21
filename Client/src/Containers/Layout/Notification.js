import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';

const Notification = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Dropdown direction="left" size="sm" className="notification-icon" isOpen={dropdownOpen} toggle={ () => setDropdownOpen(prevState => !prevState)} >
      <DropdownToggle tag="div"  >
        <NotificationsActiveRoundedIcon style={{color:"#9A7AA0"}} /> 
        <span className='badge badge-warning' id='lblCartCount'> 0 </span>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
        <div className="text-center">Your have no new notifications</div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Notification;