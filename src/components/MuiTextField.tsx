import TextField from '@mui/material/TextField';
import React from 'react';
import MenuItem from '@mui/material/MenuItem'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Select } from '@mui/material';

const MuiTextField: React.FC = () => {
  return (
    <>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" color="success" required/>
        <TextField id="filled-basic" label="Filled" variant="filled" multiline rows={4}/>
        <TextField id="standard-basic" label="Standard" variant="standard" type="password"/>
        <TextField label="Estado" fullWidth select>
          <MenuItem value="CE">Ceará</MenuItem>
          <MenuItem value="SP">São Paulo</MenuItem>
          <MenuItem value="RS">Rio Grande do Sul</MenuItem>
        </TextField>

        <FormControl>
          <FormLabel>Skills</FormLabel>        
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          </FormGroup>
          <RadioGroup name='senioridade' defaultValue='0-2'>          
            <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="2-5" value="2-5"/>
            <FormControlLabel control={<Radio />} label="5-8" value="2-5"/>
          </RadioGroup>     
        </FormControl>
    </>
  );
};

export default MuiTextField;
