import React, { useState } from 'react';
import './Todo.css';
import { Modal,  Button, List, ListItem, ListItemAvatar, ListItemText, ModalManager } from '@mui/material'
// import { makeStyles } from '@mui/icons-material';
// import { makeStyles } from '@material-ui/icons';


// const useStyles = makeStyles((theme) => ({

//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.bsckground.paper,
//     boarder: '2px solid #000',
//     boxShadow: theme.spacing (2,4,3),
//   },
// }));

function Todo(props) {

  // const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <>
    <Modal
      open={open}
      onClose={e => setOpen(false)}
    >
      {/* <div className= {classes.paper}> */}
      <div>
        <h1>I'm Ranjeet</h1>
        <button onClick = {e => setOpen(false)}></button>
      </div>

    </Modal>
    <List className='todoList'>
        <ListItem>
          <ListItemAvatar>

          </ListItemAvatar>
          {/* <ListItemText primary = "Todo" secondary = {props.text} /> */}
          {/* <ListItemText primary = {props.todo.todo} secondary = "Dummy deadline ⏰" /> go to the file named App.js in line number 72 */}
          {/* go to the file named App.js in line number 72 */}
          <ListItemText primary={props.text} secondary="Dummy deadline ⏰" />
        </ListItem>

        <button onClick = {e => setOpen(true)}> Edit</button>

        {/* <Button onClick={event => db.collection('todos').doc(probs.todo.id).delete()}>Delete Me</Button> */}
      </List>
      </>
  )
}

export default Todo; 
