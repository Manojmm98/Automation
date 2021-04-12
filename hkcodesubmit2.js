let puppeteer = require("puppeteer");
//let {email,password}= require("./secret");
let browserwillbeopenpromise = puppeteer.launch({headless:false});
browserwillbeopenpromise.then(function(browserInstance){
    let newtabwillbeopenpromise = browserInstance.newPage();
    return newtabwillbeopenpromise;
}).then(function(newPage){
    let linkpagewillbeopenpromise = newPage.goto("https://www.hackerrank.com/interview/interview-preparation-kit");
    return linkpagewillbeopenpromise;
}).then(function(){
    console.log("page is now opened")
})