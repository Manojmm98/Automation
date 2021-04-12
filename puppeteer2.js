let puppeteer = require("puppeteer");
let browserwilllbeopenpromise= puppeteer.launch({ headless: false});
browserwilllbeopenpromise
  .then(function(browserInstance){
      let PageWillBeClickedpromise = browserInstance.newPage();
      return PageWillBeClickedpromise;
  }).then(function (newPage){
      let gotopagepromise = newPage.goto("https://www.google.com");
      return gotopagepromise;
  }).then(function(){
      let pepcodingwillbeclickprom = newPage.click("#input","pepcoding") 
      return pepcodingwillbeclickprom;
  }).catch(function(err){
      console.log("error");
  })
