{
	"_Name": "FirstApp",
	"Version": "/FirstApp/Globals/AppDefinition_Version.global",
	"MainPage": "/FirstApp/Pages/Main.page",
	"OnLaunch": [
		"/FirstApp/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/FirstApp/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/FirstApp/Actions/Service/InitializeOffline.action",
	"Styles": "/FirstApp/Styles/Styles.less",
	"Localization": "/FirstApp/i18n/i18n.properties",
	"_SchemaVersion": "23.8"
}