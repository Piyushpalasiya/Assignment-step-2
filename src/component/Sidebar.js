import React from "react";
import './Dashboard.css';

import {AiFillHome } from "react-icons/ai";
import {DiGoogleAnalytics } from "react-icons/di";
import {AiFillDashboard } from "react-icons/ai";
import {FaUserFriends } from "react-icons/fa";
import {FaImages } from "react-icons/fa";



export const SidebarData= [
  {
      title: "Home",
      icon: <AiFillHome />,
      Link:"/home" 
  },
  {
      title: "Analytics",
      icon: <DiGoogleAnalytics />,
      Link:"/analytics" 
  },
  {
      title: "Dashboard",
      icon: <AiFillDashboard />,
      Link:"/dashboard" 
  },
  {
      title: "Friends",
      icon: <FaUserFriends />,
      Link:"/dashboard" 
  },
  {
      title: "Images",
      icon: <FaImages />,
      Link:"/images" 
  },
]