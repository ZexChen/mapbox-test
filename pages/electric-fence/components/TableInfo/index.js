import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/EditOutlined'
import DeleteIcon from '@material-ui/icons/DeleteOutline'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, type) {
  return { name, type };
}

const rows = [
  createData('map1', 'ployline'),
  createData('map2', 'ploygon'),
  createData('map3', 'ploygon'),
];

export default function TableInfo(props) {
  const { handleOpen, datas, setEditStatus, setListDatas } = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.concat(datas).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() => {
                    handleOpen()
                    setEditStatus(true)
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => setListDatas([])}><DeleteIcon /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
