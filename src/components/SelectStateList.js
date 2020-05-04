import React, { useState, useEffect } from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import {fetchState} from '../api';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './sc.css'
import states from '../state.json'

const SelectStateList=({handleSumbit})=>{
    const useStyles = makeStyles((theme) => ({
        button: {
          display: 'block',
          marginTop: theme.spacing(2),
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        }
      }));
    const classes = useStyles();
    
    const [open, setOpen] =useState(false);
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
    

   

 return (
        <div className='d'>
          <Button className={classes.button} onClick={handleOpen}>
            CHECK FOR ZONE
          </Button>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label"></InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={(e)=>handleSumbit(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value=''></MenuItem>
              {Object.keys(states.states).map(i => <MenuItem  key={i} value={states.states[i]}>{states.states[i]}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
      );
    }

    export default SelectStateList;
