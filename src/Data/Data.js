import React, { useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';

export const MyData = createContext();

const Data = ({ children }) => {
  const [list, setList] = useState();
  const [task, setTask] = useState('');
  const [status, setStatus] = useState();
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState();

  const sendDataToAPI = ({ task, status }) => {
    axios.post('https://65c36a0739055e7482c0d624.mockapi.io/ToDoList', { task, status }).then((res) => {
        console.log('Added...');
        fetchData();
      }).catch((error) => {
        console.log('...');
      });
  };

  const fetchData = async () => {
    const { data } = await axios.get('https://65c36a0739055e7482c0d624.mockapi.io/ToDoList');
    setList(data);
    console.log('Saurabh::', data);
  };

  const deleteData = async (id) => {
    console.log(id);
    try {
      await axios.delete(`https://65c36a0739055e7482c0d624.mockapi.io/ToDoList/${id}`);
      fetchData(); // Assuming fetchData is defined
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const updateData = async (id) => {
    setEdit(true);
    try {
      const { data } = await axios.get(`https://65c36a0739055e7482c0d624.mockapi.io/ToDoList/${id}`);
      setTask(data.task);
      setEditID(id);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const updateData1 = async (id, task) => {
    await axios.put(`https://65c36a0739055e7482c0d624.mockapi.io/ToDoList/${id}`, { task });
    fetchData();
    setEdit(false)
    setTask("")
  };

  const taskDone = async (id) => {
    await axios.put(`https://65c36a0739055e7482c0d624.mockapi.io/ToDoList/${id}`,{ status: 'Completed' });
    fetchData();
  };
  return (
    <>
      <MyData.Provider
        value={{
          list,
          setList,
          task,
          setTask,
          status,
          setStatus,
          fetchData,
          sendDataToAPI,
          deleteData,
          updateData,
          edit,
          setEdit,
          updateData1,
          editID,
          setEditID,
          taskDone,
        }}
      >
        {children}
      </MyData.Provider>
    </>
  );
};

export default Data;
