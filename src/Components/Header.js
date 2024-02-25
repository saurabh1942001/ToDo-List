import { Typography } from '@material-ui/core';
import React from 'react';
import { DEFAULT_BREAKPOINTS } from 'react-bootstrap/esm/ThemeProvider';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  container: {
    // xs => "Extra small" (0px - 599px)
    [theme.breakpoints.down('xs')]: {
      fontSize: '40px'
    },

    // sm => "Small" (600px - 959px)
      // [theme.breakpoints.between('sm','md')]: {
      //   fontSize: '40px'
      // },

    // md => "Medium" (960px - 1279px)
      // [theme.breakpoints.between('md','lg')]: {
      //   fontSize: '500px'
      // },

    // lg => "Large" (1280px - 1919px)
      // [theme.breakpoints.between('lg','xl')]: {
      //   backgroundColor: 'green',
      //   border: "10px solid black",
      //   paddingLeft: "20px",
      //   color: "red"
      // },

    // xl => "Extra large" (1920px and above)
      // [theme.breakpoints.up('xl')]: {
      //   backgroundColor: 'white',
      // },
  }
}))

const Header = () => {

  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" className={classes.container}>Manage Your Tasks</Typography>
    </>
  );
};

export default Header;
