const url = 'https://dubnium.curesium.com/assets/data/intervals.json';
var intervals;
var found;

fetch(url).then(
    function(u){ return u.json();}
  ).then(
    function(json){
      intervals = json;
    }
  )

function search() {
  found = intervals.find(element => element.first == 1);
  console.log(found)
}
