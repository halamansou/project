import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { format, formatDistance } from "date-fns";

const Date_ = () => {
  const today = new Date();
  const ondatechanged = (date) => {
    
    const distance=formatDistance(date,today)
    console.log(distance);
    const format_=format(date,'d/M/y');
    console.log(format_)

    
  };
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={today}
          //</Date>shouldDisableDate={isWeekend}
          onChange={ondatechanged}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Date_;
