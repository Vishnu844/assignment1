import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  let [contactsArr, setcontactsArr] = useState();
  let navigate = useNavigate();

  let getContacts = async () => {
    let reqOptions = {
      method: "GET",
    };
    let rawData = await fetch(
      "https://randomuser.me/api/?inc=gender,name,picture&results=500",
      reqOptions
    );

    let convertedData = await rawData.json();

    setcontactsArr(convertedData.results);
  };

  useEffect(() => {
    getContacts();
  },[])

  return (
    <div>
      <div className="navBar">
          <h1>Contacts</h1>
            <button onClick={() => {
              navigate("/");
            }}>logout</button>
          </div>
      <div className="contacts">
        {contactsArr.map((contact) => {
        return(
          <div className="productBox">
            <h4>{contact.name.first} {contact.name.last}</h4>
            <span>{contact.gender}</span>
            <img src={contact.picture.medium} alt="pic"></img>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Home;
