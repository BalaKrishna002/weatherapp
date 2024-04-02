import './forecast1.css';

const WEEK_DAYS = ['Monday', "Tuesday", "Wednesday", 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast1 = ({ data }) =>{
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return(
        <>
        <h3 className="title" style={{textDecoration: "underline"}}>For Next 7 days:</h3>
        <div className="scroll-container" id="scrollContainer">
            <div className="scroll-content">
                {data.list.splice(0, 7).map((item, idx) => (
                    <div className="item" key={idx}>
                        <div className="top">
                            <div>
                                <span className="day">{forecastDays[idx]}</span>
                                <p>{item.weather[0].description} <span className="temp">{Math.round(item.main.temp_min)}<sup>o</sup>C</span></p>
                            </div>
                            <img src={`icons/${item.weather[0].icon}.png`} alt="weather-icon" className="weather-icon" ></img>
                        </div>
                        <div className="bottom">
                            <div className="details">
                                <div className="parameter-row">
                                    <span className="parameter-label top">Details:</span>
                                </div>
                                <div className="parameter-row">
                                    <span className="parameter-label">Pressure :</span>
                                    <span className="parameter-value">{item.main.pressure} hPa</span>
                                </div>
                                <div className="parameter-row">
                                    <span className="parameter-label">Humidity :</span>
                                    <span className="parameter-value">{item.main.humidity} %</span>
                                </div>
                                <div className="parameter-row">
                                    <span className="parameter-label">Cluods :</span>
                                    <span className="parameter-value">{item.clouds.all} %</span>
                                </div>
                                <div className="parameter-row">
                                    <span className="parameter-label">Speed :</span>
                                    <span className="parameter-value">{item.wind.speed} m/s</span>
                                </div>
                                <div className="parameter-row">
                                    <span className="parameter-label">Level :</span>
                                    <span className="parameter-value">{item.main.sea_level} m</span>
                                </div>
                                <div className="parameter-row">
                                    <span className="parameter-label">Feels Like :</span>
                                    <span className="parameter-value">{item.main.feels_like} <sup>o</sup>C</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

export default Forecast1;
