import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Data from "./Comments.json";
import icon from "./chevron-left.svg";


const CommentScreen = () => {
  const Commentdata = [
    {
      Send: "Great pic",
      SenderPic:
        "https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg",
      SenderName: "Usama Malik",
      Time: "20m",
    },
    {
      Send: "Always supporting you",
      SenderPic:
        "https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg",
      SenderName: "Rehan Akbar",
      Time: "30m",
    },
    {
      Send: "I wnat to get a picture with you",
      SenderPic:
        "https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg",
      SenderName: "Salman Hussain",
      Time: "30m",
    },
    {
      Send: "Promote your products by using our services",
      SenderPic:
        "https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg",
      SenderName: "Umer Surkhail",
      Time: "9w",
    },
  ];
  const [cmnt, setCmnt] = useState(Data);

  const [addcmnt, setAddcmnt] = useState("");
  let { postID } = useParams();

  useEffect(() => {
    let cmnData = cmnt.filter((PID) => PID.postID === postID);
    setCmnt(cmnData);
  }, []);

  let AddComment = (event) => {
    setAddcmnt(event.target.value);
    if (event.key === "Enter") {
      pushComment();
      setAddcmnt("");
    }
  };

  let pushComment = () => {
    let cmnData = cmnt.filter((PID) => PID.postID === postID);
    let data = {
      postID: postID,
      userID: "Ahmer Malik ",
      cmnt: addcmnt,
      ProfilePic:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      cmntTime: "30m",
    };
    cmnt.push(data);
    setCmnt(cmnt);
  };

  return (
    <div className="container cmntsec">
      <div id="wrapper">
        <div className="row">
          <div className="col-md-2"> <a href="/"> <img src={icon} /></a></div>
        <div className="col-md-10 cmntID">
          {" "}
          <h4>Comments</h4>{" "}
        </div>
        </div>
        <hr />
        {Commentdata.map((inbox, index) => {
          return (
            <div>
              <div className="row" key={index}>
                <div className="col-md-1 senderpropic">
                  <img src={inbox.SenderPic} />
                </div>
                <div className="col-md-10">
                  <div className="row">
                    <p>{inbox.SenderName}</p>
                  </div>
                  <div className="row">
                    <div className="col-md-11"> {inbox.Send}</div>
                    <div className="col-md-1">
                      <p>{inbox.Time}</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
        {cmnt.map((Postcmnt, index) => {
          return (
            <div id="cmntSec">
                <div className="row" key={index}>
              <div className="col-md-1 profilePic">
                <img src={Postcmnt.ProfilePic} alt="messenger" />
              </div>
              <div className="col-md-10 cmnts">
                <div className="row"><p>{Postcmnt.userID}</p></div>
                <div className="row">
                    <div className="col-md-11">
                    {Postcmnt.cmnt}
                    </div>
                    <div className="col-md-1">{Postcmnt.cmntTime}</div>
                    </div>
              </div>
             
            </div>
            <hr />
            </div>
          );
        })}
        <div id="addComment">
            <div className="row">
          <input
            className="searchbar"
            type="text"
            placeholder="Write Your Comment"
            value={addcmnt}
            onChange={AddComment}
            onKeyDown={AddComment}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentScreen;
