// ==UserScript==
// @name         Cafe Bazaar Downloader
// @namespace    http://your-namespace.com
// @homepage     https://github.com/Rainman69/CafeBazaar-Downloader
// @version      1.0
// @description  Script for extracting app information and downloading from Cafe Bazaar
// @author       https://t.me/TheErfon
// @match        https://cafebazaar.ir/*
// @grant        none
// @icon         data:image/jpeg;base64,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
// @license      CC BY-NC-ND 4.0
// @licenseURL   https://github.com/Rainman69/CafeBazaar-Downloader/blob/main/LICENSE
// ==/UserScript==

(function() {
  'use strict';

  function extractPackageName(url) {
    const regex = /https:\/\/cafebazaar\.ir\/app\/(?:\?id=)?([\w.-]+)/;
    const match = url.match(regex);
    if (match) {
      const packageName = match[1];
      return packageName;
    } else {
      console.error("Invalid URL format: " + url);
      throw new Error("Invalid URL format");
    }
  }

  function callDownloadApi(packageName, sdk, retry = true) {
    const payload = {
      "properties": {
        "language": 2,
        "clientVersionCode": 1100301,
        "androidClientInfo": {
          "sdkVersion": sdk,
          "cpu": "x86,armeabi-v7a,armeabi"
        },
        "clientVersion": "11.3.1",
        "isKidsEnabled": false
      },
      "singleRequest": {
        "appDownloadInfoRequest": {
          "downloadStatus": 1,
          "packageName": packageName,
          "referrers": []
        }
      }
    };

    return fetch("https://api.cafebazaar.ir/rest-v1/process/AppDownloadInfoRequest", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error("API request failed for package: " + packageName);
        if (retry && sdk !== 25) {
          console.log("Retrying with SDK version 25 for package: " + packageName);
          return callDownloadApi(packageName, 25, false);
        } else {
          console.error("Abnormal API response for package: " + packageName);
          throw new Error("Abnormal API response. Check your request and try again.");
        }
      }
    })
    .then(data => handleResponse(data));
  }

  function handleResponse(data) {
    const appInfo = data.singleReply.appDownloadInfoReply;
    if (!appInfo) {
      console.error("Response does not include expected data");
      throw new Error("Response does not include expected data");
    }

    const downloadUrls = appInfo.fullPathUrls || [];
    if (!downloadUrls.length) {
      console.error("Download URLs are empty");
      throw new Error("Download URLs are empty");
    }

    const fileSize = parseInt(appInfo.packageSize, 10) / 1024 / 1024;
    const versionCode = appInfo.versionCode || 0;

    return {
      downloadLink: downloadUrls[downloadUrls.length - 1],
      fileSize,
      versionCode
    };
  }

  function main() {
    try {
      const currentUrl = window.location.href;
      console.log("Current URL: " + currentUrl);

      const packageName = extractPackageName(currentUrl);
      callDownloadApi(packageName, 33)
        .then(downloadInfo => {
          const { downloadLink, fileSize, versionCode } = downloadInfo;

          console.log("App information retrieved successfully for package: " + packageName);
          console.log("Download link: " + downloadLink);
          console.log("File size: " + fileSize.toFixed(2) + " MB");
          console.log("Version: " + versionCode);

          // Perform the download automatically
          window.location.href = downloadLink;
        })
        .catch(error => {
          console.error("An error occurred: " + error.message);
        });
    } catch (error) {
      console.error("An error occurred: " + error.message);
    }
  }

  main();
})();
