import React, { Component } from 'react'
import axios from 'axios'
import './sc.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
export default class New extends Component {
    state={
        tableData:{}
    }
    
    async componentDidMount() {
  
        const res=await axios.get('https://api.rootnet.in/covid19-in/stats/latest')
        console.log(res.data.data.regional[1].deaths)
        this.setState({tableData:res.data.data.regional});
     }
    render() {
        //const classes = useStyles();
        
        return (
            
      
         
          <TableContainer component={Paper}>
          <Table  className='t' aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>STATE</StyledTableCell>
                <StyledTableCell align="right">CONFIRMED&nbsp;</StyledTableCell>
                <StyledTableCell align="right">RECOVERED&nbsp;</StyledTableCell>
                <StyledTableCell align="right">DEATHS&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {Object.keys(this.state.tableData).map(d => (
                <StyledTableRow key={d}>
                  <StyledTableCell component="th" scope="row">
                  {this.state.tableData[d].loc} 
                  </StyledTableCell>
                  <StyledTableCell align="right" text-decoration-color="red">{this.state.tableData[d].totalConfirmed}</StyledTableCell>
                  <StyledTableCell align="right">{this.state.tableData[d].discharged}</StyledTableCell>
                  <StyledTableCell align="right">{this.state.tableData[d].deaths}</StyledTableCell>
                
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
}
        
