import React from 'react'
import {Button, Grid, makeStyles, TextField,Paper,Hidden} from '@material-ui/core'

// test case
// btn defaults
// nested class
// makestyles props


const useStyles = makeStyles(theme =>({
    root:{
        display:'flex',
        justifyContent:'space-between',
        padding:'9px',
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            flexDirection:'column',

            '& $btn2':{
                margin:'15px 0',
                // padding:'20px 0',
            }
        },
        [theme.breakpoints.between('xs','sm')]:{
            display:'flex',
            flexDirection:'row-reverse',
            // margin:'15px 0',
        }
    },
    btn1:{
        color:'#ff3',
        background:'teal',
        outline:'none !important',
        '&:hover':{
            color:'#fff',
            background:'teal',
        }
    },
    btn2:{
        color:'black',
        borderColor:'red',
        outline:'none !important',
    },
    btn3:{
        color: props => (props.cool ? 'red' : 'orange'),
        background: props => (props.cool ? 'white' : 'black'),
        '&:hover':{
            color: props => (props.cool ? 'red' : 'orange'),
            background: props => (props.cool ? 'white' : 'black'),
        }
    },
    hp:{
        display:'flex',
        flexDirection:'row',
        color:'red',
        fontSize:'20px',
        '& $pp':{
            color:'green',
            '& $sp':{
                color:'black'
            }
        }
    },
    pp:{
        fontSize:'29px',
    },
    sp:{
        fontSize:'13px',
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        background:'teal',
        margin:'10px'
    },
    textField:{
        padding:'7px',
        margin:'5px',
        fontSize:'18px',
        color:'red',
    }
}))

export const MuiBreakpoints = (props) => {
    const classes = useStyles(props);
    return (
        <>
        <Grid className={classes.root}>
            <Grid item  xs={6} md={4} lg={12} sm={6}>
                <Button variant="contained" color="primary" className={classes.btn1}>xs6 md4 lg12 sm6</Button>
            </Grid>
            <Grid item  xs={5} md={5} lg={6} sm={6}>
                <Button variant="outlined" className={classes.btn2}>xs5 md5 lg6 sm6</Button>
            </Grid>
            <Grid item  xs={5} md={4} lg={4} sm={6}>
                <Button variant="contained"  className={classes.btn3}>xs5 md4 lg4 sm6</Button>
            </Grid>
        </Grid>
        <Grid className={classes.root}>  
            <Grid item sm={3} md={3}>
                <Paper className={classes.paper}>sm=3 md=3</Paper>
            </Grid>
            <Grid item sm={7} md={3}>
                <Paper className={classes.paper}>sm=7 md=3</Paper>
            </Grid>
            <Grid item sm={2} md={5}>
                <Paper className={classes.paper}>sm=2 md=5</Paper>
            </Grid>
        </Grid> 
               
            {/* <TextField /> */}
            <Grid container>
                <Hidden xsDown item  xs={8} md={7} lg={7} sm={6}>
                    <TextField fullWidth placeholder="type something" className={classes.textField}/>
                </Hidden>
                <Hidden mdUp item  xs={5} md={5} lg={5} sm={6}>
                    <Button variant="outlined" className={classes.btn2} style={{ marginLeft:'15px'}}>xs5 md5 lg5 sm6</Button>
                </Hidden>
            </Grid>

        {/* <h1 className={classes.hp}>Hello text <p className={classes.pp}> i am padding <small className={classes.sp}>test</small></p></h1> */}


        </>
    )
}
