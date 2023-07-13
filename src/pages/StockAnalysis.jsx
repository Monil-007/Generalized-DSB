import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './StockAnalysis.css';

const StockAnalysis = () => {
    const useStyles = makeStyles({
        card: {
            backgroundColor: '#f5f5f5',
            maxWidth: 600,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });
    const classes = useStyles();

    const [details, setDetails] = useState(null);
    const [finData, setFinData] = useState([]);
    const [queryStock, setQueryStock] = useState("AAPL");

    //Financials Reported Data:
    const [currAssets, setCurrAssets] = useState(0);
    const [currLiabilities, setCurrLiabilities] = useState(0);
    const [currShareHoldersEquity, setCurrShareHoldersEquity] = useState(0);
    const [operatingIncome, setOperatingIncome] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [netSales, setNetSales] = useState(0);
    const [RnD, setRnD] = useState(0);
    const [termDebt, setTermDebt] = useState(0);
    const [amortization, setAmortization] = useState(0);

    //Quote data:
    const [open, setOpen] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [change, setChange] = useState(0);
    const [highP, setHigh] = useState(0);
    const [low, setLow] = useState(0);
    const [pc, setPc] = useState(0);

    //mapped query stock:
    const [mappedQueryStock, setMappedQueryStock] = useState("");
    const stockMap = new Map();
    stockMap.set("Apple", "AAPL");
    stockMap.set("Tesla", "TSLA");
    stockMap.set("Microsoft", "MSFT");
    stockMap.set("JP Morgan", "JPM");
    stockMap.set("Visa", "V");
    stockMap.set("Mastercard", "MA");
    stockMap.set("Bank Of America", "BAC");
    stockMap.set("Meta", "META");
    stockMap.set("Google", "GOOG");
    stockMap.set("Amazon", "AMZN");
    stockMap.set("apple", "AAPL");
    stockMap.set("tesla", "TSLA");
    stockMap.set("microsoft", "MSFT");
    stockMap.set("jp morgan", "JPM");
    stockMap.set("visa", "V");
    stockMap.set("mastercard", "MA");
    stockMap.set("bank of America", "BAC");
    stockMap.set("meta", "META");
    stockMap.set("google", "GOOG");
    stockMap.set("amazon", "AMZN");

    const mappingQueryStock = () => {
        const mappedQueryStock = stockMap.get(queryStock);
        setMappedQueryStock(mappedQueryStock);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        mappingQueryStock();
        // Financials Reported:

    };


    useEffect((event) => {
        const fetchData = async () => {
            if (mappedQueryStock.length >= 1) {
                const response = await fetch(`http://localhost:3000/api/sa/${mappedQueryStock}`);
                const dt = await response.json();
                //console.log(dt.data[0].report);  // Complete data

                // QUOTE data:
                const res = await fetch(`http://localhost:3000/api/stockesy/${mappedQueryStock}`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                    },
                })

                //Current Assets:
                setCurrAssets(dt.data[0].report.bs[6].value);
                //Current Liabilities:
                setCurrLiabilities(dt.data[0].report.bs[17].value);
                //Current ShareHolders' Equity value:
                var amzndata = dt.data[0]?.report?.bs[25]?.value;
                setCurrShareHoldersEquity(amzndata ? amzndata : 0);
                //Current operating income:
                setOperatingIncome(dt.data[0].report.ic[6].value);
                //Amortization:
                setAmortization(dt.data[0].report.cf[1].value);
                //Term Debt:
                setTermDebt(dt.data[0].report.bs[16].value);
                //Net Sales:
                setNetSales(dt.data[0].report.ic[0].value);
                //Revenue:
                setRevenue(dt.data[0].report.ic[10].value);
                //R&D:
                setRnD(dt.data[0].report.ic[3].value);



                const dtQuote = await res.json();
                console.log(typeof dtQuote);
                console.log(dtQuote.result);
                const quoteArray = dtQuote.result;
                //Open Price:
                setOpen(quoteArray[3]);
                //Current price:
                setCurrentPrice(quoteArray[0]);
                //Day High price:
                setHigh(quoteArray[4]);
                //Day Low price:
                setLow(quoteArray[5]);
                //Previous close price:
                setPc(quoteArray[6]);
                //Change in Price:
                setChange(quoteArray[1]);

                //setDetails:
                setDetails({
                    name: queryStock,
                    marketCap: dt.data[0].report.marketCap,
                    openPrice: dtQuote.result[3],
                    closePrice: dtQuote.result[0],
                    revenue: dt.data[0].report.ic[10].value
                });
            }
        }
        fetchData();
    }, [mappedQueryStock])
    return (
        <div className="container">
            <h2 className='heading'>Stock Analysis</h2>
            <h5 className='subHeading'>Input the stock Ticker and get detailed analysis of it below.</h5>
            <form onSubmit={handleFormSubmit}>
                <div className="queryInput">
                    <input
                        type="text"
                        className="InputBar"
                        placeholder="Enter stock name"
                        value={queryStock}
                        onChange={(event) => setQueryStock(event.target.value)}
                    />
                    <button type="submit" className="querySubmitButton" >Search</button>
                    <h1 style={{ color: 'white' }}>{finData}</h1>
                </div>
            </form>
            <div className="cardRows">
                <div className="cardRow1">
                    <Card style={{ opacity: "55%" }} className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Example Card Layout
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Open Price: {open}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Previous Close at: {pc}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> change in price: {change}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Bullet Point 4
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Example Card Layout
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Revenue: {revenue}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Net Sales: {netSales}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Term Debt: {termDebt}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Amortization: {amortization}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
                <div className="cardRow2">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Example Card Layout
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Today's High at: {highP}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Today's low at: {low}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> current value: {currentPrice}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> R & D : {RnD}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card style={{ opacity: "55%" }} className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Example Card Layout
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Current Assets: {currAssets}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Liabilities: {currLiabilities}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Shareholders' equity worth: {currShareHoldersEquity}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" component="p">
                                        <span className={classes.bullet}>•</span> Operating expense: {operatingIncome}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {details && (
                <div className="row row-cols-2">
                    <div className="col mb-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h5 className="card-title">{details.name}</h5>
                                <p className="card-text">Market Capitalization: {details.marketCap}</p>
                                <p className="card-text">Open Price: {details.openPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h5 className="card-title">{details.name}</h5>
                                <p className="card-text">Close Price: {details.closePrice}</p>
                                <p className="card-text">Revenue: {details.revenue}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h5 className="card-title">{details.name}</h5>
                                <p className="card-text">Market Capitalization: {details.marketCap}</p>
                                <p className="card-text">Open Price: {details.openPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h5 className="card-title">{details.name}</h5>
                                <p className="card-text">Close Price: {details.closePrice}</p>
                                <p className="card-text">Revenue: {details.revenue}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StockAnalysis;
