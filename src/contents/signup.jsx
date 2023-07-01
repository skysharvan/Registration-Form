import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Box from '@mui/material/Box';
import { Button, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
const initialValues = {
    name: '',
    address: '',
    country: '',
    gender: '',
    hobbies: []
  };
  
  const countries = [
    {value:'india' , label:'India'},
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' },
    { value: 'china', label: 'China' },
    { value: 'england', label: 'England' },
  ];
  
  const hobbies = [
    {value:'playing' , label:'Playing'},
    { value: 'reading', label: 'Reading' },
    { value: 'writing', label: 'Writing' },
    { value: 'painting', label: 'Painting' },
    { value: 'travelling', label: 'Travelling' },
    { value: 'photography', label: 'Photography' },
  ];
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    country: Yup.string().required('Country is required'),
    gender: Yup.string().required('Gender is required'),
    hobbies: Yup.array().min(1, 'Select at least one hobby')
  });
  
const Signup = () => {
  const handleSubmit = (values) => {
    console.log(values);
    
  };

  return (
      <Box sx={{width:'100%',display:'flex',justifyContent:'center',marginTop:'20px'}}>
        <Box sx={{width:'60%',display:'flex',flexDirection:'column',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
        <h3 style={{padding:'10px'}}>Registration form</h3>
       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form sx={{display:'flex',flexDirection:'column'}}>
            <Box sx={{margin:'5px 0px',padding:'10px'}}>
                <Field
                    as={TextField}
                    fullWidth
                    name="name"
                    label="Name"
                    error={errors.name && touched.name}
                    helpertext={<ErrorMessage name="name" />}
                />
           </Box>
          <Box sx={{margin:'5px 0px',padding:'10px'}}>
            <Field
                as={TextField}
                fullWidth
                name="address"
                label="Address"
                multiline
                rows={4}
                error={errors.address && touched.address}
                helpertext={errors.address && touched.address ? errors.address : ''}
            />
           </Box>

           <Box sx={{margin:'5px 0px',padding:'10px'}}>
            <Typography>Select your country</Typography>
            <Field
                as={Select}
                fullWidth
                name="country"
                label="Country"
                
                error={errors.country && touched.country}
                helpertext={errors.country && touched.country ? errors.country : ''}
            >
                {countries.map((country) => (
                <MenuItem key={country.value} value={country.value}>
                    {country.label}
                </MenuItem>
                ))}
            </Field>
          </Box>
          
          <Box sx={{margin:'5px 0px',padding:'10px'}}>

            <FormControl component="fieldset" error={errors.gender && touched.gender}>
                <label htmlFor="gender">Select your gender</label>
                <RadioGroup name="gender">
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                {errors.gender && touched.gender && (
                <div className="error">{errors.gender}</div>
                )}
            </FormControl>
          </Box>
          
          <Box sx={{margin:'5px 0px',padding:'10px'}}>
          <Typography>Select your hobbies</Typography>
            <Field
                as={Select}
                fullWidth
                name="hobbies"
                multiple
                label="Hobbies"
                error={errors.hobbies && touched.hobbies}
                helpertext={errors.hobbies && touched.hobbies ? errors.hobbies : ''}
            >
                {hobbies.map((hobby) => (
                <MenuItem key={hobby.value} value={hobby.value}>
                    {hobby.label}
                </MenuItem>
                ))}
            </Field>
          </Box>
          
          <Box sx={{padding:'10px'}}>
          <Button  type="submit" variant="contained" color="primary">
            Submit
          </Button>
          </Box>
        </Form>
      )}
    </Formik>

        </Box>

      </Box>
  );
};

export default Signup;




