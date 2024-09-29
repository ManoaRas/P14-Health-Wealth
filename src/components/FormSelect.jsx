import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'

export function FormSelect({ formik, options, name, label, width }) {
  return (
    <FormControl
      error={formik.touched[name] && Boolean(formik.errors[name])}
      sx={width}
    >
      <InputLabel id={`${name}-select`}>{label}</InputLabel>

      <Select
        labelId={`${name}-select`}
        label={label}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={() => formik.setFieldTouched(name, true)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      {formik.touched[name] && formik.errors[name] && (
        <FormHelperText>{formik.errors[name]}</FormHelperText>
      )}
    </FormControl>
  )
}
