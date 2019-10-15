import React, {useState} from 'react';
import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker,} from "@material-ui/pickers";
import DayjsUtils from '@date-io/dayjs';
import {Carousel, Modal, Button} from 'react-bootstrap'
import { LinkedCalendar } from '../rb-datepicker/dist';
import Grid from '@material-ui/core/Grid';
import yellowstone from '../../images/top/yellowstone.jpg'
import yellowstone1 from '../../images/top/yellowstone1.jpg'
import yellowstone2 from '../../images/top/yellowstone2.jpg'
import { Dropdown } from "semantic-ui-react"; 
import styled from 'styled-components'
import '../styles/daterangepicker.css'
import './homestyles/Head.css'



const Top = () => {

const [arriveDate, setArriveDate] = React.useState(new Date('2019-10-11'));
const [departDate, setDepartDate] = React.useState(new Date('2019-10-11'));

  const handleArriveDateChange = date => {
    setArriveDate(arriveDate);
  };

  const handleDepartDateChange = date => {
    setDepartDate(departDate);
  };

  return (
    <>
      <div className="topoverlay">
        <ContentTop>Welcome To Terra Nova Cabins</ContentTop>
      </div>

      <div className="bottomoverlay">
        <ContentBottom> AT WEST YELLOWSTONE </ContentBottom>
      </div>

      <div className="calendaroverlay">
        <MuiPickersUtilsProvider utils={DayjsUtils}>
          <Grid container justify="space-around">

            <div className="arrivedate">
              <KeyboardDatePicker
                disableToolbar
                disablePast
                variant="dialog"
                format="MM/DD/YYYY"
                
                id="date-picker-dialog"
                label="ARRIVE"
                value={arriveDate}
                onChange={handleArriveDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                
                }}
                />
            </div>
            <div className="departdate">
              <KeyboardDatePicker
                disableToolbar
                disablePast
                variant="dialog"
                format="MM/DD/YYYY"
                
                id="date-picker-dialog"
                label="DEPART"
                value={departDate}
                onChange={handleDepartDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                />
            </div>

          </Grid>
        </MuiPickersUtilsProvider>
        
      </div>
    
    <Carousel nextIcon="" prevIcon="" >
      <Carousel.Item>
        <img
          src={yellowstone}
          alt="First slide"
          width="100%"
          />
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={yellowstone1}
          alt="Second slide"
          width="100%"
          />
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={yellowstone2}
          alt="Third slide"
          width="100%"
          />
      </Carousel.Item>
    </Carousel>
  </>


  )
  
};

const CustomDropdown = styled(Dropdown)`
width: 100%;
border: 0;
font-family: 'Playfair Display', serif;
`;


const ContentTop = styled.h1`
  position: relative;
  padding-top: 8px;
  color: white;
  font-size: 85px;
  font-family: 'Playfair Display', serif;
  
`

const ContentBottom = styled.h3`
  position: relative;
  letter-spacing: 8px;
  color: white;
  font-size: 25px;
  font-family: 'Playfair Display', serif;
`

const DateButton = styled.button`
    border-color: transparent;
    background: white;
    color: #8E7037;
    font-size: smaller;
    padding-left: 160px;
    padding-right: 160px;
    padding-top: 62px;
    padding-bottom: 62px;
    margin-left: 10px;

    &:hover {
        background-color: #7c612f;
    }
`;

const GuestButton = styled.button`
    border-color: transparent;
    background: white;
    color: #8E7037;
    font-size: smaller;
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 62px;
    padding-bottom: 62px;
    margin-left: 10px;

    &:hover {
        background-color: #7c612f;
    }
`;

const CheckButton = styled.button`
    border-color: transparent;
    background: #8E7037;
    color: white;
    font-size: 100%;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 32px;
    padding-bottom: 32px;
    margin-left: 10px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    letter-spacing: 2px;

    &:hover {
        background-color: #7c612f;
    }
`;

export default Top;


        {/* <DateButton variant="primary" >
          ARRIVAL DATE */}
          {/* <CustomDropdown>
          <Dropdown.Menu>
            <Dropdown.Item>
              <LinkedCalendar applyButtonClasses="" buttonClasses="" onDatesChange={onDatesChange}  showDropdowns={false} showWeekNumbers={false} autoApply={true} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </CustomDropdown> */}
        {/* </DateButton> */}


  
//   const [show, setShow] = useState(false);
//   const [startDate, setstartDate] = useState('');
//   const [endDate, setendDate] = useState('');
//   const [endDateDB, setendDateDB] = useState('');


//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


//   const onDatesChange = ({startDate, endDate}) => {
//     let startMonth = startDate.$M + 1
//     if (startMonth < 10)
//         startMonth = `0${startMonth}`
//     let startDay = startDate.$D
//     if (startDay < 10)
//         startDay = `0${startDay}`
//     let endMonth = endDate.$M + 1
//     if (endMonth < 10)
//         endMonth = `0${endMonth}`
//     let endDay = endDate.$D
//     let endDayDB = endDate.$D - 1
//     if (endDay < 10)
//         endDay = `0${endDay}`
//     if (endDayDB < 10)
//         endDayDB = `0${endDayDB}`
//     let startDateString = `${startDate.$y}-${startMonth}-${startDay}`
//     let endDateString = `${endDate.$y}-${endMonth}-${endDay}`
//     let endDateDBString = `${endDate.$y}-${endMonth}-${endDayDB}`
    
//     setstartDate(startDateString)
//     setendDate(endDateString)
//     setendDateDB(endDateDBString)
// }



        {/* <DateButton> <p> ARRIVAL DATE </p> </DateButton> */}
        {/* <DateButton> <p> DEPARTURE DATE </p> </DateButton>
        <GuestButton> <p> ADULTS </p> </GuestButton>
        <GuestButton> <p> CHILDREN </p> </GuestButton>
        <CheckButton> <p> CHECK </p> <p> AVAILABILITY </p></CheckButton> */}