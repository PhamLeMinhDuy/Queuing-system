import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchBox.css';
import vi from 'date-fns/locale/vi';

registerLocale('vi', vi);

function SearchBox() {
  const [selectedDateRange, setSelectedDateRange] = useState<[Date | null, Date | null]>([null, null]);

  function handleDateChange(date: Date | null, event: React.SyntheticEvent<any> | undefined) {
    if (selectedDateRange[0] === null) {
      setSelectedDateRange([date, null]);
    } else if (selectedDateRange[1] === null || !date) {
      setSelectedDateRange([selectedDateRange[0], date]);
    } else {
      setSelectedDateRange([date, null]);
    }
  }
  const currentDate = new Date();
  const currentDay = currentDate.getDate().toString().padStart(2, '0');
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const currentYear = currentDate.getFullYear();

  const [startDate, endDate] = selectedDateRange;

  return (
    <div className="search-box">
      <div className="search-box__datepicker">
        <div className="search-box__datepicker-wrapper">
          <div className="search-box__datepicker-input">
            <div className="search-box__datepicker">
              <i className="fa-solid fa-calendar-days"></i>
              <DatePicker className='custom-datepicker'
                selected={startDate}
                onChange={handleDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd/MM/yyyy"
                locale="vi"
                placeholderText='20/03/2023'
              />
            </div>
          </div>
          <i className="fa-solid fa-caret-right"></i>
          <div className="search-box__datepicker-input">
            <div className="search-box__datepicker">
            <i className="fa-solid fa-calendar-days"></i>
              <DatePicker className='custom-datepicker'
                selected={endDate}
                onChange={handleDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd/MM/yyyy"
                locale="vi"
                minDate={startDate}
                placeholderText={`${currentDay}/${currentMonth}/${currentYear}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;