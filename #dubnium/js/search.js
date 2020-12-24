fetch('https://dubnium.curesium.com/assets/data/intervals.json').then(
    function(u){ return u.json();}
  ).then(
    function(json){
      intervals = json;
    }
  )
