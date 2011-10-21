function addExtraIcons(){
    $(".uiStreamFooter:not(.fucked)").addClass("fucked")
    .after('<div class="fbExtraIcons">' + 
    '<ul class="fbei_icons">' +
    '<li id="fbei_dislike"><span class="counter">44</span></li>'+
    '<li id="fbei_fuck">4</li>'+
            '<li id="fbei_geek">1</li>'+
            '<li id="fbei_hi5">4</li>'+
            '<li id="fbei_loser">5</li>'+
            '<li id="fbei_love">34</li>'+
            '<li id="fbei_ok">123</li>'+
            '<li id="fbei_rock">66</li>'+
            '<li id="fbei_support">33</li>'+
      '</ul>' +

    '</div>');
};

addExtraIcons();

$(document).ready(function(){
  document.addEventListener("DOMNodeInserted", function(event){
    addExtraIcons();
  }, false);
});


  
  

