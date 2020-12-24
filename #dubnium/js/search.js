const url = 'https://dubnium.curesium.com/assets/data/intervals.json';
var songList;

fetch(url).then(
    function(u){ return u.json();}
  ).then(
    function(json){
      songList = json;
    }
  )
