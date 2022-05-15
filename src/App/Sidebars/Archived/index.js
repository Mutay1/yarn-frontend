import React from 'react'
import { useDispatch } from "react-redux";
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import ArchivedDropdown from "./ArchivedDropdown"
import {selectedChatAction} from "../../../Store/Actions/selectedChatAction";
import * as FeatherIcon from "react-feather"
import {connect} from "react-redux"
import Avatar from "../../../utils/Avatar"
import Empty from "../../../utils/Empty"

function Index(props) {
    const dispatch = useDispatch()

    const chatSelectHandle = (chat) => {
        dispatch(selectedChatAction(chat));
        document.querySelector('.chat').classList.add('open');
    };

    const mobileMenuBtn = () => document.body.classList.toggle('navigation-open');
    const formatTime = (date) =>{
        return new Date(date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    }
    
    const ChatListView = ({chat}) => {
        return <li className={"list-group-item" } onClick={() => chatSelectHandle(chat)}>
                <Avatar source={chat.avatarURL}/>
            <div className="users-list-body">
                <div>
                    <h5 className={chat.unreadMessages ? 'text-primary' : ''}>{chat.firstName + " " + chat.lastName}</h5>
                    {chat.messages[chat.messages.length-1].content}
                </div>
                <div className="users-list-action">
                    {chat.unreadMessages ? <div className="new-message-count">{chat.unreadMessages}</div> : ''}
                    <small className={chat.unreadMessages ? 'text-primary' : 'text-muted'}>{formatTime(chat.messages[chat.messages.length - 1].createdAt)}</small>
                    <div className="action-toggle">
                    </div>
                </div>
            </div>
        </li>
    };
    let friends = !props.friends ? [] : props.friends
    friends = friends.filter(chat => chat.messages && chat.archived).sort((a,b) =>{
        const date1 = new Date(a.messages[a.messages.length - 1].createdAt)
        const date2 = new Date(b.messages[b.messages.length - 1].createdAt)
        return date2 - date1
    })
    const chatList = friends.map((chat, i) => <ChatListView chat={chat} key={i}/>)

    return (
        <div className="sidebar active">
            <header>
                <div className="d-flex align-items-center">
                    <button onClick={mobileMenuBtn} className="btn btn-outline-light mobile-navigation-button mr-3 d-xl-none d-inline">
                        <FeatherIcon.Menu/>
                    </button>
                    <span className="sidebar-title">Archived</span>
                </div>
            </header>
            <form>
                <input type="text" className="form-control" placeholder="Search chats"/>
            </form>
            <div className="sidebar-body">
                <PerfectScrollbar>
                {chatList.length > 0 ? <ul className="list-group list-group-flush">
                        {chatList}
                    </ul> : <Empty message={
                        <span>No chat found in archive.</span>
                    }/>}
                </PerfectScrollbar>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      friends : state.friends.friends
    }
  }
  
export default connect(mapStateToProps)(Index)
