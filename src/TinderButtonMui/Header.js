import React from 'react'
import {Link,useHistory} from 'react-router-dom';
import {IconButton,Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'
// import {PersonIcon,ForumIcon} from '@material-ui/icons'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(theme =>({
    root:{
        display:'flex',
        justifyContent :'space-between',
        alignItems:'center',
        borderBottom:'1px solid #f9f9f9',
        marginLeft:'4%',
        marginRight:'4%',
    },
    icons:{
        padding:'20px',
        // border:'none !important',
        outline:'none !important',
    },
    logo:{
        height:'40px',
        width:'40px',
        objectFit:'contain'
    }

}))
function Header({backBtn}) {
    const history = useHistory();
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
        {backBtn ? (
            <IconButton className={classes.icons} onClick={()=>history.replace(backBtn)}>
                <ArrowBackIosIcon  fontSize="large"/>
            </IconButton>
        ):(
            <Link to='/profile'>
            <IconButton className={classes.icons}>
                <PersonIcon  fontSize="large"/>
            </IconButton>
            </Link>
        )}
        
        <Link to='/'>
        <img src="./images/tinder-logo.png" alt="tinder" className={classes.logo}/>
        </Link>
        <Link to='/chat'>
        <IconButton className={classes.icons}>
            <ForumIcon fontSize="large"/>
        </IconButton>
        
        </Link>
        </Grid>
    )
}

export default Header
