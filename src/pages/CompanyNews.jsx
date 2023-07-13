import React, { useEffect, useState } from 'react'
import './CompanyNews.css'
import Popup from "react-popup";
import "../pages/Popup.css";


const initialData = [
    {
        "category": "company",
        "datetime": 1677714937,
        "headline": "Musk Tamps Down Speculation That Tesla Will Mine Lithium",
        "id": 119007501,
        "image": "https://s.yimg.com/ny/api/res/1.2/qPA4K3172ezZxZWgGvREiA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/a1986bb743c52df19d203f5d8c19568b",
        "related": "TSLA",
        "source": "Yahoo",
        "summary": "(Bloomberg) -- Tesla Inc. is more focused on refining lithium than on mining the battery metal, Chief Executive Officer Elon Musk said amid speculation the automaker is mulling the takeover of a miner.Most Read from BloombergSorry, Twitter. Elon Found His Next Shiny Object.How to Get a Free Flight to Hong Kong in 500,000 Airline Ticket GiveawayWorld’s Rich Take Advantage as $1 Trillion Property Market CratersLightfoot Is First Chicago Mayor to Lose Reelection in 40 YearsMusk Was Right About Tesl",
        "url": "https://finnhub.io/api/news?id=86e722330d6986210ae58897e49c512f6060c09ddadea2b45dfdd0fc996114f5"
    },
    {
        "category": "company",
        "datetime": 1677714120,
        "headline": "Elon Musk And Tesla Tease Electric Boats, Planes",
        "id": 119007502,
        "image": "https://s.yimg.com/ny/api/res/1.2/OLSEW3kaS685rP1.NFwu9g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/thestreet.com/35dafa0502da2746f2e94c0d176a5d26",
        "related": "TSLA",
        "source": "Yahoo",
        "summary": "At Tesla's Investor Day on March 1, the billionaire said it's possible to have battery-powered boats and planes.",
        "url": "https://finnhub.io/api/news?id=493d7ea12af017f8d4404f010e4c4e022145b0714488dfc7c5f038e620d1c6a7"
    },
    {
        "category": "company",
        "datetime": 1677711511,
        "headline": "Stocks moving in after-hours: Tesla, Salesforce, Snowflake, Silvergate",
        "id": 119006586,
        "image": "https://s.yimg.com/ny/api/res/1.2/jP5Pf3ouRsKYrEUWprz1Ng--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-02/e18643a0-b884-11ed-bccd-b2153f21791c",
        "related": "TSLA",
        "source": "Yahoo",
        "summary": "Stocks moving in after-hours: Tesla, Salesforce, Snowflake, Silvergate",
        "url": "https://finnhub.io/api/news?id=63aed292cf68145c604e3b7ceaca8e3d25bc6ee473da08c52126d8c41b79250c"
    },
    {
        "category": "company",
        "datetime": 1677711420,
        "headline": "Tesla Unveils New Vehicle Manufacturing Platform to Cut Costs by 50%",
        "id": 119007504,
        "image": "https://s.yimg.com/ny/api/res/1.2/EzVLyaOhn95K_oK_K80sGA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/thestreet.com/fc802b158f8b080dbc88509eb2c3eabc",
        "related": "TSLA",
        "source": "Yahoo",
        "summary": "The electric vehicle maker unveiled a new vehicle manufacturing platform at its Investor Day on March 1.",
        "url": "https://finnhub.io/api/news?id=933eca31092416c37c707ccd32f0c3ae9ec3e9ee35729cc7b08e68138bf608ce"
    },
    {
        "category": "company",
        "datetime": 1677710710,
        "headline": "Tesla (TSLA) Dips More Than Broader Markets: What You Should Know",
        "id": 119007505,
        "image": "https://media.zenfs.com/en/zacks.com/737ffb82e07dc8bffb77e72d153c91f2",
        "related": "TSLA",
        "source": "Yahoo",
        "summary": "Tesla (TSLA) closed at $202.77 in the latest trading session, marking a -1.43% move from the prior day.",
        "url": "https://finnhub.io/api/news?id=a125bfdc7b10537becfd64b8b14ed40e0e02ecf7175b53a7fcba300d0c6737a8"
    },
    {
        "category": "company",
        "datetime": 1677709448,
        "headline": "Tesla Investor Day Falls Flat",
        "id": 119008056,
        "image": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1140204814/image_1140204814.jpg?io=getty-c-w1536",
        "related": "TSLA",
        "source": "SeekingAlpha",
        "summary": "A lack of key details at Tesla's Investor Day could result in short-term selling. Read more to see the key takeaways from the event.",
        "url": "https://finnhub.io/api/news?id=420bf3ecf03a4bb40dd50bcd097626ae813cdff39e69701f6886ecf54b98362a"
    },
    {
        "category": "company",
        "datetime": 1677709006,
        "headline": "Top 3 things to know today — Salesforce earnings, Tesla investor day, Fed officials’ rate outlook",
        "id": 119006595,
        "image": "https://s.yimg.com/ny/api/res/1.2/pVvQQJ6Njh45iG3FOp96.A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/hd/cp-video-transcode/production/01d9c116-aca6-3dea-b530-8e997caa39a3/2023-03-01/22-16-46/8b95d7cd-dee2-553b-a6f1-0c4271a741bd/stream_1280x720x0_v2_3_0.jpg",
        "related": "TSLA",
        "source": "Yahoo",
        "summary": "The Yahoo Finance Live team breaks down 3 Things to Know from the market day on Wednesday.",
        "url": "https://finnhub.io/api/news?id=feafd6be97e79c7df7ffff8ba7605f9e75858c84e1115ac323f4d6e23f01e913"
    },
    {
        "category": "company",
        "datetime": 1677706934,
        "headline": "U.S. NTSB cites speeding in fatal Tesla 2021 Florida crash",
        "id": 119004948,
        "image": "https://static.reuters.com/resources/r/?m=02&d=20230301&t=2&i=1625229571&r=LYNXMPEJ201VT",
        "related": "TSLA",
        "source": "Reuters",
        "summary": "The National Transportation Safety Board said on Wednesday the probable cause of a fatal September 2021 Tesla Model 3 crash in Coral Gables, Florida, was the driver decision to travel at high speed.",
        "url": "https://finnhub.io/api/news?id=c1e50458c5914f37b4d602ff66701f01525a2a57b7e9e04ce3a45b86deedbb14"
    },
    {
        "category": "company",
        "datetime": 1677706160,
        "headline": "UPDATE 2-Elon Musk kicks off Investor Day, focusing on path to sustainable energy future",
        "id": 119000792,
        "image": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
        "related": "TSLA",
        "source": "Yahoo",
        "summary": "Tesla Inc kicked off an investor event on Wednesday at which Chief Executive Elon Musk is expected to lay out a plan to make a smaller, more affordable electric vehicle that would broaden his brand's appeal and fend off competition.  Musk began by focusing on the company's \"Master Plan 3\" for a \"sustainable energy future.\"  \"There is a clear path to a sustainable energy future,\" Musk said.",
        "url": "https://finnhub.io/api/news?id=aebd50074219ab18cd16069284b69a17d7f5b395b36bddf7ece45532dd95cb36"
    },]

const CompanyNews = () => {

    const [companyNews, setCompanyNews] = useState(initialData);
    const [companyName, setCompanyName] = useState("TSLA");
    const [queryStock, setQueryStock] = useState('');
    const [cNA, setCNA] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [hasData, setHasData] = useState(false);

    useEffect(async () => {
        await fetch(`http://localhost:3000/api/companynews/TSLA`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
        }).then(resp => resp.json()).then((dt) => { setCompanyNews(dt.slice(0, 9)); console.log(typeof dt); }).catch((err) => { console.log(err); })

        console.log("hari: " + typeof companyNews);
        setCNA(companyNews);
        console.log(cNA);
        if (companyNews.length > 0) { setHasData(true); }
    }, [])
    const handleSub = async (event) => {
        event.preventDefault();
        setTimeout(() => {
            setShowPopup(true);
        }, 3000);

        setCompanyName(queryStock);
        await fetch(`http://localhost:3000/api/companynews/${companyName}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
        }).then(resp => resp.json()).then((dt) => { setCompanyNews(dt.slice(0, 9)); console.log(typeof dt); }).catch((err) => { console.log(err); })

        console.log("hari: " + typeof companyNews);
        setCNA(companyNews);
        console.log(cNA);
        if (companyNews.length > 0) { setHasData(true); }
        // setTimeout(() => {
        //     setLoaded(true)
        // }, 5000);
    }
    const handleConfirmationYes = async (e) => {
        // Do something when the user confirms
        event.preventDefault();
        setCompanyName(queryStock);
        await fetch(`http://localhost:3000/api/companynews/${companyName}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
        }).then(resp => resp.json()).then((dt) => { setCompanyNews(dt.slice(0, 9)); console.log(typeof dt); }).catch((err) => { console.log(err); })

        console.log("hari: " + typeof companyNews);
        setCNA(companyNews);
        console.log("rkrkrkr:" + companyNews[0].headline);
        companyNews.map((news, index) => {
            console.log("rk: " + index)
        })
        setTimeout(() => {
            setShowPopup(false);
        }, 1000)
    };

    return (
        <div>
            <form className='queryForm'>
                <div className="queryInput">
                    <input
                        type="text"
                        className="InputBar"
                        placeholder="Enter stock name"
                        value={queryStock}
                        onChange={(event) => setQueryStock(event.target.value)}
                    />
                    <button onClick={handleSub} className="querySubmitButton" >Search</button>
                    {showPopup && (
                        <div className="popup-overlay">
                            <div className="popup-content">
                                <h2>Confirm Action</h2>
                                <p>Are you sure you want to do this?</p>
                                <div className="button-group">
                                    <button onClick={handleConfirmationYes}>Yes</button>
                                    <button onClick={() => setShowPopup(false)}>No</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </form>
            {hasData &&
                (<>
                    <div className="newsDisplay">
                        <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                            <img src={`${companyNews[0].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                            <div className="card-body">
                                <h5 className="card-title newsHeadline" >{`${companyNews[0].headline}`}</h5>
                                <p className="card-text">{`${companyNews[0].summary}`}</p>
                                <p className="card-text " style={{ color: 'red' }} ><small className="text-primary newsSource" >Source : {`${companyNews[0].source}`} </small></p>
                                <a href={`${companyNews[0].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                            </div>
                        </div>
                        <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                            <img src={`${companyNews[1].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                            <div className="card-body">
                                <h5 className="card-title newsHeadline">{`${companyNews[1].headline}`}</h5>
                                <p className="card-text">{`${companyNews[1].summary}`}</p>
                                <p className="card-text"><small className="text-primary newsSource" >Source : {`${companyNews[1].source}`} </small></p>
                                <a href={`${companyNews[1].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                            </div>
                        </div>
                        <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                            <img src={`${companyNews[2].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                            <div className="card-body">
                                <h5 className="card-title newsHeadline">{`${companyNews[2].headline}`}</h5>
                                <p className="card-text">{`${companyNews[2].summary}`}</p>
                                <p className="card-text"><small className="text-primary newsSource" >Source : {`${companyNews[2].source}`} </small></p>
                                <a href={`${companyNews[2].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                            </div>
                        </div>
                    </div>
                    <div className="newsDisplay">
                        <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                            <img src={`${companyNews[3].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                            <div className="card-body">
                                <h5 className="card-title newsHeadline">{`${companyNews[3].headline}`}</h5>
                                <p className="card-text">{`${companyNews[3].summary}`}</p>
                                <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                <a href={`${companyNews[3].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                            </div>
                        </div>
                        <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                            <img src={`${companyNews[4].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                            <div className="card-body">
                                <h5 className="card-title newsHeadline">{`${companyNews[4].headline}`}</h5>
                                <p className="card-text">{`${companyNews[4].summary}`}</p>
                                <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                <a href={`${companyNews[4].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                            </div>
                        </div>
                        <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                            <img src={`${companyNews[5].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                            <div className="card-body">
                                <h5 className="card-title newsHeadline">{`${companyNews[5].headline}`}</h5>
                                <p className="card-text">{`${companyNews[5].summary}`}</p>
                                <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                <a href={`${companyNews[5].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                            </div>
                        </div>
                    </div>
                    <div className="newsDisplay">
                        <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                            <img src={`${companyNews[6].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                            <div className="card-body">
                                <h5 className="card-title newsHeadline">{`${companyNews[6].headline}`}</h5>
                                <p className="card-text">{`${companyNews[6].summary}`}</p>
                                <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                <a href={`${companyNews[6].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                            </div>
                        </div>
                        <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                            <img src={`${companyNews[7].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                            <div className="card-body">
                                <h5 className="card-title newsHeadline">{`${companyNews[7].headline}`}</h5>
                                <p className="card-text">{`${companyNews[7].summary}`}</p>
                                <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                <a href={`${companyNews[7].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                            </div>
                        </div>
                        <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                            <img src={`${companyNews[8].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                            <div className="card-body">
                                <h5 className="card-title newsHeadline">{`${companyNews[8].headline}`}</h5>
                                <p className="card-text">{`${companyNews[8].summary}`}</p>
                                <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                <a href={`${companyNews[8].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                            </div>
                        </div>
                    </div>
                </>)

            }




            )

        </div >
    )
}

export default CompanyNews;
