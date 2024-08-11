import "../Home/Home.scss";
import { useState, useEffect } from "react";
import data from "../Assets/BusFare.json";
import { FaBus } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";

export default function Home() {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [price, setPrice] = useState(null);

  const username = localStorage.getItem('username') || 'user';

  const uniqFrom = Array.from(new Set(data.map(item => item.From)));
  const uniqTo = Array.from(new Set(data.map(item => item.To)));

  const onFromChange = (event) => {
    setFromValue(event.target.value);
    setPrice(null);
  }

  const onToChange = (event) => {
    setToValue(event.target.value);
    setPrice(null);
  }

  const onFromSearch = (searchTerm) => {
    setFromValue(searchTerm);
  }

  const onToSearch = (searchTerm) => {
    setToValue(searchTerm);
  }

  useEffect(() => {
    if (fromValue && toValue) {
      const match = data.find(item => item.From === fromValue && item.To === toValue);
      if (match) {
        setPrice(match["Regular Fare (₹)"]);
      } else {
        setPrice('No match found');
      }
    }
  }, [fromValue, toValue]);

  return (
    <div className="text1"><FaBus />pmpml
      <h1>hey {username}</h1>
      <div className="homeBox">
        <h1 className="from-to">From</h1>
        <div className="search-bar-container">
          <div className="searchbar">
            <input type="text" value={fromValue} onChange={onFromChange} placeholder="from" />
            {fromValue && (
              <div className={`dropdown ${fromValue ? 'show' : ''}`}>
                {uniqFrom.filter(fromLocation => {
                  const searchTerm = fromValue.toLowerCase();
                  const from = fromLocation.toLowerCase();

                  return searchTerm && from.startsWith(searchTerm) && from !== searchTerm;
                }).slice(0, 10)
                  .map((fromLocation, index) => (
                    <div
                      onClick={() => onFromSearch(fromLocation)}
                      className="dropdown-row"
                      key={`${fromLocation}-${index}`}
                    >{fromLocation}</div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <h1 className="from-to">To</h1>
        <div className="search-bar-container">
          <div className="searchbar">
            <input type="text" value={toValue} onChange={onToChange} placeholder="to" />
            {toValue && (
              <div className={`dropdown ${toValue ? 'show' : ''}`}>
                {uniqTo.filter(toLocation => {
                  const searchTerm = toValue.toLowerCase();
                  const to = toLocation.toLowerCase();

                  return searchTerm && to.startsWith(searchTerm) && to !== searchTerm;
                }).slice(0, 10)
                  .map((toLocation, index) => (
                    <div
                      onClick={() => onToSearch(toLocation)}
                      className="dropdown-row"
                      key={`${toLocation}-${index}`}
                    >{toLocation}</div>
                  ))}
              </div>
            )}
          </div>
        </div>
        
        <h1 className="from-to" >Date</h1>
        <input className="date" type="date"></input>


        <h1 className="from-to" > Price</h1>
        
        {price && <div className="price-display">{price}</div>}
      </div>

      <div className="btn-box">
        <button className="tkt">Buy Ticket</button>
      </div>

      <div className="pass">
        <button className="pass-btn"><IoTicket size={20} className="icon4"/><br />Daily<br /> Pass</button>
        <button className="pass-btn"><IoTicket size={20} className="icon4"/><br />Monthly<br /> Pass</button>
      </div>
    </div>
  )
}
