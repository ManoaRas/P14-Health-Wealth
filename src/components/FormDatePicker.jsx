import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export function FormDatePicker({ formik, name, label, width }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        sx={width}
        value={formik.values[name]}
        onChange={(value) => formik.setFieldValue(name, value)}
        slotProps={{
          textField: {
            error: formik.touched[name] && Boolean(formik.errors[name]),
            helperText: formik.touched[name] && formik.errors[name]
          },
        }}
      />
    </LocalizationProvider>
  )
}
