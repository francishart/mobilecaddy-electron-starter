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
Note this file is ignored by git, by default. This is done as it contains the Salesforce Connected app Consumer Key. You should create a file that looks like the following;
```
{
	"salesforce_consumer_key" : "<YOUR_CONSUMER_KEY_GOES HERE>"
}
```
The publicly known *SalesforceMobileSDK Sample App* consumer key can be used during development, and so your *config.json* would look like this;
```
{
	"salesforce_consumer_key" : "3MVG9Iu66FKeHhINkB1l7xt7kR8czFcCTUhgoA8Ol2Ltf1eYHOU4SqQRSEitYFDUpqRWcoQ2.dBv_a1Dyu5xa"
}
```

You **should** replace thhis with a real key for your own connected app. When configuring your connected app you must specify the callback URL to be *testsfdc:///mobilesdk/detect/oauth/done*.


## main.js
- Add the the following. This kicks off authentication to Salesforce on the first run up
```javascript
  const mobilecaddy = require('mobilecaddy-electron')
```

## launcher.html

- This file is needed by the MobileCaddy libs. It's used as a springboard/root for our remote SPA
- Needs these lines in the `head`
```html
  <script src="./node-modules/mobilecaddy-electron/lib/force.js"></script>
  <script src="./node-modules/mobilecaddy-electron/lib/launcher.js"></script>
```


## To Use

Clone the repo, install deps and run.

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

