import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Portfolio.css';



const useStyles = makeStyles({
    card: {
        color: 'white',
        backgroundColor: '#333',
        borderRadius: '10px',
        padding: '16px',
        maxWidth: '800px',
        margin: 'auto',
        justifyContent: 'space-between'
    },
    title: {
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px',
    },
    formControl: {
        marginBottom: '16px',
        '& label': {
            color: '#fff',
        },
        '& input': {
            color: '#fff',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#fff',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
        },
    },
    button1: {
        backgroundColor: '#4caf50',
        borderRadius: '10px',
        color: '#fff',
        marginBottom: '22px',
        '&:hover': {
            backgroundColor: '#388e3c',
        },
    },
    button2: {
        backgroundColor: 'red',
        borderRadius: '10px',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#FFCCCB',
        },
    },
});

const Portfolio = () => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [reduxData, setReduxData] = useState([]);
    const [invested, setInvested] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [changedInv, setChangedInv] = useState(false);
    const [queryStock, setQueryStock] = useState('');
    const [pfHeader, setPfHeader] = useState([]);
    const [color, setColor] = useState('green');
    const [currAmount, setCurrAmount] = useState(0);
    const [profLoss, setProfLoss] = useState(0);
    const [perct, setPerct] = useState(0);
    const classes = useStyles();

    let fetchData = async (qstock) => {
        await fetch(`http://localhost:3000/api/stockesy/${qstock}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
        }).then(dt => dt.json()).then((res1) => { console.log(res1.result); setPfHeader(res1.result); })
        // console.log(dt);
        // let dt1 = dt.json();
        // console.log(dt1);
        // console.log(dt1.result);
        // return dt1.result;
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data.result)
        // })
        // .catch(err => console.log(err))
    }

    useEffect(() => {
        setDataLoaded(false);
        console.log(state);
        const entriesArray = Array.from(state.entries());
        console.log(entriesArray);

        let sum = 0;
        entriesArray.map((stk, index) => {
            console.log("stockTicker RK:" + stk[0]);
            console.log("stockQuantity RK: " + stk[1][0]);
            console.log("stockPrice RK: " + stk[1][1]);
            console.log("stopLoss RK: " + stk[1][2]);
            setQueryStock(`${stk[0]}`);
            const quantity = stk[1][0];
            const LTP = stk[1][1];
            const SL = stk[1][2];
            const stockTicker = stk[0];
            fetchData(`${stk[0]}`).then((d) => {
                if (pfHeader) {
                    console.log(pfHeader.result);
                    const dtx = pfHeader.result;
                    const currPrice = dtx[0];
                    const currTotPrice = dtx[0] * quantity;
                    setCurrAmount(currTotPrice);
                    const LTPTotPrice = LTP * quantity;
                    if (currTotPrice < LTPTotPrice) {
                        setColor('red');

                    }
                    else {
                        setColor('green');
                    }
                    const diff = Math.abs(currTotPrice - LTPTotPrice);
                    setPerct(((diff * 100) / LTPTotPrice));
                    setProfLoss(diff);

                }
            });
            sum += stk[1][0] * stk[1][1];
        })
        setInvested(sum);
        setTimeout(() => {
            setReduxData(entriesArray);
            console.log(reduxData)
            setDataLoaded(true);
        }, 3000)

    }, [])


    const data = ['Element 1', 'Element 2', 'Element 3', 'Element 4', 'Element 5'];
    const separatorStyle = {
        borderBottom: '1px solid black',
        width: '100%',
        margin: '10px 0',
    };
    return (
        <>
            <h2 className='heading'>Portfolio</h2>
            <h5 className='subHeading'>{dataLoaded ? 'Have a broad look over you Portfolio' : 'Please wait while your portfolio is loading...'}</h5>
            <div className='dummyDiv'>
                <Card className={classes.card}>
                    <CardContent>
                        <div className={classes.title}>PF Insights</div>
                        <div className="r1">
                            <p>Invested Capital: {invested}$</p>
                            <p>Current Amount: {Math.round(currAmount * 100) / 100}$</p>
                        </div>
                        <hr></hr>
                        <div className="r2">
                            <p >Proft/Loss: <strong style={{ color: `${color}` }}>{Math.round(profLoss * 100) / 100}</strong>$</p>
                            <p>Inc/Dec: <strong style={{ color: `${color}` }}>{Math.round(perct * 100) / 100}</strong>% </p>
                        </div>

                    </CardContent>
                </Card>
                {state.size && <h1 style={{ color: "white" }}>{state.size}</h1>}
            </div>
            {reduxData ? (<div className="reduxData">

                {reduxData.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="portfolioStockW">
                            <div className="portfolioStockp1">
                                <div className="portfolioStockp11">Quantity: {item[1][0]}</div>
                                <div className="portfolioStockp12">+9.18%</div>
                            </div>
                            <div className="portfolioStockp2">
                                {/* <div className="portfolioStockp21">RK</div> */}
                                <h3>{item[0]}</h3>
                                <h6>+infinite</h6>
                            </div>
                            <div className="portfolioStockp3">
                                <div className="portfolioStockp31">Invested: {item[1][1] * item[1][0]}$</div>
                                <div className="portfolioStockp32">LTP 431 (-2.95%)</div>
                            </div>
                            {item}
                        </div>
                        {index !== data.length - 1 && <hr style={separatorStyle} />}
                    </React.Fragment>
                ))}
            </div>) : (<h1 style={{ color: "white" }}>Loamding</h1>)}
        </>

    );
}

export default Portfolio;
