// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Store browser/OS info in localStorage
  const browserInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language
  };
  localStorage.setItem('browserInfo', JSON.stringify(browserInfo));

  // Display localStorage data in footer
  const footer = document.getElementById('browser-info');
  const storedInfo = JSON.parse(localStorage.getItem('browserInfo'));
  footer.innerHTML = `
      <p>Браузер: ${storedInfo.userAgent}</p>
      <p>Платформа: ${storedInfo.platform}</p>
      <p>Мова: ${storedInfo.language}</p>
  `;

  // Display absurd custom comments
  const commentSection = document.getElementById('comments');
  const comments = [
      { name: "Іван", body: "Денис своїм ISO 27001 врятував мою собаку від лоботомії!" },
      { name: "Марія", body: "Його NIST 800-53 зупинив інопланетне вторгнення в мій Wi-Fi!" },
      { name: "Олег", body: "Стресостійкість Дениса заспокоїла мого кота, коли той хакнув мій роутер!" },
      { name: "Софія", body: "Його UI/UX дизайн змусив мій кактус зацвісти!" }
  ];
  comments.forEach(comment => {
      const p = document.createElement('p');
      p.textContent = `${comment.name}: ${comment.body}`;
      commentSection.appendChild(p);
  });

  // Feedback form modal after 30 seconds
  setTimeout(() => {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
          <form>
              <input type="text" name="name" placeholder="Ім'я" required>
              <input type="email" name="email" placeholder="Email" required>
              <input type="tel" name="phone" placeholder="Телефон" required>
              <textarea name="message" placeholder="Повідомлення" required></textarea>
              <button type="submit">Надіслати</button>
              <button type="button" class="modal-close">Закрити</button>
          </form>
      `;
      document.body.appendChild(modal);
      modal.style.display = 'block';

      // Close modal on submit (for demo, no real endpoint)
      modal.querySelector('form').addEventListener('submit', (e) => {
          e.preventDefault();
          modal.style.display = 'none';
      });

      // Close modal on close button
      modal.querySelector('.modal-close').addEventListener('click', () => {
          modal.style.display = 'none';
      });
  }, 30000);

  // Theme toggle
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      toggleButton.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
  });

  // BrainRoot jokes
  const jokesContainer = document.getElementById('jokes');
  const jokes = [
      "Чому курка хакнула сайт? я звідки знаю? cry about it!",
      "Моя бабця борщ варила, а дід воював за саюз!",
      "Дід у сраку трактор гнав, а хакер root на сервак пхав!",
      "Чому кіт на базарі? Бо мишей на OLX продавав!",
      "ISO 27001: коли твій пароль — це цілий роман.",
      "Чому огірок у холодильнику співав? в мами спитай, шизік!",
      "Кібербезпека: коли антивірус гавкає голосніше, ніж сусідський пес.",
      "Дід до баби: 'Твій борщ — як SQL-ін’єкція, прямо в серце, і здох!'",
      "Чому корова стала блогером? Бо мучила всіх в Instagram!",
      "UI/UX дизайнер до хакера: 'Твій експлойт — не по фен-шую! а хакер йому кабіну зніс'",
      "Мій пес хакнув Wi-Fi, бо йому набридло гавкати на паролі!",
      "Чому картопля пішла в спортзал? Бо фрі бути не хотіла!",
      "Доки баба котлети смажила, дід в сраку сервак копав!",
      "Чому хакер розійшовся з дівчиною? Бо вона його в blacklist кинула!",
      "Мій кактус став хакером, бо колючки — це його DDoS!",
      "Чому холодильник гудів? Бо він в Tinder сватав йогурт!",
      "Аудитор до сервера: 'Ти не PCI DSS, ти просто дірка!'",
      "Чому дід напився? Бо бабина наливка — це 80% багів!",
      "Коли твій код працює, але ти не знаєш чому — це магія кібербезпеки!",
      "Чому качка пішла в IT? Бо вона крякала на Python!",
      "Моя бабця firewall поставила, тепер до неї тільки по VPN зайдеш!",
      "Чому помідор почервонів? Бо побачив, як огірок в салаті тусить!",
      "Чому адмін напився? Бо роутер пінг в сраку гнав!",
      "Чому курка в селі YouTube вела? Бо яйця в тренді тримала!",
      "Мій кіт на клавіатурі написав кращий код, ніж я після дедлайну!",
      "Чому трактор на дискотеці? Бо він плугом баси качав!",
      "Чому миша хакером стала? Бо вона в кожну дірку лізе!",
      "Дід у селі сервак копав, а баба в TikTok трафік гнав!",
      "Чому борщ хакнули? Бо він був без сметани — вразливість!",
      "Коли твій сервак падає частіше, ніж ти на вечірках!"
  ];

  if (jokesContainer) {
      jokes.forEach(joke => {
          const div = document.createElement('div');
          div.className = 'joke-item';
          div.textContent = joke;
          jokesContainer.appendChild(div);
      });
  }

  // Toggle BrainRoot sidebar
  const toggleJokesButton = document.getElementById('toggle-jokes');
  const braynroot = document.querySelector('.braynroot');
  toggleJokesButton.addEventListener('click', () => {
      braynroot.classList.toggle('hidden');
      toggleJokesButton.textContent = braynroot.classList.contains('hidden') ? 'Показати жарти' : 'Приховати жарти';
  });

  // Custom cursor movement
  const cursor = document.querySelector('.custom-cursor');
  document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX - 10}px`;
      cursor.style.top = `${e.clientY - 10}px`;
  });
});
