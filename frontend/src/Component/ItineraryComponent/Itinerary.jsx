// Itinerary.jsx
// import { useParams } from 'react-router-dom';
import './itinerary.css'
import TodoList from '../todoComponent/TodoList';

/*This will only be used when we are already passing userID, place, and daterange data*/
// const Itinerary = ({ userID, place, fromDate, toDate }) => {
const Itinerary = () => {
  // Assuming you have these variables containing the data for userID, Place, and Day n
  const userID = 'user123';
  const place = 'Boracay';
  const fromDate = '2023-09-01';
  const toDate = '2023-09-3';

  // Convert the fromDate and toDate to Date objects
  const fromDateObj = new Date(fromDate);
  const toDateObj = new Date(toDate);

  // Calculate the total number of days between fromDate and toDate
  const totalDays = Math.floor((toDateObj - fromDateObj) / (24 * 60 * 60 * 1000)) + 1;


  // Create an array representing each day from 1 to days
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);


  return (
    <div className="itinerary-container">
      <h1 className='itinerary-heading'>Your <em>{place}</em> itinerary</h1>
      {daysArray.map((day) => (
        <div key={day}>
          <h2 className='itinerary-day'>Day {day}</h2>
          {/* Pass the userID, place, and day data as props to TodoList component */}
          <TodoList userID={userID} place={place} day={day} />
        </div>
      ))}
    </div>
  );
};

//Might use proptypes later

export default Itinerary;


//for styling let's try npm install styled-components