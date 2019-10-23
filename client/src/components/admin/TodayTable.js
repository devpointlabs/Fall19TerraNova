import React, { forwardRef } from 'react'
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';



const TodayTable = ({ arr, title }) => {

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


  return (
    <div>
      <MaterialTable
        columns={[
          { title: "Name", field: "name"},
          { title: "Guests", field: "guests"},
          { title: "Special Needs", field: "special_needs"},
          { title: "Expected Arrival", field: "expected_arrival"},
          { title: "Cabin Number", field: "cabin_number"},
          { title: "Cabin Letter", field: "cabin_letter"},
          { title: "Start Date", field: "start_date"},
          { title: "End Date", field: "end_date"},
          { title: "Booking Number", field: "booking_number"},
          { title: "Price", field: "price"}
        ]}
        data={arr}
        title={title}
        actions={[
          {
            icon: tableIcons.Edit,
            tooltip: 'Edit Booking',
            onClick: (event, rowData) => {
              // Do save operation
            }
          }, 
          {
            icon: tableIcons.Delete,
            tooltip: 'Delete Booking',
            onClick: (event, rowData) => {
              // Do save operation
            }
          }
        ]}
      />
    </div>
  )
}

export default TodayTable
