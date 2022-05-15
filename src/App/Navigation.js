import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector, connect} from 'react-redux'
import Logo from "../Icons/logo"
import {
    Tooltip,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import {useNavigate} from "react-router-dom"
import * as FeatherIcon from 'react-feather'
import {sidebarAction} from '../Store/Actions/sidebarAction'
import EditProfileModal from './Modals/EditProfileModal'
import {profileAction, selectedProfile} from "../Store/Actions/profileAction"
import SettingsModal from "./Modals/SettingsModal"
import {mobileSidebarAction} from "../Store/Actions/mobileSidebarAction"
import Avatar from "../utils/Avatar"
import {mobileProfileAction} from "../Store/Actions/mobileProfileAction"
import * as authActions from "../Store/Actions/authAction"


function Navigation(props) {

    const {selectedSidebar, auth} = useSelector(state => state);

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const [userMenuTooltipOpen, setUserMenuTooltipOpen] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [darkSwitcherTooltipOpen, setDarkSwitcherTooltipOpen] = useState(false);

    const [editModalOpen, setEditModalOpen] = useState(false);

    const userMenuToggle = () => {
        return !dropdownOpen && setUserMenuTooltipOpen(!userMenuTooltipOpen);
    };

    const toggle = () => setDropdownOpen(prevState => {
        setUserMenuTooltipOpen(false);
        return !prevState;
    });

    const darkSwitcherTooltipToggle = () => setDarkSwitcherTooltipOpen(!darkSwitcherTooltipOpen);

    const darkSwitcherToggle = (e) => {
        e.preventDefault();
        document.body.classList.toggle('dark')
    };

    useEffect(() => {
        if (!auth.token) {
            navigate("/sign-in")
        }
        let getDemoParam = (window.location.search).replace('?demo=', '');
        if (getDemoParam === 'edit-profile') {
            setEditModalOpen(true)
        }else if (getDemoParam === 'settings') {
            setSettingsModalOpen(true)
        }
    }, [auth.token]);

    const editModalToggle = () => setEditModalOpen(!editModalOpen);

    const [settingsModalOpen, setSettingsModalOpen] = useState(false);

    const settingsModalToggle = () => setSettingsModalOpen(!settingsModalOpen);

    const profileActions = () => {
        dispatch(profileAction(true));
        dispatch(mobileProfileAction(true))
        dispatch(selectedProfile({
            ...props.profile,
            ID: props.ID
        }))
    };

    const navigationItems = [
        {
            name: 'Chats',
            icon: <FeatherIcon.MessageCircle/>,
            badge: 'warning',
        },
        {
            name: 'Friends',
            icon: <FeatherIcon.User/>,
            badge: 'danger'
        },
        {
            name: 'Favorites',
            icon: <FeatherIcon.Star/>,
        },
        {
            name: 'Archived',
            icon: <FeatherIcon.Archive/>,
        },
        {
            name: 'Requests',
            icon: <FeatherIcon.UserPlus/>,
        }
    ];

    const NavigationItemView = (props) => {

        const {item, tooltipName} = props;

        const [tooltipOpen, setTooltipOpen] = useState(false);

        const toggle = () => setTooltipOpen(!tooltipOpen);

        const linkDispatch = (e, name) => {
            e.preventDefault();
            dispatch(sidebarAction(name));
            dispatch(mobileSidebarAction(true))
            document.body.classList.toggle('navigation-open')
        };

        return (
            <li>
                <a onClick={e => linkDispatch(e, item.name)} href={item.name}
                   className={`sidebar ${selectedSidebar === item.name ? 'active' : ''}`} id={tooltipName}>
                    {item.badge && <span className={"badge badge-" + item.badge}>&nbsp;</span>}
                    {item.icon}
                </a>
                <Tooltip
                    placement="right"
                    isOpen={tooltipOpen}
                    target={tooltipName}
                    toggle={toggle}>
                    {item.name}
                </Tooltip>
            </li>
        )
    };

    return (
        <nav className="navigation">
            <EditProfileModal modal={editModalOpen} toggle={editModalToggle}/>
            <SettingsModal modal={settingsModalOpen} toggle={settingsModalToggle}/>
            <div className="nav-group">
                <ul>
                    <li className="logo">
                        <a href="#/">
                            <Logo/>
                        </a>
                    </li>
                    {
                        navigationItems.map((item, i) => <NavigationItemView key={i} item={item}
                                                                             tooltipName={"Tooltip-" + i}/>)
                    }
                    <li className="scissors">
                        <a href="#/" onClick={(e) => darkSwitcherToggle(e)} className="dark-light-switcher"
                           id="dark-switcher">
                            <FeatherIcon.Moon/>
                        </a>
                        <Tooltip
                            placement="right"
                            isOpen={darkSwitcherTooltipOpen}
                            target="dark-switcher"
                            toggle={darkSwitcherTooltipToggle}>
                            Dark mode
                        </Tooltip>
                    </li>
                    <li id="user-menu" className="text-center">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle
                                tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpen}
                            >
                                <Avatar source={props.avatar}/>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={editModalToggle}>Edit profile</DropdownItem>
                                <DropdownItem onClick={profileActions}>Profile</DropdownItem>
                                <DropdownItem onClick={settingsModalToggle}>Settings</DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem onClick={() =>{ 
                                    dispatch(authActions.logout())
                                    navigate("/sign-in")
                                    document.body.classList.toggle('navigation-open')
                                    }}>Logout</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Tooltip
                            placement="right"
                            isOpen={userMenuTooltipOpen}
                            target="user-menu"
                            toggle={userMenuToggle}>
                            User menu
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
      avatar : state?.auth?.profile?.avatar,
      profile: state.auth?.profile,
      ID: state.auth?.userID
    }
  }
  
  
  
  export default connect(mapStateToProps)(Navigation)
