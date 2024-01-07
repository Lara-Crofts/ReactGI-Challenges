


// HARD: Now that you have a basic react app to display one person’s worth of information,
// now modify the app to iterate over an array of people’s basic information, while still
//  keeping the new list of contacts in the top-level of state.
//  (Optional: add styling to space out each person’s info)


import React from 'react';
import BasicInfo from './medium'; //location of basicinfo file in medium.js


    const BasicInfoList = () => {
        const peoplesInfo = [

            {name: "Jenna Marbles", 
            age: "24",
            number: "1234567890",
            state: "FL",
            city: "Miami",
            dateOfBirth: "February 24, 1990",
            zodiacSign: "Libra" },


            {name: "Audrey Hepburn", 
            age: "28",
            number: "4234567890",
            state: "NYC",
            city: "Yonkers",
            dateOfBirth: "Aug 30, 1994",
            zodiacSign: "Gemini" },

            {name: "Selena Quintanilla", 
            age: "26",
            number: "2234567890",
            state: "TX",
            city: "Christus Corpus",
            dateOfBirth: "April 16, 1971",
            zodiacSign: "Aries" },
        ];



  return (
    <div className="listPeople">
        {peoplesInfo.map((info) => (

            <BasicInfo 
            name={info.name} 
            age={info.age} 
            number={info.number} 
            state={info.state} 
            city={info.city} 
            dateOfBirth={info.dateOfBirth}
            zodiacSign={info.zodiacSign} />

        ))};
    </div>
  );
};

export default BasicInfoList;


