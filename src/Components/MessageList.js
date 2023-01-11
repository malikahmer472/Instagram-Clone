import React from "react"
import icon from "./chevron-left.svg";

function MessageList()
{
const Message=[
    {
        "MessageID" :    "1",
        "Send": "Yeah sure i will Send you till tonight",
        "SenderPic" : "https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg",
        "SenderName" : "Usama Malik",
        "Time"   :  "20m"
    },
    {
        "MessageID" :    "2",
        "Send": "No Problem",
        "SenderPic" : "https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg",
        "SenderName" : "Rehan Akbar",
        "Time"   :  "30m"
    },
    {
        "MessageID" :    "3",
        "Send": "Ok. Do you want Something?",
        "SenderPic" : "https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg",
        "SenderName" : "Salman Bhai",
        "Time"   :  "3h"
    },
    {
        "MessageID" :    "4",
        "Send": "What?",
        "SenderPic" : "https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg",
        "SenderName" : "Azeem Bhai",
        "Time"   :  "4d"
    },
    {
        "MessageID" :    "5",
        "Send": "Please submit your documents",
        "SenderPic" : "https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg",
        "SenderName" : "Asad Bhai",
        "Time"   :  "1w"
    },
    {
        "MessageID" :    "6",
        "Send": "Where is the related file?",
        "SenderPic" : "https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg",
        "SenderName" : "Ahmad Hassan",
        "Time"   :  "4w"
    },
    {
        "MessageID" :    "7",
        "Send": "Send me your Github account link",
        "SenderPic" : "https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg",
        "SenderName" : "Umer Surkhail",
        "Time"   :  "9w"
    }]
    

  return (
    <div className="container messages">
        < div id='wrapper1'>
            <div className="row mt-4">
                <div className="col-md-2">
                <a href="/"> <img src={icon} /></a>

                </div>
                <div className="col-md-10">
                  <div className="Titlename"> <p> Ahmer Malik </p></div>
                </div>
              </div>
            <div className="row">
            <input className="searchbar" type="search" placeholder='    Search'  />
            </div>
        <hr/>
            {
            Message.map((inbox, index)=>{
                return(
                    <div>
                    <div className="row" key={index}>
                   <div className="col-md-1 senderpropic" >
                    <img src={inbox.SenderPic}/>
                   </div>
                   <div className="col-md-10">
                    <div className="row">
                        <p>{inbox.SenderName}</p>
                    </div>
                    <div className="row">
                        <div className="col-md-11"> {inbox.Send}</div>
                        <div className="col-md-1"><p>{inbox.Time}</p></div>
                    </div>
                    
                    </div>
                    
                </div>
                <hr/>
                </div>
                )
            })
            
            }
        </div>
    </div>
  )
}

export default MessageList
