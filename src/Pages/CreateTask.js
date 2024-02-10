import React, { useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { MyData } from '../Data/Data';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  Text: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    columnGap: '25px',
    justifyContent: 'center',
  },
}));

const CreateTask = () => {
  const classes = useStyles();

  const {
    list,
    setList,
    task,
    setTask,
    status,
    setStatus,
    fetchData,
    sendDataToAPI,
    edit,
    setEdit,
    updateData1,
    editID,
    setEditID,
    taskDone,
  } = useContext(MyData);

  const sendData = () => {
    if (task === '') {
      alert('Please enter task');
    } else {
      console.log('saurabh::=> ', task, status);
      setStatus('In Progress');
      setTask('');
      const oldObj = {
        task: task,
        status: status,
      };

      sendDataToAPI({ task, status });
    }
  };

  return (
    <>
      <div className={classes.Text}>
        <TextField
          variant="outlined"
          color="primary"
          sx={{ width: '60%' }}
          label="Enter Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            setStatus('In Progress');
          }}
        />

        {
            edit ? ( <Button variant="contained" color="success" onClick={() => updateData1(editID, task)}> Update </Button> ) 
            : ( <Button variant="contained" color="success" onClick={sendData}> Add </Button> )
        }
      </div>
    </>
  );
};

export default CreateTask;
