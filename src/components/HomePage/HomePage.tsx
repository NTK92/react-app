import React, { useEffect, useState } from 'react';
import { fetchCurrencyRates } from '../../shared/services/FiatCurrencies.service';
import { connect } from 'react-redux';
import { setUsername } from '../../shared/actions';
import ControlledCarousel from '../Carousel/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import VideoPlayer from '../VideoPlayer/VideoPlayer';


const HomePage: React.FC = ({ balance, username, setUsername }: any)  => {
  const [currencyData, setCurrencyData] = useState<any>(null);
  let currency = 'usd'; // Указываем интересующую валюту

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10); // Получаем текущую дату в формате "YYYY-MM-DD"

    fetchCurrencyRates(currentDate, currency)
      .then((data) => {
        if (data) {
          setCurrencyData(data);
        } else {
          console.error('Failed to fetch currency rates');
        }
      })
      .catch((error) => {
        console.error('Error fetching currency rates:', error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-4">Контроль финансов</h1>
          <p>Добро пожаловать, {username}!</p>
          <p>Ваш баланс: {balance}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          {currencyData && (
            <div>
              <h2>Курсы валют за {currencyData.date}</h2>
              { currency === 'usd' ? 
                <p>USD → RUB: {currencyData.usd.rub}</p> : 
                <p>RUB → USD: {currencyData.rub.usd}</p>  }
              { currency === 'usd' ? 
                <p>USD → EUR: {currencyData.usd.eur}</p> : 
                <p>RUB → EUR: {currencyData.rub.eur}</p>  }
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Финансовая грамотность</h2>
          <ControlledCarousel></ControlledCarousel>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Видео про финансовую грамотность: </h3>
        </Col>
        <Col className='col-auto'>
          <VideoPlayer/>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  username: state.username,
  balance: state.balance
});

const mapDispatchToProps = {
  setUsername
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);