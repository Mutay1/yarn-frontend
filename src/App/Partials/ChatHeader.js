import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import * as FeatherIcon from 'react-feather'
import {connect} from "react-redux"
import VoiceCallModal from "../Modals/VoiceCallModal"
import VideoCallModal from "../Modals/VideoCallModal"
import {profileAction, selectedProfile} from "../../Store/Actions/profileAction"
import {closeSelectedChat} from "../../Store/Actions/selectedChatAction"
import {mobileProfileAction} from "../../Store/Actions/mobileProfileAction";
import Avatar from "../../utils/Avatar"
import {getFriends, UpdateFriend} from "../../Store/Actions/friendAction"

function ChatHeader(props) {

    const dispatch = useDispatch();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const selectedChatClose = () => {
        document.querySelector('.chat').classList.remove('open');
        dispatch(closeSelectedChat())
    }

    const profileActions = () => {
        dispatch(profileAction(true));
        dispatch(mobileProfileAction(true))
        dispatch(selectedProfile(props.selectedChat))
    };

    return (
        <div className="chat-header">
            <div className="chat-header-user">
                <Avatar source={props.selectedChat.avatarURL}/>
                <div>
                    <h5>{props.selectedChat.firstName + " " + props.selectedChat.lastName}</h5>
                    <small className="text-muted">
                        <i>5 minutes ago</i>
                    </small>
                </div>
            </div>
            <div className="chat-header-action">
                <ul className="list-inline">
                    <li className="list-inline-item d-xl-none d-inline">
                        <button onClick={selectedChatClose} className="btn btn-outline-light text-danger mobile-navigation-button">
                            <FeatherIcon.X/>
                        </button>
                    </li>
                    <li className="list-inline-item">
                        <VoiceCallModal/>
                    </li>
                    <li className="list-inline-item">
                        <VideoCallModal/>
                    </li>
                    <li className="list-inline-item" data-toggle="tooltip" title="Video call">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle
                                tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpen}
                            >
                                <button className="btn btn-outline-light">
                                    <FeatherIcon.MoreHorizontal/>
                                </button>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={profileActions}>Profile</DropdownItem>
                               {props.selectedChat.archived ? 
                                <DropdownItem onClick={() => props.updateFriend(false, props.selectedChat.ID, "archive")}>Unarchive</DropdownItem>
                                : <DropdownItem onClick={() => props.updateFriend(true, props.selectedChat.ID, "archive")}>Archive</DropdownItem>}
                                {props.selectedChat.favorite ? 
                                <DropdownItem onClick={() => props.updateFriend(false, props.selectedChat.ID, "favorite")}>Remove from favorites</DropdownItem>
                                : <DropdownItem onClick={() => props.updateFriend(true, props.selectedChat.ID, "favorite")}>Add to favorites</DropdownItem>}
                                <DropdownItem>Delete</DropdownItem>

                                <DropdownItem divider/>
                                {props.selectedChat.blocked ? 
                                <DropdownItem onClick={() => props.updateFriend(false, props.selectedChat.ID, "block")}>Unblock</DropdownItem>
                                : <DropdownItem onClick={() => props.updateFriend(true, props.selectedChat.ID, "block")}>Block</DropdownItem>}
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    )
}


  const mapDispatchToProps = dispatch => {
    return {
      getFriends: () => dispatch(getFriends()),
      updateFriend: (state, ID, type) => dispatch(UpdateFriend(state, ID, type))
    }
  }
  
  
export default connect(null, mapDispatchToProps)(ChatHeader)
