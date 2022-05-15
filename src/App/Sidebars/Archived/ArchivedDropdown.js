import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import * as FeatherIcon from 'react-feather'
import {selectedChatAction} from "../../../Store/Actions/selectedChatAction";

const ArchivedDropdown = ({chat}) => {
    const dispatch = useDispatch();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const chatSelectHandle = (chat) => {
        dispatch(selectedChatAction(chat));
        document.querySelector('.chat').classList.add('open');
    };

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle tag="span">
                <FeatherIcon.MoreHorizontal/>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => chatSelectHandle(chat)}>Chat</DropdownItem>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Restore</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>Block</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
};

export default ArchivedDropdown
