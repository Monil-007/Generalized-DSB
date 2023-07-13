import React, { useEffect, useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import ValueTable from '../components/ValueTable/ValueTable.jsx';
import './StocksTable.css';

const StocksTable = () => {
  const [QuoteData, setQuoteData] = useState([]);
  const [quoteAAPL, setQuoteAAPL] = useState([]);
  const [quoteMSFT, setQuoteMSFT] = useState([]);
  const [quoteAMZN, setQuoteAMZN] = useState([]);
  const [quoteGOOG, setQuoteGOOG] = useState([]);
  const [quoteTSLA, setQuoteTSLA] = useState([]);
  const [quoteMETA, setQuoteMETA] = useState([]);
  const [quoteMA, setQuoteMA] = useState([]);
  const [quoteJPM, setQuoteJPM] = useState([]);
  const [quoteV, setQuoteV] = useState([]);
  const [quoteBAC, setQuoteBAC] = useState([]);
  const [Origin, setOrigin] = useState([]);
  const Top10Stocks = ['AAPL', 'MSFT', 'TSLA', 'AMZN', 'GOOG', 'META', 'BAC', 'MA', 'V', 'JPM']
  const fetchArray = async function (stockName) {
    await fetch(`http://localhost:3000/api/stockesy/${stockName}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
    })
      .then(response => response.json())
      .then(data => {
        setOrigin([...Origin, ...data.result])
      })
      .then(data => data)
      .catch(err => console.log(err))
    return QuoteData;
  };
  const fetchArrayAAPL = async function () {
    await fetch(`http://localhost:3000/api/stockesy/AAPL`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.result);
        setQuoteAAPL(data.result)
      })
      .then(data => data)
      .catch(err => console.log(err))
    return QuoteData;
  };
  const fetchArrayMSFT = async function () {
    await fetch(`http://localhost:3000/api/stockesy/MSFT`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
    })
      .then(response => response.json())
      .then(data => {
        setQuoteMSFT(data.result)
      })
      .then(data => data)
      .catch(err => console.log(err))
    return QuoteData;
  };
  const fetchArrayTSLA = async function () {
    await fetch(`http://localhost:3000/api/stockesy/TSLA`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
    })
      .then(response => response.json())
      .then(data => {
        setQuoteTSLA(data.result)
      })
      .then(data => data)
      .catch(err => console.log(err))
    return QuoteData;
  };
  const fetchArrayAMZN = async function () {
    await fetch(`http://localhost:3000/api/stockesy/AMZN`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
    })
      .then(response => response.json())
      .then(data => {
        setQuoteAMZN(data.result)
      })
      .then(data => data)
      .catch(err => console.log(err))
    return QuoteData;
  };
  const fetchArrayMA = async function () {
    await fetch(`http://localhost:3000/api/stockesy/MA`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
    })
      .then(response => response.json())
      .then(data => {
        setQuoteMA(data.result)
      })
      .then(data => data)
      .catch(err => console.log(err))
    return QuoteData;
  };
  const fetchArrayGOOG = async function () {
    await fetch(`http://localhost:3000/api/stockesy/GOOG`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
    })
      .then(response => response.json())
      .then(data => {
        setQuoteGOOG(data.result)
      })
      .then(data => data)
      .catch(err => console.log(err))
    return QuoteData;
  };
  const fetchArrayMETA = async function () {
    await fetch(`http://localhost:3000/api/stockesy/META`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
    })
      .then(response => response.json())
      .then(data => {
        setQuoteMETA(data.result)
      })
      .then(data => data)
      .catch(err => console.log(err))
    return QuoteData;
  };
  const fetchArrayJPM = async function () {
    await fetch(`http://localhost:3000/api/stockesy/JPM`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
    })
      .then(response => response.json())
      .then(data => {
        setQuoteJPM(data.result)
      })
      .then(data => data)
      .catch(err => console.log(err))
    return QuoteData;
  };
  const fetchArrayV = async function () {
    await fetch(`http://localhost:3000/api/stockesy/V`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
    })
      .then(response => response.json())
      .then(data => {
        setQuoteV(data.result)
      })
      .then(data => data)
      .catch(err => console.log(err))
    return QuoteData;
  };
  const fetchArrayBAC = async function () {
    await fetch(`http://localhost:3000/api/stockesy/BAC`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
    })
      .then(response => response.json())
      .then(data => {
        setQuoteBAC(data.result)
      })
      .then(data => data)
      .catch(err => console.log(err))
    return QuoteData;
  };
  async function fetchAndPushArrays() {
    try {
      let i = 0;
      const array1 = await fetchArrayAAPL(); i++;
      const array2 = await fetchArrayMSFT(); i++;
      const array3 = await fetchArrayAMZN(); i++;
      const array4 = await fetchArrayTSLA(); i++;
      const array5 = await fetchArrayGOOG(); i++;
      const array6 = await fetchArrayMETA(); i++;
      const array7 = await fetchArrayMA(); i++;
      const array8 = await fetchArrayJPM(); i++;
      const array9 = await fetchArrayV(); i++;
      const array10 = await fetchArrayBAC(); i++;
      return [];
    } catch (error) {
      console.error("naya error: " + error);
    }
  }
  async function logMainArray() {
    await fetchAndPushArrays();
  }
  useEffect(async () => {
    await logMainArray();
  }, [])

  const companyData = [
    {
      company: "Apple",
      ticker: "AAPL",
      stockPrice: `${quoteAAPL[0]}`,
      change: `${quoteAAPL[1]}`,
      changeP: `${quoteAAPL[2]}`,
    },
    {
      company: "Microsoft",
      ticker: "MSFT",
      stockPrice: `${quoteMSFT[0]}`,
      change: `${quoteMSFT[1]}`,
      changeP: `${quoteMSFT[2]}`,
    },
    {
      company: "TESLA",
      ticker: "TSLA",
      stockPrice: `${quoteTSLA[0]}`,
      change: `${quoteTSLA[1]}`,
      changeP: `${quoteTSLA[2]}`,
    },
    {
      company: "AMAZON",
      ticker: "AMZN",
      stockPrice: `${quoteAMZN[0]}`,
      change: `${quoteAMZN[1]}`,
      changeP: `${quoteAMZN[2]}`,
    },
    {
      company: "Google",
      ticker: "GOOG",
      stockPrice: `${quoteGOOG[0]}`,
      change: `${quoteGOOG[1]}`,
      changeP: `${quoteGOOG[2]}`,
    },
    {
      company: "Mastercard",
      ticker: "MA",
      stockPrice: `${quoteMA[0]}`,
      change: `${quoteMA[1]}`,
      changeP: `${quoteMA[2]}`,
    },
    {
      company: "META",
      ticker: "META",
      stockPrice: `${quoteMETA[0]}`,
      change: `${quoteMETA[1]}`,
      changeP: `${quoteMETA[2]}`,
    },
    {
      company: "JP Morgan",
      ticker: "JPM",
      stockPrice: `${quoteJPM[0]}`,
      change: `${quoteJPM[1]}`,
      changeP: `${quoteJPM[2]}`,
    },
    {
      company: "Visa",
      ticker: "V",
      stockPrice: `${quoteV[0]}`,
      change: `${quoteV[1]}`,
      changeP: `${quoteV[2]}`,
    },
    {
      company: "Bank of America",
      ticker: "BAC",
      stockPrice: `${quoteBAC[0]}`,
      change: `${quoteBAC[1]}`,
      changeP: `${quoteBAC[2]}`,
    },
  ];
  return (
    <>
      <h1 className='StockBoard_heading'>US Stock Market Dashboard</h1>
      <div className="StockBoard"><ValueTable data={companyData} /></div>

    </>
  );
}

export default StocksTable;