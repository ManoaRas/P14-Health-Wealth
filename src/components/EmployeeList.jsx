import { Button, TextField } from "@mui/material"
import MuiPagination from "@mui/material/Pagination"
import {
  DataGrid,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector
} from "@mui/x-data-grid"

import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { removeAllEmployees } from "../redux/features/employeeSlice"

export function EmployeeList() {
  const dispatch = useDispatch()
  const employees = useSelector((state) => state.employee.employees)
  const [searchInput, setSearchInput] = useState("")

  const initialRows = employees.map((employee, index) => ({
    id: index,
    firstName: employee.firstName,
    lastName: employee.lastName,
    startDate: employee.startDate,
    department: employee.department,
    dateOfBirth: employee.dateOfBirth,
    street: employee.street,
    city: employee.city,
    state: employee.state,
    zipCode: employee.zipCode
  }))

  // Filter table row with stored data and display information needed
  const filteredRows = initialRows.filter((row) =>
    Object.keys(row).some(
      (key) => key !== "id" && row[key].toString().toLowerCase().includes(searchInput.toLowerCase())
    )
  )

  const handleDeleteAllEmployees = () => {
    dispatch(removeAllEmployees())
  }
  const handleSearch = (event) => setSearchInput(event.target.value)

  // Custom pagination by MUI
  const Pagination = ({ page, onPageChange }) => {
    // Retrieves the API context to interact with DataGrid
    const apiRef = useGridApiContext()
    const pageCount = useGridSelector(apiRef, gridPageCountSelector)

    return (
      <MuiPagination
        color="secondary"
        count={pageCount}
        page={page + 1}
        onChange={(event, newPage) => onPageChange(event, newPage - 1)}
      />
    )
  }
  const CustomPagination = (props) => {
    return <GridPagination ActionsComponent={Pagination} {...props} sx={{ width: '100%' }} />
  }

  return (
    <div className="lists">
      <TextField
        id="search"
        label="Search"
        placeholder="Ex: 'Alabama' or '86385' or 'Sales' etc"
        size="small"
        sx={{ width: '45%', margin: '10px 0 10px 10px' }}
        type="search"
        value={searchInput}
        onChange={handleSearch}
      />

      <DataGrid
        autoHeight
        columns={[
          { field: 'firstName', headerName: 'First Name', width: 150 },
          { field: 'lastName', headerName: 'Last Name', width: 150 },
          { field: 'startDate', headerName: 'Start Date', width: 150 },
          { field: 'department', headerName: 'Department', width: 150 },
          { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
          { field: 'street', headerName: 'Street', width: 150 },
          { field: 'city', headerName: 'City', width: 150 },
          { field: 'state', headerName: 'State', width: 150 },
          { field: 'zipCode', headerName: 'Zip Code', width: 150 }
        ]}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        rows={searchInput ? filteredRows : initialRows}
        pageSizeOptions={[5]}
        slots={{
          pagination: CustomPagination
        }}
        sx={{
          '& .MuiTablePagination-spacer': { display: 'none' },
          '& .MuiTablePagination-toolbar': { justifyContent: 'flex-end' }
        }}
      />

      <Button
        sx={{ bgcolor: "secondary.dark", color: "white.main", margin: '20px 0 20px 20px' }}
        variant="contained"
        onClick={handleDeleteAllEmployees}
      >
        Delete All Employees
      </Button>
    </div>
  )
}
