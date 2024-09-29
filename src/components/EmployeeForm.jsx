import { Button } from '@mui/material'

import dayjs from 'dayjs'
import { useFormik } from "formik"
import { useDispatch } from "react-redux"

import { FormDatePicker } from './FormDatePicker'
import { FormSelect } from './FormSelect'
import { FormTextField } from './FormTextField'

import { setEmployee } from "../redux/features/employeeSlice"

export function EmployeeForm({ departments, employeeSchema, states }) {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: null,
      startDate: null,
      street: '',
      city: '',
      state: 'AL',
      zipCode: '',
      department: 'Sales'
    },
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
      <FormTextField
        formik={formik}
        name="firstName"
        label="First Name"
        placeholder="John"
        width={{ width: '45%' }}
      />

      <FormTextField
        formik={formik}
        name="lastName"
        label="Last Name"
        placeholder="Doe"
        width={{ width: '45%' }}
      />

      <FormDatePicker
        formik={formik}
        label="Date of Birth"
        name="dateOfBirth"
        width={{ width: '45%' }}
      />

      <FormDatePicker
        formik={formik}
        label="Start Date"
        name="startDate"
        width={{ width: '45%' }}
      />

      <fieldset>
        <legend>Address</legend>

        <FormTextField
          formik={formik}
          name="street"
          label="Street"
          placeholder="Buttonwood Avenue"
          width={{ width: '45%' }}
        />

        <FormTextField
          formik={formik}
          name="city"
          label="City"
          placeholder="Pittsburgh"
          width={{ width: '45%' }}
        />

        <FormSelect
          formik={formik}
          options={states}
          name="state"
          label="State"
          width={{ width: '45%' }}
        />

        <FormTextField
          formik={formik}
          name="zipCode"
          label="Zip Code"
          placeholder="86385"
          width={{ width: '45%' }}
        />
      </fieldset>

      <FormSelect
        formik={formik}
        options={departments}
        name="department"
        label="Department"
        width={{ width: '45%' }}
      />

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
