import React from 'react'
import "./Sidebar.css"
import SidebarGroup from "./SidebarGroup"
import SidebarOptions from "./SidebarOptions"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import PersonIcon from '@material-ui/icons/Person';
import StarIcon from '@material-ui/icons/Star';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar-avatar" src="https://instagram.fkgl1-1.fna.fbcdn.net/v/t51.2885-15/e35/116494836_285757826048920_7737941272604812055_n.jpg?_nc_ht=instagram.fkgl1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=L0bOwrhNTywAX-_sEY-&tp=1&oh=83f3d5014dd7d331c3091c3736d3cb6b&oe=6021F954" alt="Profile"/>
        <div className="sidebar-group">
                <SidebarGroup title="DISCOVER" />
                <SidebarOptions Icon={HomeIcon} className="active" title="Home" />
                <SidebarOptions Icon={SearchIcon} className="" title="Browse" />
                <SidebarOptions Icon={FavoriteIcon} className="" title="For you" />
            </div>
            <div className="sidebar-group">
                <SidebarGroup title="LIBRARY" />
                <SidebarOptions Icon={PlaylistPlayIcon} className="" title="Playlist" />
                <SidebarOptions Icon={PersonIcon} className="" title="Authors" />
                <SidebarOptions Icon={StarIcon} className="" title="Favorites" />
            </div>
            <button className="new-playlist"><PlayCircleFilledIcon/>New Playlist</button>
        </div>
    )
}

export default Sidebar
