import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Paper from "./Paper";
import Accor from "./Accor";
const Home=()=>{
    const steps = ["services", "date&time", "finalizing"];
    return (
      <div>
      
        <Stepper activeStep={0} alternativeLabel className="m_stepper">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
       <div>
       <Accor></Accor>
        <Paper></Paper>
       </div>
      </div>
    );

};
export default Home;