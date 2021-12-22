# Bio

- 1. Vlad Aleksandrov

- 2. Telegram: `@hilky`, Discord: `@Hilky#3467`

- 3. About:

**`Goal`**: Become good front-end dev & understanding js;
**`Pros`**: Committed, creative, responsible, ready learn new technologies and approaches, very meticulous approach to my work - conductionist;
**`Generally`**: Learn frontend developer for 3 months, take courses at `udemy` and try to practice more in order to become not only good developer at end, but also have knowledge/experience to solve various tasks.

- 4. Skills:

  learned [sql language](https://www.hackerrank.com/Hilky);

  basic js/html/css:
            1. Read book `Head First JavaScript Programming: A Brain-Friendly Guide`;
            2. Little projects for [practice](https://codepen.io/h9lk);
            3. Solved problems on [codewars](https://www.codewars.com/users/h9lk).
  actively apply principles of `kiss` and `dry` when writing code;

- 5. Code examples:

```js
document.addEventListener('DOMContentLoaded', () => {
  const carParams = [
    {
      make: 'GM', model: 'Cadillac', year: 1955, color: 'tan', passengers: 5, convertible: false, mileage: 12892,
    },
    {
      make: 'Chevy', model: 'Bel Air', year: 1957, color: 'red', passengers: 2, convertible: false, mileage: 1021,
    },
    {
      make: 'Fiat', model: '500', year: 1957, color: 'Medium Blue', passengers: 2, convertible: false, mileage: 88000,
    },
    {
      make: 'Webville Motors', model: 'Taxi', year: 1955, color: 'yellow', passengers: 4, convertible: false, mileage: 281341,
    },
  ];

  function Car(car) {
    this.make = car.make;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.passengers = car.passengers;
    this.convertible = car.convertible;
    this.mileage = car.mileage;
    this.started = false;
  }

  Car.prototype.start = function () { this.started = true; };
  Car.prototype.stop = function () { this.started = false; };
  Car.prototype.drive = function () {
    if (this.started) {
      console.log(`${this.make} ${this.model} goes zoom zoom!`);
    } else {
      console.log('You need to start the engine first.');
    }
  };

  const cars = carParams.map((car) => new Car(car));
  cars.forEach((car) => {
    car.start();
    const n = Math.floor(Math.random() * 5 + 1);
    for (let i = 0; i < n; i += 1) {
      car.drive();
    }
    car.stop();
  });
});
```

```js
const chatForm = document.querySelector('.chat-form');
const newMessageInput = chatForm.querySelector('.chat-form-input');
const messageTemplate = document.querySelector('#message-template').content;
const newMessageTemplate = messageTemplate.querySelector('.chat-message');
const messagesList = document.querySelector('.chat-content');

chatForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const taskText = newMessageInput.value;
  const message = newMessageTemplate.cloneNode(true);
  const messageText = message.querySelector('p');
  messageText.textContent = taskText;
  messagesList.appendChild(message);

  chatForm.reset();

  const messageDeleteButton = message.querySelector('.chat-message-button');
  messageDeleteButton.addEventListener('click', () => {
    message.remove();
  });
});
```

```js
const url = 'https://jsonplaceholder.typicode.com/users/';
const usersContainer = document.querySelector('.users-container');
const userInfoContainer = document.querySelector('.users-info');

function getUserId(id, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${url}/${id}`);

  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.send();
}

function userInfoTemplate(user) {
  return `
    <h4 class="info-card__header">${user.name}</h4>
    <ul class="list-group">
      <h4 class="info-card__title">${user.email}</h4>
        <li class="list-group-item"><b>Nickname:</b> ${user.username}</li>
        <li class="list-group-item"><b>Website:</b> ${user.website}</li>
        <li class="list-group-item"><b>Company:</b> ${user.company.name}</li>
        <li class="list-group-item"><b>City:</b> ${user.address.city}</li>
    </ul>
    <li class="info-card__footer">Phone: ${user.phone}</li> `;
}

function getUserIdInfo(user) {
  if (!user.id) {
    console.log('User not found');
    return;
  }
  userInfoContainer.style.border = '1px solid';
  userInfoContainer.innerHTML = '';
  userInfoContainer.insertAdjacentHTML('afterbegin', userInfoTemplate(user));
}

usersContainer.addEventListener('click', (evt) => {
  evt.preventDefault();
  const { userId } = evt.target.dataset;
  if (userId) {
    getUserId(userId, getUserIdInfo);
  }
});

function getUserInfo(cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${url}`);

  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.send();
}

function userList(user) {
  return `
      <li class="list-card__name" data-user-id="${user.id}">${user.name}</li>`;
}

function renderList(users) {
  if (!users.length) {
    return;
  }
  const fragment = users.reduce((a, b) => a + userList(b), '');
  usersContainer.insertAdjacentHTML('beforeend', fragment);
}

getUserInfo(renderList);
```

- 6. Work experience:

  Work by education as an assistant system administrator and have an idea of virtualizations/settings mikrotik routers/ip cameras, in general about servers;

- 7. Education:

  State University of Humanities & Technology - higher education `applied informatics` (bachelor);

- 8. English level - B1
