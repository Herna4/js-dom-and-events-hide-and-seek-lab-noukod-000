function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
   const rankedLists = document.querySelectorAll('.ranked-list')
   
   for(let i = 1, i < rankedLists.length; i++ ){
     
   }
}

 for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).toEqual(start + i + 3)
      }
      
      for (let i = 0; i < lis.length; i++) {
      lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
    }