console.log("navbar controller");

var initNavIcon = function(){
  console.log("initNavIcon()");
  document.getElementById('options-menu').addEventListener('click', function(){
    toggleOptionsMenu();
  });
}

var toggleOptionsMenu = function(){
  console.log('toggleOptionsMenu()');
  var navbarModal = document.getElementById('navbar-modal');
  if(navbarModal.classList.contains('active-modal')){
    //Close modal
    navbarModal.classList.remove('active-modal');
  }
  else{
    //open modal
    navbarModal.classList.add('active-modal');
  }
}
initNavIcon();
