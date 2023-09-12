(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/FirstApp/i18n/i18n.properties":
/*!*********************************************************!*\
  !*** ./build.definitions/FirstApp/i18n/i18n.properties ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\nPRODUCT_TYPE=PRODUCT_TYPE\nPRODUCT_TYPES=PRODUCT_TYPES\nPRODUCT_PRODUCT_ID=PRODUCT_PRODUCT_ID\nPRODUCT_NAME=PRODUCT_NAME\nPRODUCT_CATEGORY=PRODUCT_CATEGORY\nPRODUCT_SHORT_DESCRIPTION=PRODUCT_SHORT_DESCRIPTION\nPRODUCT_PRICE=PRODUCT_PRICE\nPRODUCT_HEIGHT=PRODUCT_HEIGHT\nPRODUCT_DEPTH=PRODUCT_DEPTH\nPRODUCT_WIDTH=PRODUCT_WIDTH\nPRODUCT_UNIT=PRODUCT_UNIT\nPRODUCT_WEIGHT=PRODUCT_WEIGHT\nPRODUCT_WEIGHT_UNIT=PRODUCT_WEIGHT_UNIT\nPRODUCT_QUANTITY_UNIT=PRODUCT_QUANTITY_UNIT\nPRODUCT_CATEGORY_NAME=PRODUCT_CATEGORY_NAME\nPRODUCT_CURENCY_CODE=PRODUCT_CURENCY_CODE\nPRODUCT_LONG_DESCRIPTION=PRODUCT_LONG_DESCRIPTION\nPRODUCT_PICTURE_URL=PRODUCT_PICTURE_URL\nPRODUCT_SUPPLIER_ID=PRODUCT_SUPPLIER_ID\nPRODUCT_UPDATE_TIMESTAMP=PRODUCT_UPDATE_TIMESTAMP"

/***/ }),

/***/ "./build.definitions/FirstApp/Rules/AppUpdateFailure.js":
/*!**************************************************************!*\
  !*** ./build.definitions/FirstApp/Rules/AppUpdateFailure.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/FirstApp/Actions/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/FirstApp/Rules/AppUpdateSuccess.js":
/*!**************************************************************!*\
  !*** ./build.definitions/FirstApp/Rules/AppUpdateSuccess.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/FirstApp/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/FirstApp/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/FirstApp/Rules/Customers_DeleteConfirmation.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/FirstApp/Rules/Customers_DeleteConfirmation.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customers_DeleteConfirmation)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function Customers_DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/FirstApp/Actions/Customers_DeleteConfirmation.action').then(result => {
    debugger;
    if (result.data) {
      return clientAPI.executeAction('/FirstApp/Actions/Customers_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/FirstApp/Rules/Customers_OrderCount.js":
/*!******************************************************************!*\
  !*** ./build.definitions/FirstApp/Rules/Customers_OrderCount.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerOrderCount)
/* harmony export */ });
// /**
// * Describe this function...
// * @param {IClientAPI} clientAPI
// */
function CustomerOrderCount(clientAPI) {
  //The following currentCustomer will retrieve the current customer record
  const currentCustomer = clientAPI.getPageProxy().binding.CustomerId;
  //The following expression will retrieve the total count of the orders for a given customer
  return clientAPI.count('/FirstApp/Services/SampleServiceV2.service', 'SalesOrderHeaders', `$filter=CustomerId eq '${currentCustomer}'`).then(count => {
    return count;
  });
}

/***/ }),

/***/ "./build.definitions/FirstApp/Rules/EmailValidation.js":
/*!*************************************************************!*\
  !*** ./build.definitions/FirstApp/Rules/EmailValidation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmailValidation)
/* harmony export */ });
// /**
// * Describe this function...
// * @param {IClientAPI} clientAPI
// */
function EmailValidation(clientAPI) {
  //The following evaluateTargetPath will retrieve the current value of the email control
  if (clientAPI.evaluateTargetPath('#Control:FCEmail/#Value').indexOf('@') === -1) {
    //If email value does not contain @ display a validation failure message to the end-user
    clientAPI.executeAction('/FirstApp/Actions/ValidationFailure.action');
  } else {
    //If @ is present in the email value, return true to indicate validation is successful
    return true;
  }
}

/***/ }),

/***/ "./build.definitions/FirstApp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
  context.count('/FirstApp/Services/FirstApp.service', 'ErrorArchive', '').then(errorCount => {
    if (errorCount > 0) {
      return context.getPageProxy().executeAction('/FirstApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function () {
        return Promise.reject(false);
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/FirstApp/Rules/OnWillUpdate.js":
/*!**********************************************************!*\
  !*** ./build.definitions/FirstApp/Rules/OnWillUpdate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/FirstApp/Actions/OnWillUpdate.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/FirstApp/Actions/Service/CloseOffline.action').then(success => Promise.resolve(success), failure => Promise.reject('Offline Odata Close Failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/FirstApp/Rules/OpenSAPMobileCards.js":
/*!****************************************************************!*\
  !*** ./build.definitions/FirstApp/Rules/OpenSAPMobileCards.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenSAPMobileCards)
/* harmony export */ });
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
function OpenSAPMobileCards(clientAPI) {
  // Get the Nativescript Utils Module
  const utilsModule = clientAPI.nativescript.utilsModule;
  // Get the Nativescript Platform Module
  const platformModule = clientAPI.nativescript.platformModule;
  return clientAPI.executeAction('/FirstApp/Actions/Confirmation.action').then(result => {
    if (result.data) {
      //This will open SAP Mobile Cards app
      if (platformModule.isIOS) {
        return utilsModule.openUrl("com.sap.content2go://");
      } else if (platformModule.isAndroid) {
        return utilsModule.openUrl("https://mobileservices.cloud.sap/mobilecards");
      }
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/FirstApp/Rules/OpenSAPcom.js":
/*!********************************************************!*\
  !*** ./build.definitions/FirstApp/Rules/OpenSAPcom.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenSAPcom)
/* harmony export */ });
// /**
//  * Describe this function...
// * @param {IClientAPI} clientAPI
// */
function OpenSAPcom(clientAPI) {
  // Get the Nativescript Utils Module
  const utilsModule = clientAPI.nativescript.utilsModule;
  return clientAPI.executeAction('/FirstApp/Actions/Confirmation.action').then(result => {
    if (result.data) {
      //This will open SAP.com website
      return utilsModule.openUrl("https://www.sap.com");
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/FirstApp/Rules/Products/Products_DeleteConfirmation.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Rules/Products/Products_DeleteConfirmation.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/FirstApp/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/FirstApp/Actions/Products/Products_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/FirstApp/Rules/ResetAppSettingsAndLogout.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/FirstApp/Rules/ResetAppSettingsAndLogout.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
function ResetAppSettingsAndLogout(context) {
  let logger = context.getLogger();
  let platform = context.nativescript.platformModule;
  let appSettings = context.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = context.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return context.getPageProxy().executeAction('/FirstApp/Actions/Logout.action');
  }
}

/***/ }),

/***/ "./build.definitions/FirstApp/Styles/Styles.css":
/*!******************************************************!*\
  !*** ./build.definitions/FirstApp/Styles/Styles.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ui5-mdk-bar.actionbar {
  color: white;
  /* Define a cor do texto como branco */
  background-color: #EB10D4;
  text-align: center;
  align-items: center;
}
ui5-mdk-overflow-toolbar.toolbar {
  color: white;
  background-color: #EB10D4;
  /* Android */
  bartintcolor: #EB10D4;
  /* iOS */
}
body {
  background-color: #EB95DF;
  /* Azul usando o nome da cor */
}
#SectionButton0 {
  background-color: black;
}
#LogoutToolbarItem {
  color: #EB95DF;
}
#UploadToolbarItem {
  color: white;
}
.MyCustomerButton {
  color: black;
  background-color: #EB95DF;
}
.ObjectTableTitle {
  color: white;
}
/* Object Header - BodyText */
.span.ohBodyText {
  color: white;
}
/* Object Header - Description */
.span.ohDescription {
  color: white;
}
/* Object Header - Footnote */
.span.ohFootnote {
  color: green;
}
/* Object Header - Headline */
.objectHeaderHeadline {
  color: #ff00ff;
}
/* Object Header - Background */
.objectHeaderBackground {
  background-color: #DC143C;
}
/* Object Header - StatusText */
.objectHeaderStatus {
  color: red;
  font-style: italic;
  font-size: 18;
}
/* Object Header - Subhead */
.span.ohSubhead {
  color: yellow;
}
/* Object Header - SubstatusText */
.objectHeaderSubStatus {
  color: white;
  font-style: italic;
  font-size: 18;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/FirstApp/Styles/Styles.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,sCAAsC;EACtC,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,QAAQ;AACV;AACA;EACE,yBAAyB;EACzB,8BAA8B;AAChC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,YAAY;AACd;AACA,6BAA6B;AAC7B;EACE,YAAY;AACd;AACA,gCAAgC;AAChC;EACE,YAAY;AACd;AACA,6BAA6B;AAC7B;EACE,YAAY;AACd;AACA,6BAA6B;AAC7B;EACE,cAAc;AAChB;AACA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;AACA,+BAA+B;AAC/B;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;AACf;AACA,4BAA4B;AAC5B;EACE,aAAa;AACf;AACA,kCAAkC;AAClC;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf","sourcesContent":["ui5-mdk-bar.actionbar {\n  color: white;\n  /* Define a cor do texto como branco */\n  background-color: #EB10D4;\n  text-align: center;\n  align-items: center;\n}\nui5-mdk-overflow-toolbar.toolbar {\n  color: white;\n  background-color: #EB10D4;\n  /* Android */\n  bartintcolor: #EB10D4;\n  /* iOS */\n}\nbody {\n  background-color: #EB95DF;\n  /* Azul usando o nome da cor */\n}\n#SectionButton0 {\n  background-color: black;\n}\n#LogoutToolbarItem {\n  color: #EB95DF;\n}\n#UploadToolbarItem {\n  color: white;\n}\n.MyCustomerButton {\n  color: black;\n  background-color: #EB95DF;\n}\n.ObjectTableTitle {\n  color: white;\n}\n/* Object Header - BodyText */\n.span.ohBodyText {\n  color: white;\n}\n/* Object Header - Description */\n.span.ohDescription {\n  color: white;\n}\n/* Object Header - Footnote */\n.span.ohFootnote {\n  color: green;\n}\n/* Object Header - Headline */\n.objectHeaderHeadline {\n  color: #ff00ff;\n}\n/* Object Header - Background */\n.objectHeaderBackground {\n  background-color: #DC143C;\n}\n/* Object Header - StatusText */\n.objectHeaderStatus {\n  color: red;\n  font-style: italic;\n  font-size: 18;\n}\n/* Object Header - Subhead */\n.span.ohSubhead {\n  color: yellow;\n}\n/* Object Header - SubstatusText */\n.objectHeaderSubStatus {\n  color: white;\n  font-style: italic;\n  font-size: 18;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/FirstApp/Styles/Styles.less":
/*!*******************************************************!*\
  !*** ./build.definitions/FirstApp/Styles/Styles.less ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;


//// This style applies to all the ActionBars in the application
ActionBar {
    color: white; /* Define a cor do texto como branco */
    background-color: #EB10D4;
    text-align: center;
    align-items: center;
}

//// This style applies to all the ToolBars in the application
ToolBar {
    color: white;
    background-color: #EB10D4; /* Android */
    bartintcolor: #EB10D4;     /* iOS */
}

body {
    background-color: #EB95DF; /* Azul usando o nome da cor */
}

#SectionButton0 {
    background-color: black;
}
//// LogoutToolbarItem is tool bar item for Logout in Main.page
#LogoutToolbarItem  {
    color: #EB95DF;
}

//// UploadToolbarItem is tool bar item for Sync in Main.page
#UploadToolbarItem  {
    color: white;
}

//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function
//// below snippet is to style Customers button on Main.page
.MyCustomerButton{
  color: black;
  background-color: #EB95DF;
}

//// below snippet is to style Title property of an Object Table control in Customers_List.page
.ObjectTableTitle {
 color: white;
}


//// below snippet is to style Object Header control in Customers_Detail.page

/* Object Header - BodyText */
.objectHeaderBodyText {
  color: white;
}

/* Object Header - Description */
.objectHeaderDescription {
  color: white;
}

/* Object Header - Footnote */
.objectHeaderFootNote {
  color: green;
}

/* Object Header - Headline */
.objectHeaderHeadline {
  color: #ff00ff;
}

/* Object Header - Background */
.objectHeaderBackground {
background-color: #DC143C;
}

/* Object Header - StatusText */
.objectHeaderStatus {
  color: red;
  font-style: italic;
  font-size: 18;
}

/* Object Header - Subhead */
.objectHeaderSubhead {
  color: yellow;
}

/* Object Header - SubstatusText */
.objectHeaderSubStatus {
  color: white;
  font-style: italic;
  font-size: 18;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/FirstApp/Styles/Styles.less"],"names":[],"mappings":"AAAA,oBAAoB;AACpB,iBAAiB;;;AAGjB;;IAEI,YAAY,EAAE,sCAAsC;IACpD,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;;IAEI,YAAY;IACZ,yBAAyB,EAAE,YAAY;IACvC,qBAAqB,MAAM,QAAQ;AACvC;;AAEA;IACI,yBAAyB,EAAE,8BAA8B;AAC7D;;AAEA;IACI,uBAAuB;AAC3B;AACA;;IAEI,cAAc;AAClB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;EAGE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;;CAEC,YAAY;AACb;;;AAGA;;;;EAIE,YAAY;AACd;;AAEA,gCAAgC;AAChC;EACE,YAAY;AACd;;AAEA,6BAA6B;AAC7B;EACE,YAAY;AACd;;AAEA,6BAA6B;AAC7B;EACE,cAAc;AAChB;;AAEA,+BAA+B;AAC/B;AACA,yBAAyB;AACzB;;AAEA,+BAA+B;AAC/B;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;AACf;;AAEA,4BAA4B;AAC5B;EACE,aAAa;AACf;;AAEA,kCAAkC;AAClC;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf","sourcesContent":["@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n\n//// This style applies to all the ActionBars in the application\nActionBar {\n    color: white; /* Define a cor do texto como branco */\n    background-color: #EB10D4;\n    text-align: center;\n    align-items: center;\n}\n\n//// This style applies to all the ToolBars in the application\nToolBar {\n    color: white;\n    background-color: #EB10D4; /* Android */\n    bartintcolor: #EB10D4;     /* iOS */\n}\n\nbody {\n    background-color: #EB95DF; /* Azul usando o nome da cor */\n}\n\n#SectionButton0 {\n    background-color: black;\n}\n//// LogoutToolbarItem is tool bar item for Logout in Main.page\n#LogoutToolbarItem  {\n    color: #EB95DF;\n}\n\n//// UploadToolbarItem is tool bar item for Sync in Main.page\n#UploadToolbarItem  {\n    color: white;\n}\n\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n//// below snippet is to style Customers button on Main.page\n.MyCustomerButton{\n  color: black;\n  background-color: #EB95DF;\n}\n\n//// below snippet is to style Title property of an Object Table control in Customers_List.page\n.ObjectTableTitle {\n color: white;\n}\n\n\n//// below snippet is to style Object Header control in Customers_Detail.page\n\n/* Object Header - BodyText */\n.objectHeaderBodyText {\n  color: white;\n}\n\n/* Object Header - Description */\n.objectHeaderDescription {\n  color: white;\n}\n\n/* Object Header - Footnote */\n.objectHeaderFootNote {\n  color: green;\n}\n\n/* Object Header - Headline */\n.objectHeaderHeadline {\n  color: #ff00ff;\n}\n\n/* Object Header - Background */\n.objectHeaderBackground {\nbackground-color: #DC143C;\n}\n\n/* Object Header - StatusText */\n.objectHeaderStatus {\n  color: red;\n  font-style: italic;\n  font-size: 18;\n}\n\n/* Object Header - Subhead */\n.objectHeaderSubhead {\n  color: yellow;\n}\n\n/* Object Header - SubstatusText */\n.objectHeaderSubStatus {\n  color: white;\n  font-style: italic;\n  font-size: 18;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/FirstApp/Styles/Styles.nss":
/*!******************************************************!*\
  !*** ./build.definitions/FirstApp/Styles/Styles.nss ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;
ActionBar {
	font-color: white;
	/* Define a cor do texto como branco */
  background-color: #EB10D4;
	text-align: center;
	align-items: center;
}
MyCustomerButton {
	font-color: black;
	background-color: #EB95DF;
}
ObjectTableTitle {
	font-color: white;
}
objectHeaderBodyText {
	font-color: white;
}
objectHeaderDescription {
	font-color: white;
}
objectHeaderFootNote {
	font-color: green;
}
objectHeaderHeadline {
	font-color: #ff00ff;
}
objectHeaderBackground {
	background-color: #DC143C;
}
objectHeaderStatus {
	font-color: red;
	font-style: italic;
	font-size: 18;
}
objectHeaderSubhead {
	font-color: yellow;
}
objectHeaderSubStatus {
	font-color: white;
	font-style: italic;
	font-size: 18;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/FirstApp/Styles/Styles.nss"],"names":[],"mappings":"AAAA,oBAAoB;AACpB,iBAAiB;AACjB;CACC,iBAAiB;CACjB,sCAAsC;EACrC,yBAAyB;CAC1B,kBAAkB;CAClB,mBAAmB;AACpB;AACA;CACC,iBAAiB;CACjB,yBAAyB;AAC1B;AACA;CACC,iBAAiB;AAClB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,eAAe;CACf,kBAAkB;CAClB,aAAa;AACd;AACA;CACC,kBAAkB;AACnB;AACA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,aAAa;AACd","sourcesContent":["@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\nActionBar {\n\tfont-color: white;\n\t/* Define a cor do texto como branco */\n  background-color: #EB10D4;\n\ttext-align: center;\n\talign-items: center;\n}\nMyCustomerButton {\n\tfont-color: black;\n\tbackground-color: #EB95DF;\n}\nObjectTableTitle {\n\tfont-color: white;\n}\nobjectHeaderBodyText {\n\tfont-color: white;\n}\nobjectHeaderDescription {\n\tfont-color: white;\n}\nobjectHeaderFootNote {\n\tfont-color: green;\n}\nobjectHeaderHeadline {\n\tfont-color: #ff00ff;\n}\nobjectHeaderBackground {\n\tbackground-color: #DC143C;\n}\nobjectHeaderStatus {\n\tfont-color: red;\n\tfont-style: italic;\n\tfont-size: 18;\n}\nobjectHeaderSubhead {\n\tfont-color: yellow;\n}\nobjectHeaderSubStatus {\n\tfont-color: white;\n\tfont-style: italic;\n\tfont-size: 18;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/api.js":
/*!***********************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!******************************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.1/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/Customers_Create.page":
/*!****************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/Customers_Create.page ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCFirstName","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"First Name","PlaceHolder":"Enter Value","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLastName","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Last Name","PlaceHolder":"Enter Value","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreatePhone","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"Enter Value","KeyboardType":"Phone","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreatedEmail","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Email","PlaceHolder":"Enter Value","KeyboardType":"Email","Enabled":true},{"Value":"Enter Date","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCCreateDOB","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"DOB","Mode":"Datetime"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Customers_Create","Caption":"Create Customer","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/FirstApp/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/FirstApp/Actions/Customers_CreateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/Customers_Detail.page":
/*!****************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/Customers_Detail.page ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"Subhead":"{FirstName}","Footnote":"{EmailAddress}","Description":"{CustomerId}","StatusText":"{PhoneNumber}","DetailImage":"sap-icon://customer","DetailImageIsCircular":false,"BodyText":"{DateOfBirth}","HeadlineText":"{LastName}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true},"KeyAndValues":[{"Value":"{HouseNumber} {Street}","_Name":"KeyValue3","KeyName":"Address","Visible":true},{"Value":"{City}","_Name":"KeyValue2","KeyName":"City","Visible":true},{"Value":"{PostalCode}","_Name":"KeyValue1","KeyName":"Postalcode","Visible":true},{"Value":"{Country}","_Name":"KeyValue0","KeyName":"Country","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"_Type":"Section.Type.ObjectTable","DataSubscriptions":["SalesOrderHeaders"],"Target":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"{@odata.readLink}/SalesOrders","QueryOptions":"$top=5&$orderby=CreatedAt desc"},"_Name":"SectionObjectTable0","Header":{"_Name":"SectionHeader0","AccessoryType":"none","UseTopPadding":true,"Caption":"Customer Orders"},"Footer":{"_Name":"SectionFooter1","Caption":"See All","AttributeLabel":"/FirstApp/Rules/Customers_OrderCount.js","AccessoryType":"disclosureIndicator","FooterStyle":"attribute","Visible":true,"OnPress":"/FirstApp/Actions/NavToCustomers_Orders.action","UseBottomPadding":false},"Visible":true,"EmptySection":{"Caption":"No Customer Orders Found","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{SalesOrderId}","Subhead":"$(D,{CreatedAt},'','',{format:'medium'})","DisplayDescriptionInMobile":true,"StatusText":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","SubstatusText":"{CurrencyCode}","PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/FirstApp/Actions/NavToSalesOrders_Details.action","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true}},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"DesignTimeTarget":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"Customers"},"_Type":"Page","_Name":"Customers_Detail","Caption":"Details","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/FirstApp/Actions/NavToCustomers_Edit.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Trash","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/FirstApp/Rules/Customers_DeleteConfirmation.js"}],"_Name":"ActionBar1"},"ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"Create Order","Enabled":true,"Visible":true,"Clickable":true,"Style":"","OnPress":"/FirstApp/Actions/NavToSalesOrderHeaders_Create.action"}]}}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/Customers_Edit.page":
/*!**************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/Customers_Edit.page ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"{FirstName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCFirstName","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"First Name","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{LastName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCLastName","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Last Name","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{PhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCPhone","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{EmailAddress}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCEmail","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Email","PlaceHolder":"PlaceHolder","KeyboardType":"Email","Enabled":true}]}]}],"_Type":"Page","_Name":"Customers_Edit","Caption":"Update Customer","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/FirstApp/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/FirstApp/Actions/Customers_UpdateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/Customers_List.page":
/*!**************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/Customers_List.page ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ContactCell","Target":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"Customers","QueryOptions":"$orderby=LastName"},"_Name":"SectionContactCell0","Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"Visible":true,"ContextMenu":{"PerformFirstActionWithFullSwipe":true,"Items":[]},"DetailImage":"","Headline":"{LastName}","Subheadline":"{FirstName}","Description":"{City}","OnPress":"/FirstApp/Actions/NavToCustomers_Detail.action","ActivityItems":[{"_Name":"SectionContactCell0ActivityItems0","ActivityType":"Phone","ActivityValue":"{PhoneNumber}"},{"_Name":"SectionContactCell0ActivityItems1","ActivityType":"Email","ActivityValue":"{EmailAddress}"}]},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"Search":{"Enabled":true,"BarcodeScanner":true}}]}],"_Type":"Page","_Name":"Customers_List","Caption":"Customers","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Add","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/FirstApp/Actions/NavToCustomers_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/Customers_Orders.page":
/*!****************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/Customers_Orders.page ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"SalesOrderHeaders","QueryOptions":"$filter=CustomerId eq '{CustomerId}'&$orderby=CreatedAt desc"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Orders Found","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{SalesOrderId}","Subhead":"{CustomerId}","Description":"$(D,{CreatedAt},'','',{format:'medium'})","DisplayDescriptionInMobile":true,"StatusText":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","SubstatusText":"{LifeCycleStatusName}","PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"sap-icon://customer","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/FirstApp/Actions/NavToSalesOrders_Details.action","Selected":false},"Search":{"Enabled":true,"BarcodeScanner":true},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"Customers_Orders","Caption":"Customers_Orders","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/ErrorArchive/ErrorArchive_List.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"none","OnPress":"/FirstApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/Main.page":
/*!****************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/Main.page ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable0","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"Styles":{"Button":"MyCustomerButton"},"_Name":"SectionButton0","Title":"Customers","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://customer","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/FirstApp/Actions/NavToCustomers_List.action"},{"_Name":"SectionButton3","Title":"Products","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://product","ImagePosition":"Leading","Styles":{"Button":"MyCustomerButton"},"OnPress":"/FirstApp/Actions/Products/NavToProducts_List.action"},{"Styles":{"Button":"MyCustomerButton"},"_Name":"SectionButton1","Title":"Open SAP Mobile Cards","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://appointment","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/FirstApp/Rules/OpenSAPMobileCards.js"},{"Styles":{"Button":"MyCustomerButton"},"_Name":"SectionButton2","Title":"Open sap.com page","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://sys-first-page","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/FirstApp/Rules/OpenSAPcom.js"}]}]}],"PullDown":{"Styles":{"BackgroundColor":"#f9f7f7","IndicatorColor":"#ffffff"}},"_Type":"Page","_Name":"Main","Caption":"Main","PrefersLargeCaption":true,"ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"LogoutToolbarItem","Caption":"Logout","Enabled":true,"Visible":true,"Clickable":true,"OnPress":"/FirstApp/Actions/LogoutMessage.action"},{"_Type":"Control.Type.ToolbarItem","_Name":"UploadToolbarItem","Caption":"Sync","Enabled":true,"Visible":"$(PLT,true,true,false)","Clickable":true,"OnPress":"/FirstApp/Actions/Service/SyncStartedMessage.action"},{"_Type":"Control.Type.ToolbarItem","_Name":"UpdateToolbarItem","Caption":"Update","Enabled":true,"Visible":"$(PLT,true,true,false)","Clickable":true,"OnPress":"/FirstApp/Actions/AppUpdateProgressBanner.action"},{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"Upload Logs","Enabled":true,"Visible":"$(PLT,true,true,false)","Clickable":true,"Style":"","OnPress":"/FirstApp/Actions/LogUpload.action"}]}}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/Products/Products_Create.page":
/*!************************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/Products/Products_Create.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/FirstApp/Actions/CloseModalPage_Cancel.action","Position":"left","SystemItem":"Cancel"},{"OnPress":"/FirstApp/Actions/Products/Products_CreateEntity.action","Position":"right","SystemItem":"Save"}]},"Caption":"Create $(L,PRODUCT_TYPE)","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Category","_Name":"Category","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CategoryName","_Name":"CategoryName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CurrencyCode","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DimensionDepth","KeyboardType":"Number","_Name":"DimensionDepth","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DimensionHeight","KeyboardType":"Number","_Name":"DimensionHeight","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DimensionUnit","_Name":"DimensionUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DimensionWidth","KeyboardType":"Number","_Name":"DimensionWidth","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"LongDescription","_Name":"LongDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Name","_Name":"Name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PictureUrl","_Name":"PictureUrl","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Price","KeyboardType":"Number","_Name":"Price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ProductId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{ProductId}","ReturnValue":"{ProductId}","Target":{"EntitySet":"Stock","Service":"/FirstApp/Services/FirstApp.service"}},"_Name":"ProductId","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"QuantityUnit","_Name":"QuantityUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ShortDescription","_Name":"ShortDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SupplierId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SupplierName}","ReturnValue":"{SupplierId}","Target":{"EntitySet":"Suppliers","Service":"/FirstApp/Services/FirstApp.service"}},"_Name":"SupplierId","_Type":"Control.Type.FormCell.ListPicker"},{"Mode":"Datetime","_Name":"UpdatedTimestamp","Caption":"UpdatedTimestamp","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Weight","KeyboardType":"Number","_Name":"Weight","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"WeightUnit","_Name":"WeightUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"AttachmentTitle":"Media","AttachmentAddTitle":"Browse","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AllowedFileTypes":["jpg","png","gif"],"_Name":"Attachment","_Type":"Control.Type.FormCell.Attachment"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Products_Create"}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/Products/Products_Detail.page":
/*!************************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/Products/Products_Detail.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PRODUCT_TYPE)","DesignTimeTarget":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"Products","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/FirstApp/Actions/Products/NavToProducts_Edit.action","Position":"right","SystemItem":"Edit"},{"OnPress":"/FirstApp/Actions/Products/Products_DetailPopover.action","Position":"right","Text":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"/FirstApp/Services/FirstApp.service/{@odata.readLink}/$value","HeadlineText":"{Name}","Subhead":"{Category}","Tags":[],"BodyText":"","Footnote":"{CurrencyCode}","Description":"{CategoryName}","StatusText":"{DimensionDepth}","StatusImage":"","SubstatusImage":"","SubstatusText":"{DimensionHeight}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Category","Value":"{Category}"},{"KeyName":"CategoryName","Value":"{CategoryName}"},{"KeyName":"CurrencyCode","Value":"{CurrencyCode}"},{"KeyName":"DimensionDepth","Value":"{DimensionDepth}"},{"KeyName":"DimensionHeight","Value":"{DimensionHeight}"},{"KeyName":"DimensionUnit","Value":"{DimensionUnit}"},{"KeyName":"DimensionWidth","Value":"{DimensionWidth}"},{"KeyName":"LongDescription","Value":"{LongDescription}"},{"KeyName":"Name","Value":"{Name}"},{"KeyName":"PictureUrl","Value":"{PictureUrl}"},{"KeyName":"Price","Value":"{Price}"},{"KeyName":"ProductId","Value":"{ProductId}"},{"KeyName":"QuantityUnit","Value":"{QuantityUnit}"},{"KeyName":"ShortDescription","Value":"{ShortDescription}"},{"KeyName":"SupplierId","Value":"{SupplierId}"},{"KeyName":"UpdatedTimestamp","Value":"{UpdatedTimestamp}"},{"KeyName":"Weight","Value":"{Weight}"},{"KeyName":"WeightUnit","Value":"{WeightUnit}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"KeyAndValues":[{"KeyName":"$(L,PRODUCT_NAME)","Value":"{Name}"},{"KeyName":"$(L,PRODUCT_CATEGORY)","Value":"{Category}"},{"KeyName":"$(L,PRODUCT_SHORT_DESCRIPTION)","Value":"{ShortDescription}"},{"KeyName":"$(L,PRODUCT_LONG_DESCRIPTION)","Value":"{LongDescription}"},{"KeyName":"$(L,PRODUCT_PRICE)","Value":"{Price}"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","Header":{"UseTopPadding":true,"Caption":""},"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"KeyAndValues":[{"KeyName":"$(L,PRODUCT_WEIGHT)","Value":"{Weight}"},{"KeyName":"$(L,PRODUCT_HEIGHT)","Value":"{DimensionHeight}"},{"KeyName":"$(L,PRODUCT_DEPTH)","Value":"{DimensionDepth}"},{"KeyName":"$(L,PRODUCT_WIDTH)","Value":"{DimensionWidth}"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","Header":{"UseTopPadding":true,"Caption":""},"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"KeyAndValues":[{"KeyName":"$(L,PRODUCT_PRICE)","Value":"{Price}"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","Header":{"UseTopPadding":true,"Caption":""},"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_Detail"}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/Products/Products_Edit.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/Products/Products_Edit.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update $(L,PRODUCT_TYPE)","DesignTimeTarget":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"Products","QueryOptions":""},"ActionBar":{"Items":[{"Position":"left","SystemItem":"Cancel","OnPress":"/FirstApp/Actions/CloseModalPage_Cancel.action"},{"Position":"right","SystemItem":"Save","OnPress":"/FirstApp/Actions/Products/Products_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Category","_Name":"Category","Value":"{Category}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CategoryName","_Name":"CategoryName","Value":"{CategoryName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"CurrencyCode","_Name":"CurrencyCode","Value":"{CurrencyCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DimensionDepth","_Name":"DimensionDepth","Value":"{DimensionDepth}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DimensionHeight","_Name":"DimensionHeight","Value":"{DimensionHeight}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DimensionUnit","_Name":"DimensionUnit","Value":"{DimensionUnit}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"DimensionWidth","_Name":"DimensionWidth","Value":"{DimensionWidth}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"LongDescription","_Name":"LongDescription","Value":"{LongDescription}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Name","_Name":"Name","Value":"{Name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"PictureUrl","_Name":"PictureUrl","Value":"{PictureUrl}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Price","_Name":"Price","Value":"{Price}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ProductId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{ProductId}","ReturnValue":"{ProductId}","Target":{"EntitySet":"Stock","Service":"/FirstApp/Services/FirstApp.service"}},"Value":"{ProductId}","_Name":"ProductId","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"QuantityUnit","_Name":"QuantityUnit","Value":"{QuantityUnit}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ShortDescription","_Name":"ShortDescription","Value":"{ShortDescription}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SupplierId","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SupplierName}","ReturnValue":"{SupplierId}","Target":{"EntitySet":"Suppliers","Service":"/FirstApp/Services/FirstApp.service"}},"Value":"{SupplierId}","_Name":"SupplierId","_Type":"Control.Type.FormCell.ListPicker"},{"Mode":"Datetime","_Name":"UpdatedTimestamp","Value":"{UpdatedTimestamp}","Caption":"UpdatedTimestamp","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Weight","_Name":"Weight","Value":"{Weight}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"WeightUnit","_Name":"WeightUnit","Value":"{WeightUnit}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Products_Edit"}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/Products/Products_List.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/Products/Products_List.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,PRODUCT_TYPES)","ActionBar":{"Items":[{"OnPress":"/FirstApp/Actions/Products/NavToProducts_Create.action","Position":"right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{CategoryName}","DetailImage":"/FirstApp/Services/FirstApp.service/{@odata.readLink}/$value","DetailImageIsCircular":false,"Icons":[],"OnPress":"/FirstApp/Actions/Products/NavToProducts_Detail.action","StatusImage":"","Title":"{Name}","Footnote":"{CurrencyCode}","PreserveIconStackSpacing":false,"StatusText":"{DimensionDepth}","Subhead":"{Category}","SubstatusText":"{DimensionHeight}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Products","Service":"/FirstApp/Services/FirstApp.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_List"}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/SalesOrderHeaders_Create.page":
/*!************************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/SalesOrderHeaders_Create.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"EUR","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCurrencyCode","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Currency Code","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"18.010","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateNetAmount","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Net Amount","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"108.010","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateTaxAmount","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Tax Amount","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"126.02","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateGrossAmount","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Gross Amount","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"N","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLifeCycleStatus","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Lifecycle Status","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"New","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLifeCycleStatusName","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Lifecycle Status Name","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"Enter Date","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCCreatedate","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Creation Date","Mode":"Datetime"}]}]}],"_Type":"Page","_Name":"SalesOrderHeaders_Create","Caption":"Create Order","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/FirstApp/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/FirstApp/Actions/SalesOrderHeaders_CreateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/FirstApp/Pages/SalesOrders_Details.page":
/*!*******************************************************************!*\
  !*** ./build.definitions/FirstApp/Pages/SalesOrders_Details.page ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true},"KeyAndValues":[{"Value":"{SalesOrderId}","_Name":"KeyValue0","KeyName":"Order Number","Visible":true},{"Value":"{LifeCycleStatusName}","_Name":"KeyValue5","KeyName":"Status","Visible":true},{"Value":"$(D,{CreatedAt},'','',{format:'medium'})","_Name":"KeyValue4","KeyName":"Created At","Visible":true},{"Value":"$(C,{NetAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue3","KeyName":"Net Amount","Visible":true},{"Value":"$(C,{TaxAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue2","KeyName":"Tax Amount","Visible":true},{"Value":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue1","KeyName":"Total Amount","Visible":true}],"MaxItemCount":1,"Layout":{"NumberOfColumns":2}}]}],"_Type":"Page","_Name":"SalesOrders_Details","Caption":"Order Details","PrefersLargeCaption":true,"DesignTimeTarget":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"SalesOrderHeaders"}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"FirstApp","Version":"/FirstApp/Globals/AppDefinition_Version.global","MainPage":"/FirstApp/Pages/Main.page","OnLaunch":["/FirstApp/Actions/Service/InitializeOffline.action"],"OnWillUpdate":"/FirstApp/Rules/OnWillUpdate.js","OnDidUpdate":"/FirstApp/Actions/Service/InitializeOffline.action","Styles":"/FirstApp/Styles/Styles.less","Localization":"/FirstApp/i18n/i18n.properties","_SchemaVersion":"23.8","StyleSheets":{"Styles":{"css":"/FirstApp/Styles/Styles.css","ios":"/FirstApp/Styles/Styles.nss","android":"/FirstApp/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/AppUpdate.action":
/*!*************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/AppUpdate.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/FirstApp/Rules/AppUpdateFailure.js","OnSuccess":"/FirstApp/Rules/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/AppUpdateFailureMessage.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/AppUpdateFailureMessage.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/AppUpdateProgressBanner.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/AppUpdateProgressBanner.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/FirstApp/Actions/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/AppUpdateSuccessMessage.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/AppUpdateSuccessMessage.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/CloseModalPage_Cancel.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/CloseModalPage_Cancel.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","ActionResult":{"_Name":"CloseModalPage_Cancel"},"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/CloseModalPage_Complete.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/CloseModalPage_Complete.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","ActionResult":{"_Name":"CloseModalPage_Complete"},"OnFailure":"/FirstApp/Actions/UpdateCustomerEntityFailureMessage.action","DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/ClosePage.action":
/*!*************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/ClosePage.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Confirmation.action":
/*!****************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Confirmation.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"Confirmation"},"Title":"Confirm","OKCaption":"OK","CancelCaption":"Cancel"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/CreateCustomerEntityFailureMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/CreateCustomerEntityFailureMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"CreateCustomerEntityFailureMessage"},"Message":"Failed to Create Customer record - {#ActionResults:Customers_CreateEntity/error}","Title":"Create Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/CreateEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/CreateEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/CreateEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/CreateEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/FirstApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/CreateSalesOrderHeaderEntityFailureMessage.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/CreateSalesOrderHeaderEntityFailureMessage.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"CreateSalesOrderHeaderEntityFailureMessage"},"Message":"Failed to Create Sales Order record - {#ActionResults:SalesOrderHeaders_CreateEntity/error}","Title":"Create Sales Order","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Customers_CreateEntity.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Customers_CreateEntity.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"Customers_CreateEntity"},"OnFailure":"/FirstApp/Actions/CreateCustomerEntityFailureMessage.action","OnSuccess":"/FirstApp/Actions/CloseModalPage_Complete.action","Target":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"Customers"},"Properties":{"DateOfBirth":"#Control:FCCreateDOB/#Value","EmailAddress":"#Control:FCCreatedEmail/#Value","FirstName":"#Control:FCFirstName/#Value","LastName":"#Control:FCCreateLastName/#Value","PhoneNumber":"#Control:FCCreatePhone/#Value"}}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Customers_DeleteConfirmation.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Customers_DeleteConfirmation.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"Customers_DeleteConfirmation"},"Message":"Delete current entity?","Title":"Delete Confirmation","OKCaption":"OK","CancelCaption":"Cancel"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Customers_DeleteEntity.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Customers_DeleteEntity.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DeleteEntity","ActionResult":{"_Name":"Customers_DeleteEntity"},"OnFailure":"/FirstApp/Actions/DeleteCustomerEntityFailureMessage.action","OnSuccess":"/FirstApp/Actions/CloseModalPage_Complete.action","Target":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"Customers","ReadLink":"{@odata.readLink}"}}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Customers_UpdateEntity.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Customers_UpdateEntity.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"Customers_UpdateEntity"},"OnSuccess":"/FirstApp/Actions/CloseModalPage_Complete.action","Target":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"Customers","ReadLink":"{@odata.readLink}"},"Properties":{"EmailAddress":"#Control:FCEmail/#Value","FirstName":"#Control:FCFirstName/#Value","LastName":"#Control:FCCreateLastName/#Value","PhoneNumber":"#Control:FCPhone/#Value"}}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/DeleteConfirmation.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/DeleteConfirmation.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/DeleteCustomerEntityFailureMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/DeleteCustomerEntityFailureMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"DeleteCustomerEntityFailureMessage"},"Message":"Delete entity failure - {#ActionResults:Customers_DeleteEntity/error}","Title":"Delete Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/DeleteEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/DeleteEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/DeleteEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/DeleteEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/FirstApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/FirstApp/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/FirstApp/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/FirstApp/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/LogSetLevel.action":
/*!***************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/LogSetLevel.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logger.SetLevel","ActionResult":{"_Name":"LogSetLevel"},"Level":"Trace"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/LogSetState.action":
/*!***************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/LogSetState.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logger.SetState","ActionResult":{"_Name":"LogSetState"},"OnSuccess":"/FirstApp/Actions/LogSetLevel.action","LoggerState":"On"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/LogUpload.action":
/*!*************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/LogUpload.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logger.Upload","ActionResult":{"_Name":"LogUpload"},"OnFailure":"/FirstApp/Actions/LogUploadFailure.action","OnSuccess":"/FirstApp/Actions/LogUploadSuccessful.action","ShowActivityIndicator":true,"ActivityIndicatorText":"Uploading Logs..."}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/LogUploadFailure.action":
/*!********************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/LogUploadFailure.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"LogUploadFailure"},"Message":"Failed to upload client logs - {#ActionResults:LogUpload/error}","Title":"Upload Client Logs","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/LogUploadSuccessful.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/LogUploadSuccessful.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"LogUploadSuccessful"},"Message":"Log File Uploaded","NumberOfLines":1,"Duration":3,"IsIconHidden":true,"Animated":true}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Logout.action":
/*!**********************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Logout.action ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = {"SkipReset":false,"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/LogoutMessage.action":
/*!*****************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/LogoutMessage.action ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"CancelCaption":"No","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","OKCaption":"Yes","OnOK":"/FirstApp/Rules/ResetAppSettingsAndLogout.js","Title":"Logout","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/NavToCustomers_Create.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/NavToCustomers_Create.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Create"},"PageToOpen":"/FirstApp/Pages/Customers_Create.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/NavToCustomers_Detail.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/NavToCustomers_Detail.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Detail"},"PageToOpen":"/FirstApp/Pages/Customers_Detail.page"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/NavToCustomers_Edit.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/NavToCustomers_Edit.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Edit"},"PageToOpen":"/FirstApp/Pages/Customers_Edit.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/NavToCustomers_List.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/NavToCustomers_List.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_List"},"PageToOpen":"/FirstApp/Pages/Customers_List.page"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/NavToCustomers_Orders.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/NavToCustomers_Orders.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Orders"},"PageToOpen":"/FirstApp/Pages/Customers_Orders.page"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/NavToSalesOrderHeaders_Create.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/NavToSalesOrderHeaders_Create.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToSalesOrderHeaders_Create"},"PageToOpen":"/FirstApp/Pages/SalesOrderHeaders_Create.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/NavToSalesOrders_Details.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/NavToSalesOrders_Details.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToSalesOrders_Details"},"PageToOpen":"/FirstApp/Pages/SalesOrders_Details.page"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/OnWillUpdate.action":
/*!****************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/OnWillUpdate.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Products/NavToProducts_Create.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Products/NavToProducts_Create.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/FirstApp/Pages/Products/Products_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Products/NavToProducts_Detail.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Products/NavToProducts_Detail.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/FirstApp/Pages/Products/Products_Detail.page"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Products/NavToProducts_Edit.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Products/NavToProducts_Edit.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/FirstApp/Pages/Products/Products_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Products/NavToProducts_List.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Products/NavToProducts_List.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/FirstApp/Pages/Products/Products_List.page"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Products/Products_CreateEntity.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Products/Products_CreateEntity.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"OnFailure":"/FirstApp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/FirstApp/Actions/CreateEntitySuccessMessage.action","Properties":{"Category":"#Control:Category/#Value","CategoryName":"#Control:CategoryName/#Value","CurrencyCode":"#Control:CurrencyCode/#Value","DimensionDepth":"#Control:DimensionDepth/#Value","DimensionHeight":"#Control:DimensionHeight/#Value","DimensionUnit":"#Control:DimensionUnit/#Value","DimensionWidth":"#Control:DimensionWidth/#Value","LongDescription":"#Control:LongDescription/#Value","Name":"#Control:Name/#Value","PictureUrl":"#Control:PictureUrl/#Value","Price":"#Control:Price/#Value","ProductId":"#Control:ProductId/#SelectedValue","QuantityUnit":"#Control:QuantityUnit/#Value","ShortDescription":"#Control:ShortDescription/#Value","SupplierId":"#Control:SupplierId/#SelectedValue","UpdatedTimestamp":"#Control:UpdatedTimestamp/#Value","Weight":"#Control:Weight/#Value","WeightUnit":"#Control:WeightUnit/#Value"},"Media":"#Control:Attachment/#Value","Target":{"EntitySet":"Products","Service":"/FirstApp/Services/FirstApp.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateMedia"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Products/Products_DeleteEntity.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Products/Products_DeleteEntity.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Products","Service":"/FirstApp/Services/FirstApp.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/FirstApp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/FirstApp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Products/Products_DetailPopover.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Products/Products_DetailPopover.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Open Document","OnPress":"/FirstApp/Actions/Products/Products_OpenDocument.action"},{"Title":"Delete","OnPress":"/FirstApp/Rules/Products/Products_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Products/Products_OpenDocument.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Products/Products_OpenDocument.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OpenDocument","Path":"/FirstApp/Services/FirstApp.service/{@odata.readLink}/$value","MimeType":"image/jpeg"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Products/Products_UpdateEntity.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Products/Products_UpdateEntity.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Products","Service":"/FirstApp/Services/FirstApp.service","ReadLink":"{@odata.readLink}"},"Properties":{"Category":"#Control:Category/#Value","CategoryName":"#Control:CategoryName/#Value","CurrencyCode":"#Control:CurrencyCode/#Value","DimensionDepth":"#Control:DimensionDepth/#Value","DimensionHeight":"#Control:DimensionHeight/#Value","DimensionUnit":"#Control:DimensionUnit/#Value","DimensionWidth":"#Control:DimensionWidth/#Value","LongDescription":"#Control:LongDescription/#Value","Name":"#Control:Name/#Value","PictureUrl":"#Control:PictureUrl/#Value","Price":"#Control:Price/#Value","ProductId":"#Control:ProductId/#SelectedValue","QuantityUnit":"#Control:QuantityUnit/#Value","ShortDescription":"#Control:ShortDescription/#Value","SupplierId":"#Control:SupplierId/#SelectedValue","UpdatedTimestamp":"#Control:UpdatedTimestamp/#Value","Weight":"#Control:Weight/#Value","WeightUnit":"#Control:WeightUnit/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/FirstApp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/FirstApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/SalesOrderHeaders_CreateEntity.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/SalesOrderHeaders_CreateEntity.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateRelatedEntity","ActionResult":{"_Name":"SalesOrderHeaders_CreateEntity"},"OnFailure":"/FirstApp/Actions/CreateSalesOrderHeaderEntityFailureMessage.action","OnSuccess":"/FirstApp/Actions/CloseModalPage_Complete.action","Target":{"Service":"/FirstApp/Services/FirstApp.service","EntitySet":"SalesOrderHeaders"},"ParentLink":{"Target":{"EntitySet":"Customers","ReadLink":"{@odata.readLink}"},"Property":"SalesOrders"},"Properties":{"CreatedAt":"#Control:FCCreatedate/#Value","CurrencyCode":"#Control:FCCreateCurrencyCode/#Value","GrossAmount":"#Control:FCCreateGrossAmount/#Value","LifeCycleStatus":"#Control:FCCreateLifeCycleStatus/#Value","LifeCycleStatusName":"#Control:FCCreateLifeCycleStatusName/#Value","NetAmount":"#Control:FCCreateNetAmount/#Value","TaxAmount":"#Control:FCCreateTaxAmount/#Value"}}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/CloseOffline.action":
/*!************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/CloseOffline.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/FirstApp/Services/FirstApp.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/FirstApp/Actions/Service/CloseOfflineSuccessMessage.action","OnFailure":"/FirstApp/Actions/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/CloseOfflineFailureMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/CloseOfflineFailureMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/CloseOfflineSuccessMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/CloseOfflineSuccessMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/DownloadOffline.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/DownloadOffline.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/FirstApp/Services/FirstApp.service","DefiningRequests":[{"Name":"Customers","Query":"Customers"},{"Name":"Products","Query":"Products"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/FirstApp/Actions/Service/SyncFailureMessage.action","OnSuccess":"/FirstApp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/DownloadStartedMessage.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/DownloadStartedMessage.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/FirstApp/Actions/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/InitializeOffline.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/InitializeOffline.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.Initialize","ActionResult":{"_Name":"init"},"OnFailure":"/FirstApp/Actions/Service/InitializeOfflineFailureMessage.action","OnSuccess":"/FirstApp/Actions/LogSetState.action","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","Service":"/FirstApp/Services/FirstApp.service","DefiningRequests":[{"Name":"Customers","Query":"Customers"},{"Name":"Products","Query":"Products"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"}]}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/InitializeOfflineFailureMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/InitializeOfflineFailureMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/InitializeOfflineSuccessMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/InitializeOfflineSuccessMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/SyncFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/SyncFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/SyncStartedMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/SyncStartedMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/FirstApp/Actions/Service/UploadOffline.action","OnFailure":"/FirstApp/Actions/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/SyncSuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/SyncSuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Sync offline data service complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/Service/UploadOffline.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/Service/UploadOffline.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/FirstApp/Services/FirstApp.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/FirstApp/Actions/Service/DownloadStartedMessage.action","OnFailure":"/FirstApp/Actions/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/UpdateCustomerEntityFailureMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/UpdateCustomerEntityFailureMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"UpdateCustomerEntityFailureMessage"},"Message":"Failed to Save Customer Updates - {#ActionResults:Customers_UpdateEntity/error}","Title":"Update Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/UpdateEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/UpdateEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/UpdateEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/UpdateEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/FirstApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/FirstApp/Actions/ValidationFailure.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/FirstApp/Actions/ValidationFailure.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"ValidationFailure"},"Message":"Email address is not in the correct format recipient @ domain . domaintype","Title":"Validate Email","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/FirstApp/Globals/AppDefinition_Version.global":
/*!*************************************************************************!*\
  !*** ./build.definitions/FirstApp/Globals/AppDefinition_Version.global ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/FirstApp/Services/FirstApp.service":
/*!**************************************************************!*\
  !*** ./build.definitions/FirstApp/Services/FirstApp.service ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"FirstApp","OfflineEnabled":true,"SourceType":"Mobile"}

/***/ }),

/***/ "./build.definitions/FirstApp/Services/SampleServiceV2.service":
/*!*********************************************************************!*\
  !*** ./build.definitions/FirstApp/Services/SampleServiceV2.service ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":""}

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let firstapp_actions_appupdate_action = __webpack_require__(/*! ./FirstApp/Actions/AppUpdate.action */ "./build.definitions/FirstApp/Actions/AppUpdate.action")
let firstapp_actions_appupdatefailuremessage_action = __webpack_require__(/*! ./FirstApp/Actions/AppUpdateFailureMessage.action */ "./build.definitions/FirstApp/Actions/AppUpdateFailureMessage.action")
let firstapp_actions_appupdateprogressbanner_action = __webpack_require__(/*! ./FirstApp/Actions/AppUpdateProgressBanner.action */ "./build.definitions/FirstApp/Actions/AppUpdateProgressBanner.action")
let firstapp_actions_appupdatesuccessmessage_action = __webpack_require__(/*! ./FirstApp/Actions/AppUpdateSuccessMessage.action */ "./build.definitions/FirstApp/Actions/AppUpdateSuccessMessage.action")
let firstapp_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./FirstApp/Actions/CloseModalPage_Cancel.action */ "./build.definitions/FirstApp/Actions/CloseModalPage_Cancel.action")
let firstapp_actions_closemodalpage_complete_action = __webpack_require__(/*! ./FirstApp/Actions/CloseModalPage_Complete.action */ "./build.definitions/FirstApp/Actions/CloseModalPage_Complete.action")
let firstapp_actions_closepage_action = __webpack_require__(/*! ./FirstApp/Actions/ClosePage.action */ "./build.definitions/FirstApp/Actions/ClosePage.action")
let firstapp_actions_confirmation_action = __webpack_require__(/*! ./FirstApp/Actions/Confirmation.action */ "./build.definitions/FirstApp/Actions/Confirmation.action")
let firstapp_actions_createcustomerentityfailuremessage_action = __webpack_require__(/*! ./FirstApp/Actions/CreateCustomerEntityFailureMessage.action */ "./build.definitions/FirstApp/Actions/CreateCustomerEntityFailureMessage.action")
let firstapp_actions_createentityfailuremessage_action = __webpack_require__(/*! ./FirstApp/Actions/CreateEntityFailureMessage.action */ "./build.definitions/FirstApp/Actions/CreateEntityFailureMessage.action")
let firstapp_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./FirstApp/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/FirstApp/Actions/CreateEntitySuccessMessage.action")
let firstapp_actions_createsalesorderheaderentityfailuremessage_action = __webpack_require__(/*! ./FirstApp/Actions/CreateSalesOrderHeaderEntityFailureMessage.action */ "./build.definitions/FirstApp/Actions/CreateSalesOrderHeaderEntityFailureMessage.action")
let firstapp_actions_customers_createentity_action = __webpack_require__(/*! ./FirstApp/Actions/Customers_CreateEntity.action */ "./build.definitions/FirstApp/Actions/Customers_CreateEntity.action")
let firstapp_actions_customers_deleteconfirmation_action = __webpack_require__(/*! ./FirstApp/Actions/Customers_DeleteConfirmation.action */ "./build.definitions/FirstApp/Actions/Customers_DeleteConfirmation.action")
let firstapp_actions_customers_deleteentity_action = __webpack_require__(/*! ./FirstApp/Actions/Customers_DeleteEntity.action */ "./build.definitions/FirstApp/Actions/Customers_DeleteEntity.action")
let firstapp_actions_customers_updateentity_action = __webpack_require__(/*! ./FirstApp/Actions/Customers_UpdateEntity.action */ "./build.definitions/FirstApp/Actions/Customers_UpdateEntity.action")
let firstapp_actions_deleteconfirmation_action = __webpack_require__(/*! ./FirstApp/Actions/DeleteConfirmation.action */ "./build.definitions/FirstApp/Actions/DeleteConfirmation.action")
let firstapp_actions_deletecustomerentityfailuremessage_action = __webpack_require__(/*! ./FirstApp/Actions/DeleteCustomerEntityFailureMessage.action */ "./build.definitions/FirstApp/Actions/DeleteCustomerEntityFailureMessage.action")
let firstapp_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./FirstApp/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/FirstApp/Actions/DeleteEntityFailureMessage.action")
let firstapp_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./FirstApp/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/FirstApp/Actions/DeleteEntitySuccessMessage.action")
let firstapp_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./FirstApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/FirstApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let firstapp_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./FirstApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/FirstApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let firstapp_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./FirstApp/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/FirstApp/Actions/ErrorArchive/NavToErrorArchive_List.action")
let firstapp_actions_logout_action = __webpack_require__(/*! ./FirstApp/Actions/Logout.action */ "./build.definitions/FirstApp/Actions/Logout.action")
let firstapp_actions_logoutmessage_action = __webpack_require__(/*! ./FirstApp/Actions/LogoutMessage.action */ "./build.definitions/FirstApp/Actions/LogoutMessage.action")
let firstapp_actions_logsetlevel_action = __webpack_require__(/*! ./FirstApp/Actions/LogSetLevel.action */ "./build.definitions/FirstApp/Actions/LogSetLevel.action")
let firstapp_actions_logsetstate_action = __webpack_require__(/*! ./FirstApp/Actions/LogSetState.action */ "./build.definitions/FirstApp/Actions/LogSetState.action")
let firstapp_actions_logupload_action = __webpack_require__(/*! ./FirstApp/Actions/LogUpload.action */ "./build.definitions/FirstApp/Actions/LogUpload.action")
let firstapp_actions_loguploadfailure_action = __webpack_require__(/*! ./FirstApp/Actions/LogUploadFailure.action */ "./build.definitions/FirstApp/Actions/LogUploadFailure.action")
let firstapp_actions_loguploadsuccessful_action = __webpack_require__(/*! ./FirstApp/Actions/LogUploadSuccessful.action */ "./build.definitions/FirstApp/Actions/LogUploadSuccessful.action")
let firstapp_actions_navtocustomers_create_action = __webpack_require__(/*! ./FirstApp/Actions/NavToCustomers_Create.action */ "./build.definitions/FirstApp/Actions/NavToCustomers_Create.action")
let firstapp_actions_navtocustomers_detail_action = __webpack_require__(/*! ./FirstApp/Actions/NavToCustomers_Detail.action */ "./build.definitions/FirstApp/Actions/NavToCustomers_Detail.action")
let firstapp_actions_navtocustomers_edit_action = __webpack_require__(/*! ./FirstApp/Actions/NavToCustomers_Edit.action */ "./build.definitions/FirstApp/Actions/NavToCustomers_Edit.action")
let firstapp_actions_navtocustomers_list_action = __webpack_require__(/*! ./FirstApp/Actions/NavToCustomers_List.action */ "./build.definitions/FirstApp/Actions/NavToCustomers_List.action")
let firstapp_actions_navtocustomers_orders_action = __webpack_require__(/*! ./FirstApp/Actions/NavToCustomers_Orders.action */ "./build.definitions/FirstApp/Actions/NavToCustomers_Orders.action")
let firstapp_actions_navtosalesorderheaders_create_action = __webpack_require__(/*! ./FirstApp/Actions/NavToSalesOrderHeaders_Create.action */ "./build.definitions/FirstApp/Actions/NavToSalesOrderHeaders_Create.action")
let firstapp_actions_navtosalesorders_details_action = __webpack_require__(/*! ./FirstApp/Actions/NavToSalesOrders_Details.action */ "./build.definitions/FirstApp/Actions/NavToSalesOrders_Details.action")
let firstapp_actions_onwillupdate_action = __webpack_require__(/*! ./FirstApp/Actions/OnWillUpdate.action */ "./build.definitions/FirstApp/Actions/OnWillUpdate.action")
let firstapp_actions_products_navtoproducts_create_action = __webpack_require__(/*! ./FirstApp/Actions/Products/NavToProducts_Create.action */ "./build.definitions/FirstApp/Actions/Products/NavToProducts_Create.action")
let firstapp_actions_products_navtoproducts_detail_action = __webpack_require__(/*! ./FirstApp/Actions/Products/NavToProducts_Detail.action */ "./build.definitions/FirstApp/Actions/Products/NavToProducts_Detail.action")
let firstapp_actions_products_navtoproducts_edit_action = __webpack_require__(/*! ./FirstApp/Actions/Products/NavToProducts_Edit.action */ "./build.definitions/FirstApp/Actions/Products/NavToProducts_Edit.action")
let firstapp_actions_products_navtoproducts_list_action = __webpack_require__(/*! ./FirstApp/Actions/Products/NavToProducts_List.action */ "./build.definitions/FirstApp/Actions/Products/NavToProducts_List.action")
let firstapp_actions_products_products_createentity_action = __webpack_require__(/*! ./FirstApp/Actions/Products/Products_CreateEntity.action */ "./build.definitions/FirstApp/Actions/Products/Products_CreateEntity.action")
let firstapp_actions_products_products_deleteentity_action = __webpack_require__(/*! ./FirstApp/Actions/Products/Products_DeleteEntity.action */ "./build.definitions/FirstApp/Actions/Products/Products_DeleteEntity.action")
let firstapp_actions_products_products_detailpopover_action = __webpack_require__(/*! ./FirstApp/Actions/Products/Products_DetailPopover.action */ "./build.definitions/FirstApp/Actions/Products/Products_DetailPopover.action")
let firstapp_actions_products_products_opendocument_action = __webpack_require__(/*! ./FirstApp/Actions/Products/Products_OpenDocument.action */ "./build.definitions/FirstApp/Actions/Products/Products_OpenDocument.action")
let firstapp_actions_products_products_updateentity_action = __webpack_require__(/*! ./FirstApp/Actions/Products/Products_UpdateEntity.action */ "./build.definitions/FirstApp/Actions/Products/Products_UpdateEntity.action")
let firstapp_actions_salesorderheaders_createentity_action = __webpack_require__(/*! ./FirstApp/Actions/SalesOrderHeaders_CreateEntity.action */ "./build.definitions/FirstApp/Actions/SalesOrderHeaders_CreateEntity.action")
let firstapp_actions_service_closeoffline_action = __webpack_require__(/*! ./FirstApp/Actions/Service/CloseOffline.action */ "./build.definitions/FirstApp/Actions/Service/CloseOffline.action")
let firstapp_actions_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./FirstApp/Actions/Service/CloseOfflineFailureMessage.action */ "./build.definitions/FirstApp/Actions/Service/CloseOfflineFailureMessage.action")
let firstapp_actions_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./FirstApp/Actions/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/FirstApp/Actions/Service/CloseOfflineSuccessMessage.action")
let firstapp_actions_service_downloadoffline_action = __webpack_require__(/*! ./FirstApp/Actions/Service/DownloadOffline.action */ "./build.definitions/FirstApp/Actions/Service/DownloadOffline.action")
let firstapp_actions_service_downloadstartedmessage_action = __webpack_require__(/*! ./FirstApp/Actions/Service/DownloadStartedMessage.action */ "./build.definitions/FirstApp/Actions/Service/DownloadStartedMessage.action")
let firstapp_actions_service_initializeoffline_action = __webpack_require__(/*! ./FirstApp/Actions/Service/InitializeOffline.action */ "./build.definitions/FirstApp/Actions/Service/InitializeOffline.action")
let firstapp_actions_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./FirstApp/Actions/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/FirstApp/Actions/Service/InitializeOfflineFailureMessage.action")
let firstapp_actions_service_initializeofflinesuccessmessage_action = __webpack_require__(/*! ./FirstApp/Actions/Service/InitializeOfflineSuccessMessage.action */ "./build.definitions/FirstApp/Actions/Service/InitializeOfflineSuccessMessage.action")
let firstapp_actions_service_syncfailuremessage_action = __webpack_require__(/*! ./FirstApp/Actions/Service/SyncFailureMessage.action */ "./build.definitions/FirstApp/Actions/Service/SyncFailureMessage.action")
let firstapp_actions_service_syncstartedmessage_action = __webpack_require__(/*! ./FirstApp/Actions/Service/SyncStartedMessage.action */ "./build.definitions/FirstApp/Actions/Service/SyncStartedMessage.action")
let firstapp_actions_service_syncsuccessmessage_action = __webpack_require__(/*! ./FirstApp/Actions/Service/SyncSuccessMessage.action */ "./build.definitions/FirstApp/Actions/Service/SyncSuccessMessage.action")
let firstapp_actions_service_uploadoffline_action = __webpack_require__(/*! ./FirstApp/Actions/Service/UploadOffline.action */ "./build.definitions/FirstApp/Actions/Service/UploadOffline.action")
let firstapp_actions_updatecustomerentityfailuremessage_action = __webpack_require__(/*! ./FirstApp/Actions/UpdateCustomerEntityFailureMessage.action */ "./build.definitions/FirstApp/Actions/UpdateCustomerEntityFailureMessage.action")
let firstapp_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./FirstApp/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/FirstApp/Actions/UpdateEntityFailureMessage.action")
let firstapp_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./FirstApp/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/FirstApp/Actions/UpdateEntitySuccessMessage.action")
let firstapp_actions_validationfailure_action = __webpack_require__(/*! ./FirstApp/Actions/ValidationFailure.action */ "./build.definitions/FirstApp/Actions/ValidationFailure.action")
let firstapp_globals_appdefinition_version_global = __webpack_require__(/*! ./FirstApp/Globals/AppDefinition_Version.global */ "./build.definitions/FirstApp/Globals/AppDefinition_Version.global")
let firstapp_i18n_i18n_properties = __webpack_require__(/*! ./FirstApp/i18n/i18n.properties */ "./build.definitions/FirstApp/i18n/i18n.properties")
let firstapp_jsconfig_json = __webpack_require__(/*! ./FirstApp/jsconfig.json */ "./build.definitions/FirstApp/jsconfig.json")
let firstapp_pages_customers_create_page = __webpack_require__(/*! ./FirstApp/Pages/Customers_Create.page */ "./build.definitions/FirstApp/Pages/Customers_Create.page")
let firstapp_pages_customers_detail_page = __webpack_require__(/*! ./FirstApp/Pages/Customers_Detail.page */ "./build.definitions/FirstApp/Pages/Customers_Detail.page")
let firstapp_pages_customers_edit_page = __webpack_require__(/*! ./FirstApp/Pages/Customers_Edit.page */ "./build.definitions/FirstApp/Pages/Customers_Edit.page")
let firstapp_pages_customers_list_page = __webpack_require__(/*! ./FirstApp/Pages/Customers_List.page */ "./build.definitions/FirstApp/Pages/Customers_List.page")
let firstapp_pages_customers_orders_page = __webpack_require__(/*! ./FirstApp/Pages/Customers_Orders.page */ "./build.definitions/FirstApp/Pages/Customers_Orders.page")
let firstapp_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./FirstApp/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/FirstApp/Pages/ErrorArchive/ErrorArchive_Detail.page")
let firstapp_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./FirstApp/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/FirstApp/Pages/ErrorArchive/ErrorArchive_List.page")
let firstapp_pages_main_page = __webpack_require__(/*! ./FirstApp/Pages/Main.page */ "./build.definitions/FirstApp/Pages/Main.page")
let firstapp_pages_products_products_create_page = __webpack_require__(/*! ./FirstApp/Pages/Products/Products_Create.page */ "./build.definitions/FirstApp/Pages/Products/Products_Create.page")
let firstapp_pages_products_products_detail_page = __webpack_require__(/*! ./FirstApp/Pages/Products/Products_Detail.page */ "./build.definitions/FirstApp/Pages/Products/Products_Detail.page")
let firstapp_pages_products_products_edit_page = __webpack_require__(/*! ./FirstApp/Pages/Products/Products_Edit.page */ "./build.definitions/FirstApp/Pages/Products/Products_Edit.page")
let firstapp_pages_products_products_list_page = __webpack_require__(/*! ./FirstApp/Pages/Products/Products_List.page */ "./build.definitions/FirstApp/Pages/Products/Products_List.page")
let firstapp_pages_salesorderheaders_create_page = __webpack_require__(/*! ./FirstApp/Pages/SalesOrderHeaders_Create.page */ "./build.definitions/FirstApp/Pages/SalesOrderHeaders_Create.page")
let firstapp_pages_salesorders_details_page = __webpack_require__(/*! ./FirstApp/Pages/SalesOrders_Details.page */ "./build.definitions/FirstApp/Pages/SalesOrders_Details.page")
let firstapp_rules_appupdatefailure_js = __webpack_require__(/*! ./FirstApp/Rules/AppUpdateFailure.js */ "./build.definitions/FirstApp/Rules/AppUpdateFailure.js")
let firstapp_rules_appupdatesuccess_js = __webpack_require__(/*! ./FirstApp/Rules/AppUpdateSuccess.js */ "./build.definitions/FirstApp/Rules/AppUpdateSuccess.js")
let firstapp_rules_customers_deleteconfirmation_js = __webpack_require__(/*! ./FirstApp/Rules/Customers_DeleteConfirmation.js */ "./build.definitions/FirstApp/Rules/Customers_DeleteConfirmation.js")
let firstapp_rules_customers_ordercount_js = __webpack_require__(/*! ./FirstApp/Rules/Customers_OrderCount.js */ "./build.definitions/FirstApp/Rules/Customers_OrderCount.js")
let firstapp_rules_emailvalidation_js = __webpack_require__(/*! ./FirstApp/Rules/EmailValidation.js */ "./build.definitions/FirstApp/Rules/EmailValidation.js")
let firstapp_rules_errorarchive_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./FirstApp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js */ "./build.definitions/FirstApp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js")
let firstapp_rules_onwillupdate_js = __webpack_require__(/*! ./FirstApp/Rules/OnWillUpdate.js */ "./build.definitions/FirstApp/Rules/OnWillUpdate.js")
let firstapp_rules_opensapcom_js = __webpack_require__(/*! ./FirstApp/Rules/OpenSAPcom.js */ "./build.definitions/FirstApp/Rules/OpenSAPcom.js")
let firstapp_rules_opensapmobilecards_js = __webpack_require__(/*! ./FirstApp/Rules/OpenSAPMobileCards.js */ "./build.definitions/FirstApp/Rules/OpenSAPMobileCards.js")
let firstapp_rules_products_products_deleteconfirmation_js = __webpack_require__(/*! ./FirstApp/Rules/Products/Products_DeleteConfirmation.js */ "./build.definitions/FirstApp/Rules/Products/Products_DeleteConfirmation.js")
let firstapp_rules_resetappsettingsandlogout_js = __webpack_require__(/*! ./FirstApp/Rules/ResetAppSettingsAndLogout.js */ "./build.definitions/FirstApp/Rules/ResetAppSettingsAndLogout.js")
let firstapp_services_firstapp_service = __webpack_require__(/*! ./FirstApp/Services/FirstApp.service */ "./build.definitions/FirstApp/Services/FirstApp.service")
let firstapp_services_sampleservicev2_service = __webpack_require__(/*! ./FirstApp/Services/SampleServiceV2.service */ "./build.definitions/FirstApp/Services/SampleServiceV2.service")
let firstapp_styles_styles_css = __webpack_require__(/*! ./FirstApp/Styles/Styles.css */ "./build.definitions/FirstApp/Styles/Styles.css")
let firstapp_styles_styles_json = __webpack_require__(/*! ./FirstApp/Styles/Styles.json */ "./build.definitions/FirstApp/Styles/Styles.json")
let firstapp_styles_styles_less = __webpack_require__(/*! ./FirstApp/Styles/Styles.less */ "./build.definitions/FirstApp/Styles/Styles.less")
let firstapp_styles_styles_nss = __webpack_require__(/*! ./FirstApp/Styles/Styles.nss */ "./build.definitions/FirstApp/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	firstapp_actions_appupdate_action : firstapp_actions_appupdate_action,
	firstapp_actions_appupdatefailuremessage_action : firstapp_actions_appupdatefailuremessage_action,
	firstapp_actions_appupdateprogressbanner_action : firstapp_actions_appupdateprogressbanner_action,
	firstapp_actions_appupdatesuccessmessage_action : firstapp_actions_appupdatesuccessmessage_action,
	firstapp_actions_closemodalpage_cancel_action : firstapp_actions_closemodalpage_cancel_action,
	firstapp_actions_closemodalpage_complete_action : firstapp_actions_closemodalpage_complete_action,
	firstapp_actions_closepage_action : firstapp_actions_closepage_action,
	firstapp_actions_confirmation_action : firstapp_actions_confirmation_action,
	firstapp_actions_createcustomerentityfailuremessage_action : firstapp_actions_createcustomerentityfailuremessage_action,
	firstapp_actions_createentityfailuremessage_action : firstapp_actions_createentityfailuremessage_action,
	firstapp_actions_createentitysuccessmessage_action : firstapp_actions_createentitysuccessmessage_action,
	firstapp_actions_createsalesorderheaderentityfailuremessage_action : firstapp_actions_createsalesorderheaderentityfailuremessage_action,
	firstapp_actions_customers_createentity_action : firstapp_actions_customers_createentity_action,
	firstapp_actions_customers_deleteconfirmation_action : firstapp_actions_customers_deleteconfirmation_action,
	firstapp_actions_customers_deleteentity_action : firstapp_actions_customers_deleteentity_action,
	firstapp_actions_customers_updateentity_action : firstapp_actions_customers_updateentity_action,
	firstapp_actions_deleteconfirmation_action : firstapp_actions_deleteconfirmation_action,
	firstapp_actions_deletecustomerentityfailuremessage_action : firstapp_actions_deletecustomerentityfailuremessage_action,
	firstapp_actions_deleteentityfailuremessage_action : firstapp_actions_deleteentityfailuremessage_action,
	firstapp_actions_deleteentitysuccessmessage_action : firstapp_actions_deleteentitysuccessmessage_action,
	firstapp_actions_errorarchive_errorarchive_syncfailure_action : firstapp_actions_errorarchive_errorarchive_syncfailure_action,
	firstapp_actions_errorarchive_navtoerrorarchive_detail_action : firstapp_actions_errorarchive_navtoerrorarchive_detail_action,
	firstapp_actions_errorarchive_navtoerrorarchive_list_action : firstapp_actions_errorarchive_navtoerrorarchive_list_action,
	firstapp_actions_logout_action : firstapp_actions_logout_action,
	firstapp_actions_logoutmessage_action : firstapp_actions_logoutmessage_action,
	firstapp_actions_logsetlevel_action : firstapp_actions_logsetlevel_action,
	firstapp_actions_logsetstate_action : firstapp_actions_logsetstate_action,
	firstapp_actions_logupload_action : firstapp_actions_logupload_action,
	firstapp_actions_loguploadfailure_action : firstapp_actions_loguploadfailure_action,
	firstapp_actions_loguploadsuccessful_action : firstapp_actions_loguploadsuccessful_action,
	firstapp_actions_navtocustomers_create_action : firstapp_actions_navtocustomers_create_action,
	firstapp_actions_navtocustomers_detail_action : firstapp_actions_navtocustomers_detail_action,
	firstapp_actions_navtocustomers_edit_action : firstapp_actions_navtocustomers_edit_action,
	firstapp_actions_navtocustomers_list_action : firstapp_actions_navtocustomers_list_action,
	firstapp_actions_navtocustomers_orders_action : firstapp_actions_navtocustomers_orders_action,
	firstapp_actions_navtosalesorderheaders_create_action : firstapp_actions_navtosalesorderheaders_create_action,
	firstapp_actions_navtosalesorders_details_action : firstapp_actions_navtosalesorders_details_action,
	firstapp_actions_onwillupdate_action : firstapp_actions_onwillupdate_action,
	firstapp_actions_products_navtoproducts_create_action : firstapp_actions_products_navtoproducts_create_action,
	firstapp_actions_products_navtoproducts_detail_action : firstapp_actions_products_navtoproducts_detail_action,
	firstapp_actions_products_navtoproducts_edit_action : firstapp_actions_products_navtoproducts_edit_action,
	firstapp_actions_products_navtoproducts_list_action : firstapp_actions_products_navtoproducts_list_action,
	firstapp_actions_products_products_createentity_action : firstapp_actions_products_products_createentity_action,
	firstapp_actions_products_products_deleteentity_action : firstapp_actions_products_products_deleteentity_action,
	firstapp_actions_products_products_detailpopover_action : firstapp_actions_products_products_detailpopover_action,
	firstapp_actions_products_products_opendocument_action : firstapp_actions_products_products_opendocument_action,
	firstapp_actions_products_products_updateentity_action : firstapp_actions_products_products_updateentity_action,
	firstapp_actions_salesorderheaders_createentity_action : firstapp_actions_salesorderheaders_createentity_action,
	firstapp_actions_service_closeoffline_action : firstapp_actions_service_closeoffline_action,
	firstapp_actions_service_closeofflinefailuremessage_action : firstapp_actions_service_closeofflinefailuremessage_action,
	firstapp_actions_service_closeofflinesuccessmessage_action : firstapp_actions_service_closeofflinesuccessmessage_action,
	firstapp_actions_service_downloadoffline_action : firstapp_actions_service_downloadoffline_action,
	firstapp_actions_service_downloadstartedmessage_action : firstapp_actions_service_downloadstartedmessage_action,
	firstapp_actions_service_initializeoffline_action : firstapp_actions_service_initializeoffline_action,
	firstapp_actions_service_initializeofflinefailuremessage_action : firstapp_actions_service_initializeofflinefailuremessage_action,
	firstapp_actions_service_initializeofflinesuccessmessage_action : firstapp_actions_service_initializeofflinesuccessmessage_action,
	firstapp_actions_service_syncfailuremessage_action : firstapp_actions_service_syncfailuremessage_action,
	firstapp_actions_service_syncstartedmessage_action : firstapp_actions_service_syncstartedmessage_action,
	firstapp_actions_service_syncsuccessmessage_action : firstapp_actions_service_syncsuccessmessage_action,
	firstapp_actions_service_uploadoffline_action : firstapp_actions_service_uploadoffline_action,
	firstapp_actions_updatecustomerentityfailuremessage_action : firstapp_actions_updatecustomerentityfailuremessage_action,
	firstapp_actions_updateentityfailuremessage_action : firstapp_actions_updateentityfailuremessage_action,
	firstapp_actions_updateentitysuccessmessage_action : firstapp_actions_updateentitysuccessmessage_action,
	firstapp_actions_validationfailure_action : firstapp_actions_validationfailure_action,
	firstapp_globals_appdefinition_version_global : firstapp_globals_appdefinition_version_global,
	firstapp_i18n_i18n_properties : firstapp_i18n_i18n_properties,
	firstapp_jsconfig_json : firstapp_jsconfig_json,
	firstapp_pages_customers_create_page : firstapp_pages_customers_create_page,
	firstapp_pages_customers_detail_page : firstapp_pages_customers_detail_page,
	firstapp_pages_customers_edit_page : firstapp_pages_customers_edit_page,
	firstapp_pages_customers_list_page : firstapp_pages_customers_list_page,
	firstapp_pages_customers_orders_page : firstapp_pages_customers_orders_page,
	firstapp_pages_errorarchive_errorarchive_detail_page : firstapp_pages_errorarchive_errorarchive_detail_page,
	firstapp_pages_errorarchive_errorarchive_list_page : firstapp_pages_errorarchive_errorarchive_list_page,
	firstapp_pages_main_page : firstapp_pages_main_page,
	firstapp_pages_products_products_create_page : firstapp_pages_products_products_create_page,
	firstapp_pages_products_products_detail_page : firstapp_pages_products_products_detail_page,
	firstapp_pages_products_products_edit_page : firstapp_pages_products_products_edit_page,
	firstapp_pages_products_products_list_page : firstapp_pages_products_products_list_page,
	firstapp_pages_salesorderheaders_create_page : firstapp_pages_salesorderheaders_create_page,
	firstapp_pages_salesorders_details_page : firstapp_pages_salesorders_details_page,
	firstapp_rules_appupdatefailure_js : firstapp_rules_appupdatefailure_js,
	firstapp_rules_appupdatesuccess_js : firstapp_rules_appupdatesuccess_js,
	firstapp_rules_customers_deleteconfirmation_js : firstapp_rules_customers_deleteconfirmation_js,
	firstapp_rules_customers_ordercount_js : firstapp_rules_customers_ordercount_js,
	firstapp_rules_emailvalidation_js : firstapp_rules_emailvalidation_js,
	firstapp_rules_errorarchive_errorarchive_checkforsyncerror_js : firstapp_rules_errorarchive_errorarchive_checkforsyncerror_js,
	firstapp_rules_onwillupdate_js : firstapp_rules_onwillupdate_js,
	firstapp_rules_opensapcom_js : firstapp_rules_opensapcom_js,
	firstapp_rules_opensapmobilecards_js : firstapp_rules_opensapmobilecards_js,
	firstapp_rules_products_products_deleteconfirmation_js : firstapp_rules_products_products_deleteconfirmation_js,
	firstapp_rules_resetappsettingsandlogout_js : firstapp_rules_resetappsettingsandlogout_js,
	firstapp_services_firstapp_service : firstapp_services_firstapp_service,
	firstapp_services_sampleservicev2_service : firstapp_services_sampleservicev2_service,
	firstapp_styles_styles_css : firstapp_styles_styles_css,
	firstapp_styles_styles_json : firstapp_styles_styles_json,
	firstapp_styles_styles_less : firstapp_styles_styles_less,
	firstapp_styles_styles_nss : firstapp_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/FirstApp/Styles/Styles.json":
/*!*******************************************************!*\
  !*** ./build.definitions/FirstApp/Styles/Styles.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"ActionBar":{"font-color":"white","/* Define a cor do texto como branco */\\n  background-color":"#EB10D4","text-align":"center","align-items":"center"},"MyCustomerButton":{"font-color":"black","background-color":"#EB95DF"},"ObjectTableTitle":{"font-color":"white"},"objectHeaderBodyText":{"font-color":"white"},"objectHeaderDescription":{"font-color":"white"},"objectHeaderFootNote":{"font-color":"green"},"objectHeaderHeadline":{"font-color":"#ff00ff"},"objectHeaderBackground":{"background-color":"#DC143C"},"objectHeaderStatus":{"font-color":"red","font-style":"italic","font-size":"18"},"objectHeaderSubhead":{"font-color":"yellow"},"objectHeaderSubStatus":{"font-color":"white","font-style":"italic","font-size":"18"}}');

/***/ }),

/***/ "./build.definitions/FirstApp/jsconfig.json":
/*!**************************************************!*\
  !*** ./build.definitions/FirstApp/jsconfig.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map