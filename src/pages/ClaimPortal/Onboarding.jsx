import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const steps = [
  "Account Setup",
  "Identity Verification",
  "Contact & Banking",
  "Review & Submit",
];
export default function Onboarding() {
  const [activeStep, setActiveStep] = useState(0);

  function handleNextStep() {
    setActiveStep((prevStep) =>
      prevStep < steps.length - 1 ? prevStep + 1 : prevStep
    );
  }
  function handlePreviousStep() {
    setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  }
  return (
    <Box sx={{ mx: 10, my: 5 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Button type={"button"} variant={"outlined"} onClick={handlePreviousStep}>
        Back
      </Button>
      <Button type={"button"} variant={"contained"} onClick={handleNextStep}>
        {activeStep === steps.length - 1 ? "Complete" : "Next"}
      </Button>
    </Box>
  );
}
