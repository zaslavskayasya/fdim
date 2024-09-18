/* Set the width of the side navigation to 250px */
console.log("tse");

let openMenuBtn = document.querySelector('.menu-trigger');
let closeMenuBtn = document.querySelector('.closebutton');

let openPhonesBtn = document.querySelector('.trigger-phone-block');
let closePhonesSide = document.querySelector('.close-phones');

openMenuBtn.addEventListener('click', () => {
  document.querySelector(".layout").classList.add('active');
  document.getElementById("mySidenav").classList.add('open');
});


closeMenuBtn.addEventListener('click', () => {
  document.querySelector(".layout").classList.remove('active');
  document.getElementById("mySidenav").classList.remove('open');  
});

openPhonesBtn.addEventListener('click', () => {
  document.querySelector(".phones-sidenav").classList.add('open');
});

closePhonesSide.addEventListener('click', () => {
  document.querySelector(".phones-sidenav").classList.remove('open');

}); 



document.addEventListener("DOMContentLoaded", function() {
  const tablinks = document.querySelectorAll(".tablinks");
  const tabcontents = document.querySelectorAll(".tabcontent");

  function openCity(cityName) {
    tabcontents.forEach(content => content.style.display = "none");
    tablinks.forEach(link => link.classList.remove("active"));
    
    document.getElementById(cityName).style.display = "block";
  }

  tablinks.forEach(button => {
    button.addEventListener("click", function() {
      const cityName = this.getAttribute("data-tab");
      openCity(cityName);
      this.classList.add("active");
    });
  });

  // Відкрити першу вкладку за замовчуванням
  tablinks[0].click();
});


document.addEventListener("DOMContentLoaded", function() {
  const tablinks = document.querySelectorAll(".tablinks2");
  const tabcontents = document.querySelectorAll(".tabcontent2");

  function openCity(cityName) {
    tabcontents.forEach(content => content.style.display = "none");
    tablinks.forEach(link => link.classList.remove("active"));
    
    document.getElementById(cityName).style.display = "block";
  }

  tablinks.forEach(button => {
    button.addEventListener("click", function() {
      const cityName = this.getAttribute("data-tab");
      openCity(cityName);
      this.classList.add("active");
    });
  });

  // Відкрити першу вкладку за замовчуванням
  tablinks[0].click();
});