/* Set the width of the side navigation to 250px */
console.log("tse");

let openMenuBtn = document.querySelector('.menu-trigger');
let closeMenuBtn = document.querySelector('.closebutton');

let openPhonesBtn = document.querySelector('.trigger-phone-block');
let closePhonesSide = document.querySelector('.close-phones');


let closeLayout = document.querySelector('#closelayout');

openMenuBtn.addEventListener('click', () => {
  document.querySelector(".layout").classList.add('active');
  document.getElementById("mySidenav").classList.add('open');
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
  document.querySelector(".layout").classList.remove('active');
  document.getElementById("mySidenav").classList.remove('open'); 
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
});

openPhonesBtn.addEventListener('click', () => {
  document.querySelector(".phones-sidenav").classList.add('open');
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
});

closePhonesSide.addEventListener('click', () => {
  document.querySelector(".phones-sidenav").classList.remove('open');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}); 


closeLayout.addEventListener('click', () => {

  document.querySelector(".layout").classList.remove('active');
  document.getElementById("mySidenav").classList.remove('open'); 
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
})


let menuLinks = document.querySelectorAll('.menu-link');
let sidenav = document.getElementById('mySidenav');
let body = document.body;
let layout = document.querySelector(".layout");


document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', function() {
    // Знаходимо найближчу кнопку submit
    const submitButton = this.closest('form').querySelector('button[type="submit"]');
    
    // Додаємо або забираємо клас в залежності від введеного значення
    if (this.value.trim() !== '') {
      submitButton.classList.remove('inactive');
      submitButton.classList.add('active');
    } else {
      submitButton.classList.remove('active');
      submitButton.classList.add('inactive');
    }
  });
});


menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Запобігаємо стандартній поведінці посилання

    // Отримуємо ID секції, до якої потрібно скролити
    let targetId = this.getAttribute('href').substring(1);
    let targetSection = document.getElementById(targetId);

    // Закриваємо бокове меню
    sidenav.classList.remove('open');
    layout.classList.remove('active');
    body.style.overflow = '';
    document.documentElement.style.overflow = '';

    // Скролимо до відповідної секції
    targetSection.scrollIntoView({
      behavior: 'smooth', // Плавний скрол
      block: 'start'
    });
  });
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
    
    
    document.getElementById(cityName).style.display = "block";
  }

  if (!!tablinks.length){
    openCity(tablinks[0]?.dataset.tab);
  }

  tablinks.forEach((button, idx) => {
    button.addEventListener("click", function() {
      tablinks.forEach(link => link.classList.remove("active"));
      const cityName = this.dataset.tab;
      openCity(cityName);
      this.classList.add("active");


      if (window.innerWidth > 760) {
        window.scrollTo({
            top: this.offsetTop,
            behavior: 'smooth'
        });
      }
    });
  });

  // Відкрити першу вкладку за замовчуванням
  // tablinks[0].click();
});

const form = document.getElementById('application-form');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const contact = document.getElementById('contact');
  const agreement = document.getElementById('data-agreement');

  let isValid = true;

  // Очищуємо попередні помилки
  clearErrors();

  // Перевірка поля "Ім'я"
  if (name.value.length < 2) {
    showError(name, 'Це поле має бути заповнене');
    isValid = false;
  }

  // Перевірка поля "Телефон / E-mail"
  if (!validateEmailOrPhone(contact.value)) {
    showError(contact, 'Перевірте правильність введення телефону або E-mail');
    isValid = false;
  }

  // Перевірка чекбокса
  if (!agreement.checked) {
    showError(agreement, 'Це поле має бути заповнене');
    isValid = false;
  }

  if (isValid) {
    // Показуємо попап після успішної валідації
    popup.classList.remove('hidden');

    // Відправляємо форму
    const formData = new FormData(form);
    fetch('send.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        console.log('Успішно відправлено', data);
      })
      .catch(error => console.error('Помилка при відправці форми', error));
  }
});

// Валідація під час введення в поля
document.getElementById('name').addEventListener('input', function() {
  if (this.value.length >= 2) {
    clearError(this);
  }
});

document.getElementById('contact').addEventListener('input', function() {
  if (validateEmailOrPhone(this.value)) {
    clearError(this);
  }
});

document.getElementById('data-agreement').addEventListener('change', function() {
  if (this.checked) {
    clearError(this);
  }
});

// Функція для видалення помилки з поля
function clearError(element) {
  const errorText = element.nextElementSibling;
  if (errorText && errorText.classList.contains('error')) {
    errorText.remove();
    element.style.borderBottom = '2px solid black';
  }
}

// Функція для очищення всіх попередніх помилок
function clearErrors() {
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(function (el) {
    el.remove();
  });
  const inputElements = document.querySelectorAll('input');
  inputElements.forEach(function (el) {
    el.style.borderBottom = '2px solid black';
  });
}

// Функція для відображення помилки
function showError(element, message) {
  let errorText = element.nextElementSibling;
  if (!errorText || errorText.className !== 'error') {
    errorText = document.createElement('small');
    errorText.className = 'error';
    errorText.style.color = 'red';
    errorText.innerText = message;
    element.parentNode.insertBefore(errorText, element.nextSibling);
    element.style.borderBottom = '2px solid red';
  }
}

// Валідація для телефону або E-mail
function validateEmailOrPhone(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]*$/;
  if (emailRegex.test(input)) {
    return true;
  }
  if (phoneRegex.test(input) && input.length >= 6) {
    return true;
  }
  return false;
}


const form2 = document.getElementById('application-form2');

form2.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name-form2');
  const contact = document.getElementById('contact-form2');
  const agreement = document.getElementById('data-agreement-form2');

  let isValid = true;

  // Очищуємо попередні помилки
  clearErrors();

  // Перевірка поля "Ім'я"
  if (name.value.length < 2) {
    showError(name, 'Це поле має бути заповнене');
    isValid = false;
  }

  // Перевірка поля "Телефон / E-mail"
  if (!validateEmailOrPhone(contact.value)) {
    showError(contact, 'Перевірте правильність введення телефону або E-mail');
    isValid = false;
  }

  // Перевірка чекбокса
  if (!agreement.checked) {
    showError(agreement, 'Це поле має бути заповнене');
    isValid = false;
  }

  if (isValid) {
    // Показуємо попап після успішної валідації
    popup.classList.remove('hidden');

    // Відправляємо форму, якщо все вірно
    const formData = new FormData(form2);
    fetch('send2.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        console.log('Успішно відправлено', data);
        // Тут можна додати функціонал для показу попапу або інших дій після успішної відправки
      })
      .catch(error => console.error('Помилка при відправці форми', error));
  }
});

// Валідація під час введення в поля
document.getElementById('name-form2').addEventListener('input', function() {
  if (this.value.length >= 2) {
    clearError(this);
  }
});

document.getElementById('contact-form2').addEventListener('input', function() {
  if (validateEmailOrPhone(this.value)) {
    clearError(this);
  }
});

document.getElementById('data-agreement-form2').addEventListener('change', function() {
  if (this.checked) {
    clearError(this);
  }
});

// Функція для видалення помилки з поля
function clearError(element) {
  const errorText = element.nextElementSibling;
  if (errorText && errorText.classList.contains('error')) {
    errorText.style.display = 'none';
    element.style.borderBottom = '2px solid black';
  }
}

// Функція для очищення всіх попередніх помилок
function clearErrors() {
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(function (el) {
    el.style.display = 'none';
  });
  const inputElements = document.querySelectorAll('input');
  inputElements.forEach(function (el) {
    el.style.borderBottom = '2px solid black';
  });
}

// Функція для відображення помилки
function showError(element, message) {
  let errorText = element.nextElementSibling;
  if (!errorText || errorText.className !== 'error') {
    errorText = document.createElement('small');
    errorText.className = 'error';
    errorText.style.color = 'red';
    errorText.innerText = message;
    element.parentNode.appendChild(errorText);
  }
  element.style.borderBottom = '2px solid red';
  errorText.style.display = 'block';
}

// Валідація для телефону або E-mail
function validateEmailOrPhone(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]*$/;
  if (emailRegex.test(input)) {
    return true;
  }
  if (phoneRegex.test(input) && input.length >= 6) {
    return true;
  }
  return false;
}




// Закриття попапу
closeBtn.addEventListener('click', function() {
  popup.classList.add('hidden');
});

 // Ініціалізація карти, центр і рівень масштабу
 let map = L.map('map').setView([46.40173615458889, 30.745479427813507], 13);

 // Додавання шару карти (OpenStreetMap)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

//  46.40140935049765, 30.74555861328353

 // Додавання першої точки з підказкою
 let marker1 = L.marker([ 46.40140935049765, 30.74555861328353]).addTo(map)
 .bindPopup('Офіс "familny dim" ').openPopup();
 
 // Додавання другої точки з підказкою
 let marker2 = L.marker([46.410190957004886, 30.72848776143575]).addTo(map)
 .bindPopup('rue Menars');

// Вибираємо всі елементи, які мають клас "hidden-element"
const hiddenElements = document.querySelectorAll('.hidden-element');




// Перевіряємо, чи це мобільний пристрій (ширина вікна менше 760 пікселів)
if (window.innerWidth < 760) {
  // Вимикаємо анімацію: показуємо всі елементи без анімації
  hiddenElements.forEach(element => {
    element.classList.add('show'); // Додаємо клас, який зазвичай показується після анімації
    element.classList.remove('hidden-element'); // Прибираємо прихований стан
  });
  // console.log("Анімація відключена для мобільних пристроїв");
} else {
  // Якщо це не мобільний пристрій, налаштовуємо Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show'); // Додаємо клас, коли елемент видимий
              observer.unobserve(entry.target); // Прибираємо спостерігач для цього елемента
          }
      });
  }, { threshold: 0.5 });

  // Спостерігаємо за кожним елементом
  hiddenElements.forEach(element => {
      observer.observe(element);
  });
}

// Lightboxed Start

let rembg1  = document.querySelector('.parallax-block');
let rembg2  = document.querySelector('.ecsclisice-parallax');
let rembg3  = document.querySelector('.ecsclisice-parallax');



function detectDeviceAndBrowser() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Проверка Android
  const androidMatch = userAgent.match(/Android\s([0-9.]*)/);
  const androidVersion = androidMatch ? androidMatch[1] : false;

  if (androidVersion) {
    console.log(`Устройство на Android, версия: ${androidVersion}`);
    if (parseFloat(androidVersion) < 8) {
      return true;
    }
  }

  // Проверка Opera Mini
  if (userAgent.includes("Opera Mini")) {
    return true;
  }

  // Проверка iPhone или iPad
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  if (isIOS) {
    return true;
  }

  return false;
}

// detectDeviceAndBrowser();

if(detectDeviceAndBrowser()){
  rembg1.style.backgroundAttachment = '';
  rembg2.style.backgroundAttachment = '';
  rembg3.style.backgroundAttachment = '';
}