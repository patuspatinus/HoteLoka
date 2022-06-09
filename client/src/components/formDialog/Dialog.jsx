import * as React from 'react';
import { useState } from "react";
import "./Dialog.css";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import  Axios  from "axios";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [amount,setAmount] = useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () =>{
    setOpen(false);
  }
  const confirmChange = async () => {
    let localstor = JSON.parse(localStorage.getItem("user"));
    await Axios.post("http://localhost:5000/addmoney",{
        customerID: localstor.customerID,
        amount: amount
    })
    localstor.wallet += amount; 
    localStorage.setItem("user", JSON.stringify(localstor));
    window.location.reload();
  }
  const handleChange = (e) => {
      setAmount(e.target.value);
      console.log(amount);
  };

  return (
    <div>
      <button className='lButton'  onClick={handleClickOpen}>
        Out of Money? Add more now!
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the amount you want to add, please enter a number we're too lazy to check D:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Amount"
            value={amount}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={confirmChange}>Confirm</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}