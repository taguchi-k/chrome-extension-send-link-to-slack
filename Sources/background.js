"use strict";

chrome.runtime.onInstalled.addListener(() => {

    chrome.contextMenus.create({
        id: "sendLinkToSlack",
        title: "リンクをSlackに送る🚀",
        contexts: ["all"]
    });
});

chrome.contextMenus.onClicked.addListener(info => {

    chrome.storage.sync.get(["token", "channelID"], items => {

        const token = items.token;
        const channelID = items.channelID;

        if (!token || !channelID) {
            alert("今のままだとリンクをSlackに送れません！\nSlackのTokenとチャンネルIDを両方とも「拡張機能のオプション」で登録してからご利用ください。");
            return;
        }

        const baseUrl =  `https://slack.com/api/chat.postMessage?token=${token}&channel=${channelID}&text=`;
        const url = baseUrl + info.pageUrl;

        fetch(url)
            .catch(error => {
                alert(error.name + ": " + error.message);
            });
    });
});
