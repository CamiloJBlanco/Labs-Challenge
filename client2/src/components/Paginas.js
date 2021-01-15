import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

export default function Paginas({ setPage = (value) => {} }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue - 1);
    setPage(newValue - 1);
  };

  return (
    <div className={classes.root}>
      <Typography></Typography>
      <Pagination count={2} value={value} onChange={handleChange} className="pagination" />
    </div>
  );
}