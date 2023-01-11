import React, { useState } from "react";
import logo from "./instalogo.jpg";
import messlogo from "./messenger.svg";
import  heart from "./heart.svg";
import chat from "./chat.svg";
import Data from "./HomeData.json"
import {Link} from "react-router-dom"
import CommentScreen from "./Comment-Screen";

const Home = () => {
    console.log(Data);
  return (
    <div className="container insta">
       <div className="row">
        <div className="col-md-6" >
          <img className="mainlogo" src={logo} />
        </div>
        <div className="col-md-5"></div>
        <div className="col-md-1 mt-3">
          <center>
            {" "}
            <a href="/MessageList"><img className="messlogo" src={messlogo} /></a>
          </center>
        </div>
      </div>
        {
        Data.map((val,index)=>{

       return(
        <>
     
      <hr />
      <div className="row mb-3">
        <div className="col-md-1">
          <div className="profile-round">
            <img src={val.Picture} />
          </div>
        </div>
        <div className="col-md-10 posthead ">
          <div className="row">
            <div className="col-md-6">
              
              <Link to={`/${val.UserId}`}><h6>{val.UserId}</h6></Link>
              
            </div>
          </div>
          <div calssName="row">
            <div className="col-md-6">
              <p>{val.ProfileDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <div calssName="row to-row-marg">
        <div className="col-md-12 for-diff-padd">
          <div className="to-banner-im">
            <img src={val.ProfilePic} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1">
          <img className="likeicon ml-3" src={heart} />
        </div>
        <div className="col-md-1">
         <a href="/CommentScreen"> <img className="chaticon" src={chat} /></a>
        </div>
      </div>
      <div className="row postdesc">
        <div calssName="col-md-2">
          <h6> {val.UserName}</h6>
        </div>
        <div className="col-md-10">
          <p> {val.PostDesc}</p>
        </div>
      </div>
      <div calssName="row ">
        <div calssName="col-md-12">
            <h6 className="ml-2">View alll commments</h6>
        </div>
        <div calssName="col-md-12">
        <h6 className="ml-2 the-last-para-style">View alll commments</h6>
        </div>
      </div>
      </>
       )
       })}
    </div>
    
  );
};

export default Home;
