import React from 'react'
import { Button as MuiButton, makeStyles, FormControl, FormControlLabel, Checkbox as MuiCheckbox,TextField,FormLabel,RadioGroup as MuiRadioGroup,Radio,InputLabel,Select as MuiSelect,MenuItem,FormHelperText } from "@material-ui/core";
// import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";


const useStyles = makeStyles(theme => ({
    root: { 
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    }
}))
const Controls = {
    Input,
    RadioGroup,
    Select,
    Checkbox,
    // DatePicker,
    Button

}
function Button(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            {text}
        </MuiButton>
    )
}
function Checkbox(props) {
    const { name, label, value, onChange } = props;
    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                    name={name}
                    color="primary"
                    checked={value}
                    onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
                />}
                label={label}
            />
        </FormControl>
    )
}
function DatePicker(props) {

    // const { name, label, value, onChange } = props
    // const convertToDefEventPara = (name, value) => ({
    //     target: {
    //         name, value
    //     }
    // })

    // return (
    //     <MuiPickersUtilsProvider utils={DateFnsUtils}>
    //         <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
    //             label={label}
    //             format="MMM/dd/yyyy"
    //             name={name}
    //             value={value}
    //             onChange={date =>onChange(convertToDefEventPara(name,date))}

    //         />
    //     </MuiPickersUtilsProvider>
    // )
}
function Input(props) {

    const { name, label, value,error=null, onChange } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}
function RadioGroup(props) {

    const { name, label, value, onChange, items } = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                {
                    items.map(
                        item => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                        )
                    )
                }
            </MuiRadioGroup>
        </FormControl>
    )
}
function Select(props) {

    const { name, label, value,error=null, onChange, options } = props;

    return (
        <FormControl variant="outlined"
        {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default Controls;