# MobileCaddy Electron Wrapper Starter

A basic app that uses [MobileCaddy](https://mobliecaddy.net) to run fully offline, customisable Salesforce desktop apps.

A basic application needs just additions:

## package.json
- add the `mobilecaddy-electron` dependency
- Our file also needs these config items defined;
```json
  "name": "mobilecaddy-desktop",
  "productName": "mobilecaddy-desktop",
  "buildName" : "BIZ001",
  "loginEndpoint": "https://login.salesforce.com",
  "salesforceApiVersion" : "v30.0"
```
- `buildName` should be set to match your MobileCaddy app as per the Salesforce config
- `loginEndpoint` can be set matched your environment (e.g. *test.salesforce.com* for a sandbox)

## config.json

This file contains some config settings for our app. Supported items are as per this example;

```
{
  "mainWindowWidth": 800,
  "mainWindowHeight": 800,
  "mainWindowMinWidth":800,
  "mainWindowMinHeight": 600
}
```


## config-priv.json
Note this file is ignored by git, by default. This is done as it contains the Salesforce Connected app Consumer Key. You should create a file that looks like the following;
```
{
	"salesforce_consumer_key" : "<YOUR_CONSUMER_KEY_GOES HERE>"
}
```
The publicly known *SalesforceMobileSDK Sample App* consumer key can be used during development, and so your *config-priv.json* would look like this;
```
{
	"salesforce_consumer_key" : "3MVG9Iu66FKeHhINkB1l7xt7kR8czFcCTUhgoA8Ol2Ltf1eYHOU4SqQRSEitYFDUpqRWcoQ2.dBv_a1Dyu5xa"
}
```

You **should** replace thhis with a real key for your own connected app. When configuring your connected app you must specify the callback URL to be *testsfdc:///mobilesdk/detect/oauth/done*.

This file can also optionally take a `prodBuild` item that should be set to true when building for packaging. This affects internal paths.

It is possible to turn "debug" on (i.e. open dev tools on the main window) by setting the `debug` argument in the config-priv.json file. This defaults to `false`.


## main.js
- Add the the following. This kicks off authentication to Salesforce on the first run up
```javascript
  const mobilecaddy = require('mobilecaddy-electron')
```

## launcher.html

- This file is needed by the MobileCaddy libs. It's used as a springboard/root for our remote SPA
- Needs these lines in the `head`
```html
  <script src="node_modules/mobilecaddy-electron/lib/force.js"></script>
  <script src="node_modules/mobilecaddy-electron/lib/launcher.js"></script>
```


## To Use

Fork the repo, or download the zip. Install deps and run.

```bash
# Install dependencies
npm install

# Normal run
npm start

# Or run with debug
npm start dbg

# Or clear all saved data - This will run, clear and quit
npm start clear
```


## Packaging

Packaging is handled by the [Electron Builder](https://github.com/electron-userland/electron-builder) package. Several options can be configured in the `package.json`. Further info can be found on their wiki, but key items are listed here, and *should* be set specifically for each product

| Name |Description|
| --- | --- |
| version ||
| description||
| buildName | Should match the *Device App Name* as specified on Salesforce for the Mobile Application |
| build.appId| The application id. Used as [CFBundleIdentifier](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-102070) for MacOS and as [Application User Model ID](https://msdn.microsoft.com/en-us/library/windows/desktop/dd378459(v=vs.85).aspx) for Windows (NSIS target only, Squirrel.Windows not supported). Defaults to com.electron.${name}. It is strongly recommended that an explicit ID be set.|
| build.copyright | The human-readable copyright line for the app. Defaults to `Copyright © year author`.|
| build.productName | See [Electron Builder docs](https://github.com/electron-userland/electron-builder/wiki/Options#AppMetadata-productName)|
| build.win.icon | A .ico file |
| legalTrademark | Legal Trademark text, such as `MobileCaddy is a legal trademark of MobileCaddy`|

A EULA License placeholder is included by default in in the `build/license.txt` file, or can be configured further as per the  [Electron Builder docs](https://github.com/electron-userland/electron-builder/wiki/Options). This *should be* modified or removed before publication|