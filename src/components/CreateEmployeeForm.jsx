import { Button } from '@mui/material'

import dayjs from 'dayjs'
import { useFormik } from "formik"
import { Modal } from '@manoaras/p14-modal-wh'
import { useState } from 'react'
import { useDispatch } from "react-redux"

import { FormDatePicker } from './FormDatePicker'
import { FormSelect } from './FormSelect'
import { FormTextField } from './FormTextField'

import { addEmployee } from "../redux/features/employeeSlice"

export function CreateEmployeeForm({ departments, employeeSchema, states }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
      const employeeData = {
        ...values,
        dateOfBirth: values.dateOfBirth ? dayjs(values.dateOfBirth).format('MM/DD/YYYY') : null,
        startDate: values.startDate ? dayjs(values.startDate).format('MM/DD/YYYY') : null
      }
      dispatch(addEmployee(employeeData))
      setIsModalOpen(true)
    }
  })

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="modal-title">Employee Created!</h2>
      </Modal>

      <form className="form" onSubmit={formik.handleSubmit}>
        <fieldset className="bn-field">
          <FormTextField
            formik={formik}
            name="firstName"
            label="First Name"
            placeholder="John"
            classField={{ width: '45%', margin: '10px' }}
          />

          <FormTextField
            formik={formik}
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            classField={{ width: '45%', margin: '10px' }}
          />

          <FormDatePicker
            className="form--field"
            formik={formik}
            label="Date of Birth"
            name="dateOfBirth"
            classField={{ width: '45%', margin: '10px' }}
          />

          <FormDatePicker
            className="form--field"
            formik={formik}
            label="Start Date"
            name="startDate"
            classField={{ width: '45%', margin: '10px' }}
          />
        </fieldset>

        <fieldset>
          <legend>Address</legend>

          <FormTextField
            formik={formik}
            name="street"
            label="Street"
            placeholder="Buttonwood Avenue"
            classField={{ width: '45%', margin: '10px' }}
          />

          <FormTextField
            className="form--fieldset--field"
            formik={formik}
            name="city"
            label="City"
            placeholder="Pittsburgh"
            classField={{ width: '45%', margin: '10px' }}
          />

          <FormSelect
            className="form--fieldset--field"
            formik={formik}
            options={states}
            name="state"
            label="State"
            classField={{ width: '45%', margin: '10px' }}
          />

          <FormTextField
            className="form--fieldset--field"
            formik={formik}
            name="zipCode"
            label="Zip Code"
            placeholder="86385"
            classField={{ width: '45%', margin: '10px' }}
          />
        </fieldset>

        <fieldset className="bn-field">
          <FormSelect
            className="form--field"
            formik={formik}
            options={departments}
            name="department"
            label="Department"
            classField={{ width: '45%', margin: '10px' }}
          />
        </fieldset>

        <Button
          className="form--btn"
          color="primary"
          sx={{ width: '100%' }}
          type="submit"
          variant="contained"
        >
          <span className="form--btn__text">Save</span>
        </Button>
      </form>
    </>
  )
}
