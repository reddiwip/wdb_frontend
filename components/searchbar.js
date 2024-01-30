import React, { useState } from 'react';
import Select from 'react-select';
import styles from '@/styles/search.module.css';

const SearchBar = ({ data, onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);





    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        onFilterChange({ searchTerm: value, selectedDate, selectedTime });
      };

  const handleDateChange = (option) => {
    setSelectedDate(option);
    onFilterChange({ searchTerm, selectedDate: option, selectedTime });
  };

  const handleTimeChange = (option) => {
    setSelectedTime(option);
    onFilterChange({ searchTerm, selectedDate, selectedTime: option });
  };

  const selectS = {
    // control: (provided) => ({
    //     ...provided,
    //     height: '50px', // Set the height of the select box
    //     minHeight: '50px',
    //     borderColor: 'black',
    //     borderRadius: 0,
    //     boxShadow: 'none', // Optional: removes the box shadow
    //     '&:hover': {
    //       borderColor: 'black', // Keeps the border color on hover
    //     },
    //   }),

      valueContainer: (provided) => ({
        ...provided,
        height: '38.8px',
        padding: '0 6px', // Adjust padding as needed
      }),


    placeholder: (defaultStyles) => ({
        ...defaultStyles,
        color: 'black',
      }),
      control: (defaultStyles) => ({
        ...defaultStyles,
        borderColor: 'black', 
        borderRadius: 0, 
      }),
      indicatorSeparator: () => ({
        display: 'none',
      }),
      dropdownIndicator: (defaultStyles) => ({
        ...defaultStyles,
        color: 'black', 
      }),
    };

  return (

    <div className={styles.searchBarContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    <div className={styles.pls1}>
        <Select
          isSearchable={false} 
          options={data.map(item => ({ value: item.time, label: item.time }))}
          value={selectedTime}
          onChange={handleTimeChange}
          isClearable
          placeholder="Time"
          styles={selectS}
        />
      </div>

      <div className={styles.pls2}>
        <Select
          isSearchable={false} 
          options={data.map(item => ({ value: item.date, label: item.date }))}
          value={selectedDate}
          onChange={handleDateChange}
          isClearable
          placeholder="Date"
          styles={selectS}
        />
      </div>
    </div>

  );
};

export default SearchBar;
