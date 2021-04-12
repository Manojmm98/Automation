let puppeteer = require("puppeteer");
let { codes } = require("./code");
let fs = require("fs");
let gtab;
console.log("Before");
let browserPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized",]
})
browserPromise
    .then(function (browserInstance) {
        //go to new page
        let newTabPromise = browserInstance.newPage();
        return newTabPromise;
    })
    .then(function (newTab) {
        // go to link which is given through goto function
        let loginPageWillBeopenedPromise = newTab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
        // gtab is equal to newtab gtab created before
        gtab = newTab;
        return loginPageWillBeopenedPromise;
    })
    .then(function () {
        let emailWillBeTypedPromise = gtab.type("#input-1", "cocem83132@0pppp.com", { delay: 200 });
        return emailWillBeTypedPromise;
    }).then(function () {
        let passwordWillBeTypedPromise = gtab.type("#input-2", "manoj1234", { delay: 200 });
        return passwordWillBeTypedPromise;
    }).then(function () {
        let loginPageWillBeClickedpromise = gtab.
        click("button[data-analytics='LoginPassword']");
        return loginPageWillBeClickedpromise;
    }).then(function () {
        let clickIPKIt = waitAndClick
        (".card-content h3[title='Interview Preparation Kit']");
        return clickIPKIt;
    }).then(function () {
        let warmupClick = 
        waitAndClick("a[data-attr1='warmup']");
        return warmupClick;
    }).then(function () {
        return gtab.url();
    }).then(function (url) {
        console.log(url);
        let questionObj = codes[0];
        questionSolver(url, questionObj.soln,questionObj.qName);

    })
    .catch(function (err) {
        console.log(err);
    })
function waitAndClick(selector) {
    return new Promise(function (resolve, reject) {
        let selectorWaitPromise = gtab.waitForSelector(selector, 
            { visible: true });
        selectorWaitPromise
            .then(function () {
                let selectorClickPromise = gtab.click(selector);
                return selectorClickPromise;
            }).then(function () {
                resolve();
            }).catch(function () {
                reject(err);
            })
    })
}
function questionSolver(modulepageUrl, code, questionName) {
    return new Promise(function (resolve, reject) {
         
        let reachedPageUrlPromise = gtab.goto(modulepageUrl);
        reachedPageUrlPromise
            .then(function () {
                function browserconsolerunFn(questionName) {
                    let allH4Elem = document.querySelectorAll("h4");
                    let textArr = [];
                    for (let i = 0; i < allH4Elem.length; i++) {
                        let myQuestion = allH4Elem[i]
                        .innerText.split("\n")[0];
                        textArr.push(myQuestion);
                    }
                    let idx = textArr.indexOf(questionName);
                    
                    allH4Elem[idx].click();
                }
                let pageClickPromise = 
                gtab.evaluate(browserconsolerunFn, questionName);
                return pageClickPromise;
            }).then(function(){
                resolve();
            }) 
         
    })
}
