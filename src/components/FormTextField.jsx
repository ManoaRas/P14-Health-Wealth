import { TextField } from '@mui/material'

export function FormTextField({ formik, name, label, placeholder, width }) {
  return (
    <TextField
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      label={label}
      placeholder={placeholder}
      name={name}
      required
      sx={width}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  )
}
