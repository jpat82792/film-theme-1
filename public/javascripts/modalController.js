var initializeUi = function(){
  var contactButton = document.getElementById('contact');
  var newsletterButton = document.getElementById('newsletter');
  contactButton.onclick = function(){openModal("contact");};
  var contactModal = document.getElementById('contact-modal');
  contactModal.children[0].onclick = function(){dismissViaBackground(contactModal)}
  contactModal.children[0].children[0].addEventListener("click",function(event){event.stopPropagation();}, false);
  contactModal.getElementsByClassName('close-modal-button')[0].addEventListener("click", function(){
    dismissViaBackground(contactModal);
  })
  var newsletterModal = document.getElementById('newsletter-modal');
  newsletterModal.children[0].onclick =function(){dismissViaBackground(newsletterModal)};
  newsletterButton.onclick = function(){openModal("newsletter");};
  newsletterModal.children[0].children[0].addEventListener("click",function(event){event.stopPropagation();}, false);
  newsletterModal.getElementsByClassName('close-modal-button')[0].addEventListener("click", function(){
    dismissViaBackground(newsletterModal);
  })
}
initializeUi();

var openModal = function(buttonId, button){
  if("contact" === buttonId){
    console.log("contactModal");
    toggleModal("contact-modal");
 
  }
  else{
    console.log("newsletterModal");
    toggleModal("newsletter-modal");
  }
}

var toggleModal = function(parameter){
  var elementToShow = document.getElementById(parameter);
  var toggleState = elementToShow.classList.contains('active-modal');
  if(toggleState){
    elementToShow.classList.remove('active-modal')
  }
  else{
    console.log("modal is inactive, turning on");
    elementToShow.classList.add('active-modal');
  }
}

var dismissViaBackground = function(modal){
  console.log("dismissViaBackground()");
  modal.classList.remove('active-modal');
}
