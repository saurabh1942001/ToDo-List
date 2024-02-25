import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { MyData } from '../Data/Data';
import { makeStyles } from '@material-ui/core/styles';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import { Paper } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
//   design: {
//     border: '1px solid black',
//     padding: '8px',
//     overflow: 'hidden',
//     textAlign: 'center',
//   },

  btnBorder: {
    border: '1px solid black'
  }
  // outer: {
  //     maxHeight: "100vh"
  // }
}));

const DisplayTask = () => {
  const {
    list,
    setList,
    task,
    setTask,
    status,
    setStatus,
    fetchData,
    deleteData,
    updateData,
    taskDone,
  } = useContext(MyData);

  const classes = useStyles();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
            maxHeight: '75vh',
            minHeight: '75vh',
          background: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '70%',
          border: '1px solid black',
          textAlign: 'center',
          overflowY: 'scroll'
        }}
      >
        <Table stickyHeader sx={{ maxHeight: '250px' }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: 'lightblue', color: '#000' }}> Sr No </TableCell>
              <TableCell style={{ backgroundColor: 'lightblue', color: '#000' }}> Task </TableCell>
              <TableCell style={{ backgroundColor: 'lightblue', color: '#000' }}> Status </TableCell>
              <TableCell style={{ backgroundColor: 'lightblue', color: '#000' }}> Actions </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list &&
              list.map((task, index) => (
                <TableRow key={task.id}>
                  <TableCell> {index + 1} </TableCell>

                  {task.status == 'Completed' ? (
                    <TableCell sx={{ textDecoration: 'line-through'}}>
                      
                      { task.task.length > 15 ? task.task.substring(0,15)+'...' : task.task}
                    </TableCell>
                  ) : (
                    <TableCell> { task.task.length > 15 ? task.task.substring(0,15)+'...' : task.task} </TableCell>
                  )}

                  <TableCell> {task.status} </TableCell>
                  <TableCell>

                    {
                        task.status == 'Completed' ? ( <Button sx={{border: "1px solid black"}} disabled onClick={() => updateData(task.id)}> <EditIcon /> </Button> ) 
                        : ( <Button sx={{border: "1px solid black"}} onClick={() => updateData(task.id)}> <EditIcon /> </Button> )
                    }

                        &nbsp;
                        <Button sx={{border: "1px solid black"}} onClick={() => deleteData(task.id)}> <DeleteIcon /> </Button>
                        &nbsp;
                    {
                        task.status == 'Completed' ? ( <Button sx={{border: "1px solid black"}} disabled onClick={() => taskDone(task.id)}> <DoneIcon /> </Button> ) 
                        : ( <Button sx={{border: "1px solid black"}} onClick={() => taskDone(task.id)}> <DoneIcon /> </Button> )
                    }

                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DisplayTask;
