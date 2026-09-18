import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Stepper, { Numbering, Meta, MainContent, Controller } from './index';
describe('Stepper Component', () => {
  const steps = {
    step1: {
      title: 'Step 1 Title',
      description: 'Step 1 Description',
      content: <div>Content 1</div>,
    },
    step2: {
      title: 'Step 2 Title',
      description: 'Step 2 Description',
      content: <div>Content 2</div>,
    },
  };
  it('should render stepper correctly with all its parts', () => {
    render(
      <Stepper steps={steps} initialStep="step1">
        {(prevStep, nextStep, currentStep, steps) => (
          <>
            <Numbering data={steps} current={currentStep} />
            <Meta data={steps} current={currentStep} />
            <MainContent data={steps} current={currentStep} />
            <Controller>
              <button onClick={prevStep}>Prev</button>
              <button onClick={nextStep}>Next</button>
            </Controller>
          </>
        )}
      </Stepper>
    );
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
    expect(screen.getByText('Step 1 Description')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Step 2 Title')).toBeInTheDocument();
    expect(screen.getByText('Step 2 Description')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Prev'));
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
  });
});