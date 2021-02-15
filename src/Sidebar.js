import React from 'react';
import { useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
import { Avatar } from '@material-ui/core';
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    
    return (
        <div className="sidebar">
           <div className="sidebar__top">
               <img src="https://images.unsplash.com/photo-1611624530634-9c96190a4b6e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600"
               alt=""
               />
               <Avatar src={user.photoUrl} className="sidebar__avatar">
                   {user.email[0]}
               </Avatar>
               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>
           </div>

           <div className="sidebar__stats">
              <div className="sidebar__stat">
              <p>Who viewed you</p>
              <p className="sidebar__statNumber">2,000</p>
              </div>
              <div className="sidebar__stat">
                  <p>Views on post</p>
                  <p className="sidebar__statNumber">3,000</p>
              </div>
          </div>
          <div className="sidebar__bottom">
              <p>Recent</p>
              {recentItem('reactjs')}
              {recentItem('programming')}
              {recentItem('softwareengineering')}
              {recentItem('design')}
              {recentItem('developer')}
          </div>
        </div>

       
    )
}

export default Sidebar
