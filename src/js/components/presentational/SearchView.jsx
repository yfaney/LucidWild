import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  menu: {
    width: 200,
  },
}));

const propTypes = {
  onSearch: PropTypes.func.isRequired,
}

const SearchView = (props) => {
  const { onSearch } = props;

  const classes = useStyles();

  const [searchText, setSearchText] = React.useState('');

  const handleClick = () => {
    if (onSearch) {
      onSearch(searchText);
    } else {
      console.log('onSearch is not defined.');
    }
  };

  const onEnterPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      // write your functionality here
      handleClick();
    }
  };

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>
          Search a video and play
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="text-search"
          className={classes.textField}
          onChange={handleSearchText}
          label="Search keyword"
          margin="normal"
          onKeyPress={onEnterPress}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" className={classes.button} onClick={handleClick}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

SearchView.propTypes = propTypes;

export default SearchView;
