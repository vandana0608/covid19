import React, { useState, useEffect } from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import {fetchCountries} from '../api';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './sc.css'

const SelectCountry=({handleCountryChange})=>{
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
    const[countries,setCountries]=useState([]);
    const [open, setOpen] =useState(false);
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
    

    useEffect(() => {
        const fetchAPI =async()=>{
        setCountries(await fetchCountries())
      };
        fetchAPI()
    }, []);

 return (
        <div className='d'>
          <Button className={classes.button} onClick={handleOpen}>
            CHECK GLOBAL
          </Button>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label"></InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={(e)=>handleCountryChange(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value='Global'></MenuItem>
              {countries.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
      );
    }

    export default SelectCountry;
