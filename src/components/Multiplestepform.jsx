import { useState } from "react";
import Finished from "./Finished";
import Plane from "./Plane";
import AddOns from "./AddOns";
import InitialForm from "./InitialForm";
import Aside from "./Aside";


const all_form = [
  {
    step_no: 1,
    component: <InitialForm />,
  },
  {
    step_no: 2,
    component: <Plane />,
  },
  {
    step_no: 3,
    component: <AddOns />,
  },
  {
    step_no: 4,
    component: <Finished />,
  },
];


  const initial_state = {
    step_no: 1,
    Max_step: all_form.length,
    isFirstStep:function(){
      return this.step_no === 1;
    },
    isLastStep: function () {
      return this.step_no === this.Max_step;
    },
  };


const Multiplestepform = () => {
  const [stepNo, setStepNo] = useState(initial_state);

  const nextStep = () => {
    setStepNo((prev) => ({ ...prev, step_no: Math.min(prev.step_no + 1,initial_state.Max_step) }));
  }

  const prevStep = () => {
    setStepNo((prev) => ({ ...prev, step_no: Math.max(prev.step_no - 1,0) }));
   }
  
  const targetStepChange=(targetStep)=>{
    setStepNo((prev) => ({ ...prev, step_no: targetStep }));
  }
  return (
    <>
      <div className="form-wrapper">
        <Aside  length={all_form.length} activeStep={stepNo.step_no} targetStep={targetStepChange}/>
        <main>
          <div className="form-container">
            {all_form.map((item) => {
              if (stepNo.step_no === item.step_no) {
                return item.component;
              }
            })}
          </div>
          <div className="button-container">
            {!stepNo.isFirstStep()?<button className="prev-button" onClick={prevStep}>Go Back</button>:null}
            <button className="nex-button" onClick={nextStep}>Next step</button>
          </div>
        </main>
      </div>
      {console.log(stepNo)}
    </>
  );
};
export default Multiplestepform;
