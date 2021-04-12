let puppeteer = require("puppeteer");
let browserPromise = puppeteer.launch({ headless: false });
let gTab;
browserPromise
    .then(function (browser) {
        let newTabPromise = browser.newPage();
        return newTabPromise;
    })
    .then(function (newTab) {
        gTab = newTab;
        let Hacerrankloginpage = newTab.goto("https://www.hackerrank.com/auth/login");
        return Hacerrankloginpage;
    }).then(function () {
        let textWillBeTypedPromise = gTab.type("#input-1","Manoj M",{delay_300});
        return textWillBeTypedPromise;
     })
