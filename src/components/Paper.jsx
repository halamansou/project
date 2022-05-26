import Paper from "@mui/material/Paper";
import { useRecoilState } from "recoil";
import {  selected, selected_q } from "../atom";
import Date_ from "./Date_";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Link } from "react-router-dom";
const Paperr = () => {

  
  
  const [_selected, setSelected] = useRecoilState(selected);

  const [__selected, setSelected_q] = useRecoilState(selected_q);

  const result_f = _selected.map((fishType, index) => {
    return <div>{fishType}</div>;
  });

  const result_q = __selected.map((quantity, index) => {
    return <div>{quantity}</div>;
  });



  return (
    <div className="right_part">
      <Paper elevation={3} className="mt h-200 w-200">
        <h2>Seafood</h2>
        <h5><FmdGoodIcon />Egypt,Cairo</h5>
        <h5><AddIcCallIcon />+4779646779</h5>
        <button ><Link to="/Date"><span>Next</span></Link></button>
        {result_f}
        {result_q}
        {fetch}
    
      </Paper>
    </div>
  );
};
export default Paperr;
