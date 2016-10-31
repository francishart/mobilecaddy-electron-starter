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

