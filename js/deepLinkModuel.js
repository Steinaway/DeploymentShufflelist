var deepLinkModule = (function(link) {
  window.onload => {
    //document.querySelector("#" + link.slize(-2) ).click();
    document.getElementById(link.slice(-2)).click();//faster than query Selector
  };
})(document.URL);
