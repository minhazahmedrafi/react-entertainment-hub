import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useNavigate } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 999,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate= useNavigate();

  useEffect(() => {
    if(value === 0){
      navigate("/")
    }else if(value === 1){
      navigate("/movies")
    }else if(value === 2){
      navigate("/series")
    }else if(value === 3){
      navigate("/search")
    }
  }, [value, navigate])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{color: "#fff"}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction style={{color: "#fff"}} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction style={{color: "#fff"}} label="TV Series" icon={<TvIcon />} />
      <BottomNavigationAction style={{color: "#fff"}} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
