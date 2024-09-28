import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { departments } from "../data/departments";
import { states } from "../data/states";

import { setEmployee } from "../redux/features/employeeSlice";
import { employeeSchema } from "../redux/services/validationsMessage";
import dayjs from 'dayjs';

export function EmployeeForm() {
  const dispatch = useDispatch()

  const initialValues = {
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: 'AL',
    zipCode: '',
    department: 'Sales'
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: employeeSchema,
    onSubmit: (values) => {
      const formattedValues = {
        ...values,
        dateOfBirth: values.dateOfBirth ? dayjs(values.dateOfBirth).format('MM/DD/YYYY') : null,
        startDate: values.startDate ? dayjs(values.startDate).format('MM/DD/YYYY') : null
      }
      dispatch(setEmployee(formattedValues))
    }
  })

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <TextField
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
        label="First Name"
        placeholder="John"
        name="firstName"
        sx={{ width: '45%' }}
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <TextField
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
        label="Last Name"
        placeholder="Doe"
        name="lastName"
        sx={{ width: '45%' }}
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date of Birth"
          sx={{ width: '45%' }}
          value={formik.values.dateOfBirth}
          onChange={(value) => formik.setFieldValue('dateOfBirth', value)}
          slotProps={{
            textField: {
              error: formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth),
              helperText: formik.touched.dateOfBirth && formik.errors.dateOfBirth
            },
          }}
        />

        <DatePicker
          label="Start Date"
          sx={{ width: '45%' }}
          value={formik.values.startDate}
          onChange={(value) => formik.setFieldValue('startDate', value)}
          slotProps={{
            textField: {
              error: formik.touched.startDate && Boolean(formik.errors.startDate),
              helperText: formik.touched.startDate && formik.errors.startDate
            },
          }}
        />
      </LocalizationProvider>

      <fieldset>
        <legend>Address</legend>

        <TextField
          error={formik.touched.street && Boolean(formik.errors.street)}
          helperText={formik.touched.street && formik.errors.street}
          label="Street"
          placeholder="Buttonwood Avenue"
          name="street"
          sx={{ width: '45%' }}
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TextField
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          label="City"
          placeholder="Pittsburgh"
          name="city"
          sx={{ width: '45%' }}
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <FormControl
          sx={{ width: '45%' }}
          error={formik.touched.state && Boolean(formik.errors.state)}
        >
          <InputLabel id="select">State</InputLabel>
          <Select
            labelId="select"
            label="State"
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={() => formik.setFieldTouched('state', true)}
          >
            {states.map((state) => (
              <MenuItem key={state.value} value={state.value}>
                {state.label}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.state && formik.errors.state && (
            <FormHelperText>{formik.errors.state}</FormHelperText>
          )}
        </FormControl>

        <TextField
          error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
          helperText={formik.touched.zipCode && formik.errors.zipCode}
          label="Zip Code"
          placeholder="86385"
          name="zipCode"
          sx={{ width: '45%' }}
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </fieldset>

      <FormControl
        sx={{ width: '45%' }}
        error={formik.touched.department && Boolean(formik.errors.department)}
      >
        <InputLabel id="select">Department</InputLabel>
        <Select
          labelId="select"
          label="Department"
          name="department"
          value={formik.values.department}
          onChange={formik.handleChange}
          onBlur={() => formik.setFieldTouched('department', true)}
        >
          {departments.map((department) => (
            <MenuItem key={department.value} value={department.value}>
              {department.label}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.department && formik.errors.department && (
          <FormHelperText>{formik.errors.department}</FormHelperText>
        )}
      </FormControl>

      <Button
        className="form__button"
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
      >
        Save
      </Button>
    </form>
  )
}
