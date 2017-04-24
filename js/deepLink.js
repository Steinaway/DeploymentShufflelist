var deepLinkModule = (function(link) {
    //document.querySelector("#" + link.slize(-2) ).click();

    if(link.includes("?")){
      openLinkTab(link.slice(-2));
    }

    function openLinkTab(buttonId) {
      document.getElementById(buttonId).click();
    }
    //faster than query Selector

    function onButtonChange(element) {
      var b = element.id;
      var d = document.URL.split("?");
      document.URL = d[0] + "?" + b;
    }

    return {
      linkTab:openLinkTab,
      linkChange:onButtonChange,
    }
})(document.URL);
