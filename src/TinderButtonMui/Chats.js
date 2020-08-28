import React from 'react'
import {Link,useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Avatar,Grid} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection:'column',
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    img:{
        // display:'flex',
        marginRight:'3%',
        marginLeft:'5%'
    },
    name:{
        color:'black',
        listStyle:'none',
        textDecoration:'none'

    }
}));
const people = [{
    name:'Asikur Rahman',
    img:'./images/1.png'
},
{
    name:'Aleen Rose',
    img:'./images/2.png'
},
{
    name:'Mazharul Islam',
    img:'./images/3.png'
},
]
function Chats() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        {people.map(p => (
            <Link to={`/chat/${p.name}`}>
            <Grid container >
            <Avatar src={p.img} className={classes.img}/>
            <p className={classes.name}>{p.name}</p>
            </Grid>
            </Link>
            ))}
      
      
    </div>
    )
}

export default Chats
