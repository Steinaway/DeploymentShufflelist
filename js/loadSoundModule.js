const Soundmodule = (function(){
  const playlistView = document.getElementById("apples");
  const playListModule = document.querySelector(".playListModule");
  const soundCloudAppend = document.querySelector("#playlistAppend");
  var htmlResponse = "";
  var protagonist = document.querySelector("#helloImTheProtagonist");
  var addGenres = document.querySelector("#addGenres");
  var yellow = 0;

  var chipGenre = document.querySelector(".chipGenre");
  console.log(addGenres);
  console.log(chipGenre);
  var soundCloudGenreList = new Array();

  playListModule.childNodes.forEach(function(i) {
    if(i>=3) {
    console.log(this.childNodes[1].innerText.replace("X",""));
    }
  });



  function tryGenres() {
     SC.get('/tracks', {
       q: 'Ivan B'
       }).then(function(tracks) {

      });
  }

  const myTemplateEngine = {
    render: (template , dataObject) => {
        let fragString = template.innerHTML,
         target = fragString.replace(dataObject.dataID,""+dataObject.trend);
         target2 = target.replace(dataObject.name,dataObject.append);
        let elem = document.createElement("div");
         elem.innerHTML = (target2);
         elem.className = template.className;
         elem.dataId = yellow;
         yellow++;
         console.log(elem);
         return elem;
    },
  };

  function generateChip() {
    playListModule.appendChild(myTemplateEngine.render(chipGenre,{name:"genre",append:protagonist.value,dataID:"ID",trend:yellow}));
    soundCloudGenreList.push(protagonist.value);
  }

  function authenticate() {
    SC.initialize({
      client_id: 'Default Default',
      redirect_uri: 'https://soundcloud.com/default-default-653983144'
    });
  };

  function fetchPlaylist(playList) {
    SC.oEmbed(playList, { auto_play: true }).then(function(oEmbed) {
      console.log('oEmbed response: ', oEmbed);
      oEmbed.height = "500px";
        htmlResponse = oEmbed.html;
        //console.log(  docuemnt.querySelector(".playlistModule"));
      });
    }
    authenticate();
    fetchPlaylist("https://soundcloud.com/jonathan-vela-8/sets/about-you-ivan-b");




    protagonist.addEventListener("click", function() {
      this.value = null;
    });
    addGenres.addEventListener("click",function(){
      generateChip();
      document.querySelectorAll(".remove").forEach(function(){
        this.addEventListener("click",function() {
          //console.log(this.parentNode);
          this.parentNode.parentNode.remove();
          //soundCloudGenreList.splice(soundCloudGenreList.indexOf(this.parentNode.firstChild.InnerHTML)+1,1);
          //console.log(soundCloudGenreList[soundCloudGenreList.indexOf(this.parentNode.firstChild.InnerHTML)]);
          yellow--;
        })
      });
    });
    setTimeout(_=>{
    soundCloudAppend.innerHTML = htmlResponse;
    },10000);

    function generateGenreArray() {
      console.log(playListModule.childNodes);
    };

    return {
      genreArray:generateGenreArray
    }
})();
