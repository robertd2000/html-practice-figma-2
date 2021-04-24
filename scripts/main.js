const sliderTrack = document.querySelector('.slider__track'),
  next = document.querySelector('.next'),
  prev = document.querySelector('.prev'),
  sliderNavItem = document.querySelectorAll('.slider__nav__item'),
  gaz = document.querySelector('.gaz'),
  kab = document.querySelector('.kab'),
  gry = document.querySelector('.gry'),
  stars = document.querySelectorAll('.stars');

let transformVal = 0;

stars.forEach((star) => {
  let content = '';
  for (i = 0; i < 5; i++) {
    content += `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 6.3H9.775L8 0.75L6.225 6.3H0.5L5.125 9.725L3.375 15.25L8 11.825L12.625 15.25L10.85 9.7L15.5 6.3Z" fill="#FF352B"/>
        </svg>
        `;
  }

  star.innerHTML = content;
});

const gazelActive = () => {
  gaz.classList.add('active');
  kab.classList.remove('active');
  gry.classList.remove('active');
};

const kabActive = () => {
  gaz.classList.remove('active');
  kab.classList.add('active');
  gry.classList.remove('active');
};

const gryActive = () => {
  gaz.classList.remove('active');
  kab.classList.remove('active');
  gry.classList.add('active');
};

gaz.addEventListener('click', () => {
  sliderTrack.style.transform = `translateX(-${0}px)`;
  gazelActive();
});

kab.addEventListener('click', () => {
  sliderTrack.style.transform = `translateX(-${1400}px)`;
  kabActive();
});

gry.addEventListener('click', () => {
  sliderTrack.style.transform = `translateX(-${2800}px)`;
  gryActive();
});

const sliderNext = () => {
  transformVal += 1400;
  if (transformVal > 2800) {
    transformVal = 0;
  }

  if (transformVal == 0) {
    gazelActive();
  }
  if (transformVal == 1400) {
    kabActive();
  }
  if (transformVal == 2800) {
    gryActive();
  }

  sliderTrack.style.transform = `translateX(-${transformVal}px)`;
  console.log(transformVal);
};

const sliderPrev = () => {
  transformVal += 1400;
  if (transformVal > 0) {
    transformVal = -2800;
  }

  if (transformVal == 0) {
    gazelActive();
  }
  if (transformVal == -1400) {
    kabActive();
  }
  if (transformVal == -2800) {
    gryActive();
  }
  sliderTrack.style.transform = `translateX(${transformVal}px)`;
  console.log(transformVal);
};

next.addEventListener('click', sliderNext);
prev.addEventListener('click', sliderPrev);
