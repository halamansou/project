import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";
import { selected, selected_q } from "../atom";
const Accor = () => {
  const [_selected, setSelected] = useRecoilState(selected);

  const onFishSelected = (e, fishType) => {
    function getIndex(f) {
      return _selected.findIndex((f1) => f1 === f);
    }
    if (e.target.checked) {
      if (getIndex(fishType) === -1) {
        const newArray = _selected.concat([fishType]);
        setSelected(newArray, _selected);
        console.log(newArray);
      }
    } else if (e.target.checked == false) {
      {
        if (getIndex(fishType) !== -1) {
          const remove = getIndex(fishType);
          const d = _selected.slice(0, remove);
          console.log(d);
          const d2 = _selected.slice(remove + 1, _selected.length);
          let result = [];
          result = result.concat(d);
          result = result.concat(d2);
          console.log(result);
          setSelected(result, _selected);
        }
      }
    }
  };

  const [__selected, setSelected_q] = useRecoilState(selected_q);

  const onquantitySelected = (q, quantity) => {
    function getIndex(e) {
      return __selected.findIndex((e1) => e1 === e);
    }
    if (q.target.checked) {
      if (getIndex(quantity) === -1) {
        const newArray_ = __selected.concat([quantity]);
        setSelected_q(newArray_, __selected);
        console.log(newArray_);
      }
    } else if (q.target.checked == false) {
      {
        if (getIndex(quantity) !== -1) {
          const removed = getIndex(quantity);
          const q1 = __selected.slice(0, removed);
          console.log(q1);
          const q2 = __selected.slice(removed + 1, __selected.length);
          let resulte = [];
          resulte = resulte.concat(q1);
          resulte = resulte.concat(q2);
          console.log(resulte);
          setSelected_q(resulte, __selected);
        }
      }
    }
  };

  return (
    <div className="left_part">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <h2>Fish</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>

        <Checkbox onChange={(e) => onFishSelected(e, "tilapia")} />
        <span>Tilapia fish</span>
        <br></br>
        <Checkbox onChange={(e) => onFishSelected(e, "mullet")} />
        <span>mullet fish</span>
        <br></br>
        <Checkbox onChange={(e) => onFishSelected(e, "tuna")} />
        <span>tuna fish</span>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h2>Quantity</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>

          <Checkbox onChange={(q) => onquantitySelected(q, "1kg")} />
          <span>1kg</span>
          <br></br>
          <Checkbox onChange={(q) => onquantitySelected(q, "2kg")} />
          <span>2kg</span>
          <br></br>
          <Checkbox onChange={(q) => onquantitySelected(q, "3kg")} />
          <span>3kg</span>
        </Accordion>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h2>Lobster</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
          <Checkbox />
          <span>1kg</span>
          <br></br>
          <Checkbox />
          <span>2kg</span>
          <br></br>
          <Checkbox />
          <span>3kg</span>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h2>Crab</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
          <Checkbox />
          <span>1kg</span>
          <br></br>
          <Checkbox />
          <span>2kg</span>
          <br></br>
          <Checkbox />
          <span>3kg</span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Accor;
