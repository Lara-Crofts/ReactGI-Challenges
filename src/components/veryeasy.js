// in order to create react js file, make sure you cd .. to desktop
// & run: npx create-react-app "react_gi14"  on terminal
// and will populate React files. 


// ---------------------------------
// VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your 
// basic information for example name, number, date of birth and etc. 
// This div should be hard-coded to prepare for the Medium Challenge.


class App extends React.Component {

    render() {
      return (
        <div>

          <p>name: Jessa Ayala</p>
          <p>age: 27</p>
          <p>number: 0234567890</p>
          <p>state: Utah</p>
          <p>city: SaltLakeCity</p>
          <p>date of Birth: December 24, 1995</p>
          <p>zodiacSign: Capricorn</p>

        </div>
      );
    }
  }

