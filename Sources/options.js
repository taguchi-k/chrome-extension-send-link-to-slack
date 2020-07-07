"use strict";

document.getElementById("formButton").onclick = () => {

    const token = document.getElementById("token");
    const channelID = document.getElementById("channelID");

    console.log(`token: ${token.value}, channelID: ${channelID.value}`);
    
    chrome.storage.sync.set({
        "token": token.value,
        "channelID": channelID.value
    });
  }
  