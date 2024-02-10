import React from 'react';
import './App.css';
import Header from './Components/Header';
import { makeStyles } from '@material-ui/core/styles';
import CreateTask from './Pages/CreateTask';
import DisplayTask from './Pages/DisplayTask';
import Data from './Data/Data';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    maxHeight: '100vh',
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '20px',

    // xs => "Extra small" (0px - 599px)
    //   [theme.breakpoints.down('xs')]: {
    //     backgroundColor: 'red',
    //   },

    // sm => "Small" (600px - 959px)
    //   [theme.breakpoints.between('sm','md')]: {
    //     backgroundColor: 'blue',
    //   },

    // md => "Medium" (960px - 1279px)
    //   [theme.breakpoints.between('md','lg')]: {
    //     backgroundColor: 'black',
    //   },

    // lg => "Large" (1280px - 1919px)
    //   [theme.breakpoints.between('lg','xl')]: {
    //     backgroundColor: 'green',
    //     border: "10px solid black",
    //     paddingLeft: "20px",
    //     color: "red"
    //   },

    // xl => "Extra large" (1920px and above)
    //   [theme.breakpoints.up('xl')]: {
    //     backgroundColor: 'white',
    //   },
  },

  // TaskBox: {
  //     width: "100%",
  //     height: "500px"
  // }
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Data>
        <div className={classes.container}>
          <Header />
          <CreateTask />
          <DisplayTask />
        </div>
      </Data>
    </>
  );
};

export default App;
