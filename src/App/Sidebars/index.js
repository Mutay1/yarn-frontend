import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import ChatsIndex from "./Chats"
import FriendsIndex from "./Friends"
import FavoritesIndex from "./Favorites"
import ArchivedIndex from "./Archived"
import RequestsIndex from "./Requests"

function Index() {

    const {selectedSidebar, mobileSidebar} = useSelector(state => state);

    return (
        <div className={`sidebar-group ${mobileSidebar ? "mobile-open" : ""}`}>
            {
                (() => {
                    if (selectedSidebar === 'Chats') {
                        return <ChatsIndex/>
                    } else if (selectedSidebar === 'Friends') {
                        return <FriendsIndex/>
                    } else if (selectedSidebar === 'Favorites') {
                        return <FavoritesIndex/>
                    } else if (selectedSidebar === 'Archived') {
                        return <ArchivedIndex/>
                    } else if (selectedSidebar === 'Requests') {
                        return <RequestsIndex/>
                    }
                })()
            }
        </div>
    )
}

export default Index
