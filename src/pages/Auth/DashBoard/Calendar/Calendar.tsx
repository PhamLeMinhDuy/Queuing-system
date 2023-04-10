import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

function CalendarComponent(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  function handleDateChange(date: Date | null): void {
    setSelectedDate(date);
  }

  return (
    <div className="search-box">
      <div className="search-box__datepicker">
        <FontAwesomeIcon icon={faCalendar} />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          inline
        />
      </div>
    </div>
  );
}

export default CalendarComponent;