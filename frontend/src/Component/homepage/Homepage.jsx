import style from "./home.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye} from 'react-icons/fa';

function HomePage() {
  const [place, setPlace] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");

  function add(e) {
    let hasError = false;

    e.preventDefault();

    if (place.length === 0 || place.length === "") {
      alert("Please enter a place");
      hasError = true;
    }
    if (toDate === 0 || toDate === "") {
      alert("please select the end date");
      hasError = true;
    }

    if (!hasError) {
      alert(`Your schedule for ${place} will be on ${fromDate} to ${toDate} `);
      console.log(
        `Your schedule for ${place} will be on ${fromDate} to ${toDate} `
      );
    } else {
      alert("Form submission not successful");
    }
  }

  return (
    <div>
      <header id={style.header}>Hello, User</header>
      <div id={style.container}>
        {/* ADD your itinerary */}
        <div id={style.addPlace}>
       
        <div id={style.form}>
          <form onSubmit={add}>
            <div>
            <h2>Add Place and Date</h2>
              <input
                type="text"
                placeholder="Add Place"
                onChange={(e) => setPlace(e.target.value)}
              />
              <br />
              <br />
              <label>From Date:</label>
              <br />
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <br />
              <br />
              <label>To Date:</label>
              <br />
              <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
              <br />
              <br />
              <button type="submit">Submit</button>
            </div>
          </form>
          </div>
        </div>

        <div id={style.line}></div>
        {/* List of API  */}
        <div id={style.list}>
          <h1>List of Schedule</h1>
          <div id={style.yourPlace}>
            <h2>PLaceHere</h2>
            <h3>
              Date:
              </h3>
              <h2> 2023-07-05 from 2023-07-17</h2>
               <br />
            <div id={style.seeMore}>
              <Link to="./link" id={style.link}>
            <FaEye/>
              </Link>
            </div>
          </div>
        </div>
        <br />
         
      </div>
    </div>
  );
}

export default HomePage;
