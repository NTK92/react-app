import axios from 'axios';

const API_BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@';

interface CurrencyData {
  date: string;
  usd?: {
    rub: number;
    eur: number;
  };
  rub?: {
    usd: number;
    eur: number;
  };
}

export const fetchCurrencyRates = async (date: string, currency: string): Promise<CurrencyData | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}${date}/v1/currencies/${currency}.json`);
    const responseData = response.data;
    var currencyData: CurrencyData;
    // Проверяем, содержит ли ответ ожидаемые свойства
    if (responseData && responseData.date && 
      (responseData.usd && responseData.usd.rub && responseData.usd.eur || 
        responseData.rub && responseData.rub.usd && responseData.rub.eur) ) {
        if (currency === 'usd') {
          currencyData = { date: responseData.date,
            usd: {
              rub: responseData.usd.rub,
              eur: responseData.usd.eur,
            }}
        }
        else {
          currencyData = { date: responseData.date,
            rub: {
              usd: responseData.rub.usd,
              eur: responseData.rub.eur,
            }}
        }
        return currencyData;
    }
    else {
      console.error('Invalid response format');
      return null;
    }
  } catch (error) {
    console.error('Error fetching currency rates:', error);
    return null;
  }
};
