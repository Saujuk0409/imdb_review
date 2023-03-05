import React from "react";
import axios from "axios";


export const createUser = async (data) => {
    try {
      const msg = await axios
        .post(`${process.env.REACT_APP_IP}/imdbapi/register`, data)
        .catch((error) => {
          if (error.response) {
            return { status: error.response.data };
          }
        });
      console.log(msg);
      if (msg.status === 200) {
        localStorage.setItem("token", msg.data.token);
        return true;
      } else if (msg.status === 400) {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  export const getProfile = async () => {
    const token = localStorage.getItem("token");
    
    const userData = await axios
      .get(`${process.env.REACT_APP_IP}/imdbapi/profile`, {
        headers: {
          'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
        }
      })
      .catch((error) => {
        if (error.response) {
          return { status: false , errorCode: error.response.status };
        }
      });
    if (!userData.status) {
      return userData;
    }
    return { ...userData, status: true };
    // return false;
  };
  
export const emailOtp = async (data) => {
    console.log(data);
    const msg = await axios.post(`${process.env.REACT_APP_IP}/imdbapi/verify`, data);
    console.log(msg);
  };

  export const checkEmail = async (data) => {
    console.log(process.env.REACT_APP_IP);
    const msg = await axios.post(`${process.env.REACT_APP_IP}/imdbapi/verify`, data);
    console.log(msg);
    return !msg.data.exists;
  };