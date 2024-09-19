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

// Закриття попапу
closeBtn.addEventListener('click', function() {
  popup.classList.add('hidden');
});