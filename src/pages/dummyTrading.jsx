import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";

const useStyles = makeStyles({
    card: {
        backgroundColor: '#333',
        borderRadius: '10px',
        padding: '16px',
        maxWidth: '500px',
        margin: 'auto',
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
const handleFormSubmit = () => {
    console.log("submitted radhe")
}

const DummyTrading = () => {

    const [ticker, setTicker] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [SL, setSL] = useState(0);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
        console.log(state);
        const entriesArray = Array.from(state.entries());
        //console.log(entriesArray[1][1]);
    }, [])
    const handleBuy = async () => {
        await fetch('');
        dispatch(addItem({
            stockName: `${ticker}`, stockQuantity: `${quantity}`, stockPrice: `${price}`, stopLoss: `${SL}`,
        }));
    }
    return (
        <div>
            <h2 className='heading'>Stock Analysis</h2>
            <h5 className='subHeading'>Input the stock Ticker and get detailed analysis of it below.</h5>
            <div className='dummyDiv'>
                <Card className={classes.card}>
                    <CardContent>
                        <div className={classes.title}>Purchase Stock</div>
                        <div className={classes.formControl}>
                            <TextField onChange={(e) => { setTicker(e.target.value) }} label="Stock Ticker" fullWidth />
                        </div>
                        <div className={classes.formControl}>
                            <TextField onChange={(e) => { setQuantity(e.target.value) }} label="Quantity" fullWidth />
                        </div>
                        <div className={classes.formControl}>
                            <TextField onChange={(e) => { setPrice(e.target.value) }} label="At Price" fullWidth />
                        </div>
                        <div className={classes.formControl}>
                            <TextField onChange={(e) => { setSL(e.target.value) }} label="Stop Loss" fullWidth />
                        </div>
                        <Button onClick={handleBuy} className={classes.button1} fullWidth>
                            Buy
                        </Button>
                        <Button className={classes.button2} fullWidth>
                            Sell
                        </Button>
                    </CardContent>
                </Card>
                {state.size && <h1 style={{ color: "white" }}>{state.size}</h1>}
            </div>

        </div>
    )
}

export default DummyTrading;
