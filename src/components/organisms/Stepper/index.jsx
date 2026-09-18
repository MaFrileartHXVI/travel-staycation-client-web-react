import { useState } from 'react';
import PropTypes from 'prop-types';
export default function Stepper({ steps, initialStep, children }) {
  const stepsKeys = Object.keys(steps);
  const [currentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
  );
  const totalStep = stepsKeys.length;
  const indexStep = stepsKeys.indexOf(currentStep);
  const prevStep = () => {
    if (indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  };
  const nextStep = () => {
    if (indexStep < totalStep - 1) setCurrentStep(stepsKeys[indexStep + 1]);
  };
  return <>{children(prevStep, nextStep, currentStep, steps)}</>;
}
Stepper.propTypes = {
  steps: PropTypes.object.isRequired,
  initialStep: PropTypes.string,
  children: PropTypes.func.isRequired,
};
Stepper.defaultProps = {
  initialStep: '',
};
export { default as Numbering } from './Numbering';
export { default as Meta } from './Meta';
export { default as Controller } from './Controller';
export { default as MainContent } from './MainContent';