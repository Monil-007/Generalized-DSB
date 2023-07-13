import React, { useState, useEffect } from 'react'
import './MarketNews.css'

const MarketNews = () => {
    const [marketNews, setMarketNews] = useState([]);
    const [arrayOfNews, setArrayOfNews] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(async () => {
        await fetch(`http://localhost:3000/api/marketnews`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
        }).then(resp => resp.json()).then((dt) => { setMarketNews(dt.slice(0, 18)); setArrayOfNews(marketNews.map(Object.values)); setIsLoaded(true); console.log(typeof dt); console.log(dt) }).catch((err) => { console.log(err); })
        console.log(marketNews);
        console.log(arrayOfNews)
    }, [])
    // if (!marketNews) {
    //     return <div>Loading...</div>;
    // }
    return (
        <div>

            <h2 className='heading'>Trending Market News</h2>
            <h5 className='subHeading'>You'll get all market hot trending news here!!</h5>
            {isLoaded &&
                (
                    <>
                        <div className="newsDisplay">
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[0].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline" >{`${marketNews[0].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[0].summary}`}</p>
                                    <p className="card-text " style={{ color: 'red' }} ><small className="text-primary newsSource" >Source : {`${marketNews[0].source}`} </small></p>
                                    <a href={`${marketNews[0].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[1].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[1].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[1].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Source : {`${marketNews[1].source}`} </small></p>
                                    <a href={`${marketNews[1].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[2].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[2].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[2].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Source : {`${marketNews[2].source}`} </small></p>
                                    <a href={`${marketNews[2].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                        </div>
                        <div className="newsDisplay">
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[3].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[3].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[3].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[3].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[4].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[4].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[4].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[4].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[5].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[5].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[5].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[5].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                        </div>
                        <div className="newsDisplay">
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[6].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[6].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[6].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[6].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[7].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[7].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[7].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[7].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[8].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[8].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[8].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[8].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                        </div>
                        <div className="newsDisplay">
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[9].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[9].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[9].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[9].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[10].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[10].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[10].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[10].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[11].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[11].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[11].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[11].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                        </div>
                        <div className="newsDisplay">
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[12].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[12].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[12].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[12].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[13].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[13].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[13].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[13].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                            <div className="card my-3" style={{ backgroundColor: "white", width: "18rem", border: "2px solid black" }}>
                                <img src={`${marketNews[14].image}`} className="card-img-top" alt={`Sorry, Image for this news is unavailable!!`} />
                                <div className="card-body">
                                    <h5 className="card-title newsHeadline">{`${marketNews[14].headline}`}</h5>
                                    <p className="card-text">{`${marketNews[14].summary}`}</p>
                                    <p className="card-text"><small className="text-primary newsSource" >Last updated by {"unknown"} </small></p>
                                    <a href={`${marketNews[14].url}`} target="_blank" className="btn btn-success newsUrl">Detailed news</a>
                                </div>
                            </div>
                        </div>
                    </>
                )
                // (<p>{marketNews[0].headline} {marketNews[0].summary}</p>)
            }
        </div>
    )
}

export default MarketNews;
