import NavBar from "@/components/navbar.js"
import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/searchbar.js';
import Head from "next/head";
import styles from "@/styles/event.module.css";
import Footer1 from "@/components/footer1.js";

const events = () => {
    const [originalData, setOriginalData] = useState([
      { id: '1', name: 'Kansas City Chiefs vs Buffalo Bills', date: 'Sunday', time: '3:30 PM' },
      { id: '2', name: 'Miami Dolphins vs Kansas City Chiefs', date: 'Saturday', time: '4:50 PM' },
      { id: '3', name: 'Kansas City Chiefs vs Los Angeles Chargers', date: 'Monday', time: '4:00 PM' },
    ]);

    
    const [filteredData, setFilteredData] = useState(originalData);

    const handleFilterChange = ({ searchTerm, selectedDate, selectedTime }) => {
        let filtered = originalData.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
  
        if (selectedDate) {
          filtered = filtered.filter((item) => item.date === selectedDate.value);
        }
    
        if (selectedTime) {
          filtered = filtered.filter((item) => item.time === selectedTime.value);
        }
    
        setFilteredData(filtered);
      };
    
  

    return (
    <>
            <Head> 
        <title>The Eras Tour</title>

        <meta name="description" content="The Eras Tour Tickets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ts_icon.png" />
        </Head>
        
        <NavBar />

        <h1 className={styles.title}>Events</h1>
      <div>
        <SearchBar data={originalData} onFilterChange={handleFilterChange} />


        {/* Render your filtered data */}
        <div>
        <ul className={styles.data}>
          {filteredData.map((item) => (
                  <li key={item.id} className={styles.wtf}>
                  <span className={styles.itemName}>{item.name} </span>
 
                  <div className={styles.itemDetails}>

                  <span className={styles.itemDate}>{item.date} • </span>  &nbsp;
                  <span className={styles.itemTime}> {item.time}</span>

                    </div>
                </li>
          ))}
        </ul>
        </div>
        
      </div>

      <Footer1 />
    </>
    );
  };
  
  export default events;
