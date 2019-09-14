function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
   const rankedLists = document.querySelectorAll('.ranked-list')
   
   for(let i = 0; i < rankedLists.length; i++ ){
     rankedLists[i].innerHTML = parseInt((rankedLists[i]).innerHTML) + parseInt(n)
   }
}

function deepestChild(){
  const deep = document.querySelector('div#grand-node');
  return deep[deep.length -1]
}