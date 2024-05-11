import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Carousel.css';

const slides = [
  {
    id: 1,
    imagePath: "/img/5.jpg",
    title: "Сформируйте подушку безопасности",
    text: "Это ваш личный резервный фонд, заначка на случай непредвиденных обстоятельств. Большинство экспертов сходится на том, что нужно как минимум 3-6 месячных бюджетов, отложенных «про запас». То есть в случае потери работы, человеку должно хватить накоплений хотя бы на полгода жизни без источников дохода."
  },
  {
    id: 2,
    imagePath: "/img/3.jpg",
    title: "Ведите ежемесячный бюджет",
    text: "Если вам кажется, что все ваши доходы уходят на повседневные нужды и откладывать деньги не получается, начните вести бюджет."
  },
  {
    id: 3,
    imagePath: "/img/4.jpg",
    title: "Измените отношение к покупкам",
    text: "Научитесь бороться с импульсивными покупками. Если хотите купить что-то, чего не было в ваших планах, возьмите паузу, как минимум, на сутки.  За это время вы сможете трезво оценить, действительно ли вам нужна эта вещь."
  },
  {
    id: 4,
    imagePath: "/img/7.jpg",
    title: "Защищайте свои сбережения от инфляции",
    text: "Десять тысяч рублей сегодня – совсем не то же, что десять тысяч рублей пять лет назад. Цены растут, а инфляция со временем обесценивает деньги. Поэтому обязательно используйте доступные и безопасные инструменты для сбережения средств."
  },
  {
    id: 5,
    imagePath: "/img/6.jpg",
    title: "Инвестируйте средства",
    text: "Если вы хотите получить большую доходность, изучите различные виды инвестиций, это может стать хорошем подспорьем в повышении уровня финансовой грамотности. Начать можно с облигаций, золота. Главное, не забывайте об обязательной диверсификации."
  }
];

function ControlledCarousel() {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='w-80' style={{height:'400px', borderRadius: '0.75rem'}}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <div className='w-100 h-100 d-flex align-items-stretch justify-content-center'>
            <div className="carousel-overlay"></div>
            <img className="d-block" src={process.env.PUBLIC_URL + slide.imagePath} alt={`Slide ${slide.id}`} style={{height:'400px'}}/>
            <Carousel.Caption className='slide-text'>
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
