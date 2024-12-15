const directors = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career: "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films: "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

const directorsWholeSection = document.querySelector(".directors");
directors.forEach((director, index) => {
  const directorDiv = document.createElement("div");
  directorDiv.classList.add("directors__director");

  const directorName = document.createElement("div");
  directorName.classList.add("directors__director__name");
  directorName.textContent = `${index + 1}. ${director.name}`;
  directorDiv.appendChild(directorName);

  const twoBlocksCareerAndFilms = document.createElement("div");
  twoBlocksCareerAndFilms.classList.add("directors__2blocks__careerAndfilms");
  directorDiv.appendChild(twoBlocksCareerAndFilms);

  const directorCareer = document.createElement("div");
  directorCareer.classList.add("directors__director__career");
  directorCareer.textContent = director.career;
  twoBlocksCareerAndFilms.appendChild(directorCareer);

  const directorFilms = document.createElement("div");
  directorFilms.classList.add("directors__director__films");
  const directorFilmsLink = document.createElement("a");
  directorFilmsLink.href = director.films;
  directorFilmsLink.textContent = "Фильмография";
  directorFilmsLink.target = "_blank";
  directorFilms.appendChild(directorFilmsLink);
  twoBlocksCareerAndFilms.appendChild(directorFilms);

  directorsWholeSection.appendChild(directorDiv);
});

const h2title = document.createElement("h2");
h2title.classList.add("h2-title");
h2title.textContent = "Лучшие фильмы этих режиссёров";
directorsWholeSection.appendChild(h2title);

const topFilmsList = directors.map((director) => director.top_rated_film);
const directorTopRatedFilmContainer = document.createElement("p");
directorTopRatedFilmContainer.classList.add("directors__director__top_rated_film");
directorTopRatedFilmContainer.textContent = `${topFilmsList.join(", ")}`;
directorsWholeSection.appendChild(directorTopRatedFilmContainer);

// directors.forEach((director) => {
//   const directorNameContainer = document.querySelector(".directors__director__name");
//   const directorName = document.createElement("p");
//   directorName.textContent = director.name;
//   directorNameContainer.append(directorName);
// });

// directors.forEach((director) => {
//   const directorCareerContainer = document.querySelector(".directors__director__career");
//   const directorCareer = document.createElement("p");
//   directorCareer.textContent = director.career;
//   directorCareerContainer.append(directorCareer);
// });

// directors.forEach((director) => {
//   const directorFilmsContainer = document.querySelector(".directors__director__films");
//   const directorFilms = document.createElement("p");
//   directorFilms.textContent = "Фильмография".src = director.films;
//   directorFilmsContainer.append(directorFilms);
// });
