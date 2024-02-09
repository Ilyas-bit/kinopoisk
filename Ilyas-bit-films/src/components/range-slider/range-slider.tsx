import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setStartDate, setEndDate } from "../../redux/actions/user-actions";
import { useSelector } from "react-redux";
import { getEndDate, getStartDate } from "../../redux/selectors/selectors";
function valuetext(value) {
  return value;
}

export function RangeSlider() {
  const [value, setValue] = useState([]);
  const dispatch = useDispatch();
  const startDate = useSelector(getStartDate);
  const endDate = useSelector(getEndDate);

  const convertToNumber = (dateString) => {
    const firstFourChars = dateString.substring(0, 4);
    const resultNumber = parseInt(firstFourChars, 10);
    return resultNumber;
  };

  const startDateNumber = convertToNumber(startDate);
  const endDateNumber = convertToNumber(endDate);

  useEffect(() => {
    setValue([startDateNumber, endDateNumber]);
  }, [startDate, endDate]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setStartDate(newValue[0].toString()));
    dispatch(setEndDate(newValue[1].toString()));
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        min={1900}
        max={2023}
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={10}
      />
    </Box>
  );
}
