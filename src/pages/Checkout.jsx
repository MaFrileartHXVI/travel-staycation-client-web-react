import { useState, useEffect } from 'react';
import Header from '@/components/organisms/Header';
import Button from '@/components/atoms/Button';
import Stepper from '@/components/organisms/Stepper';
import Numbering from '@/components/organisms/Stepper/Numbering';
import Meta from '@/components/organisms/Stepper/Meta';
import MainContent from '@/components/organisms/Stepper/MainContent';
import Controller from '@/components/organisms/Stepper/Controller';
import BookingInformation from '@/components/organisms/Checkout/BookingInformation';
import Payment from '@/components/organisms/Checkout/Payment';
import Completed from '@/components/organisms/Checkout/Completed';
import itemDetails from '@/json/itemDetails.json';
export default function Checkout() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    proofPayment: '',
    bankName: '',
    bankHolder: '',
  });
  const checkout = {
    _id: 'asd1293uasdads1',
    duration: 3,
    date: {
      startDate: new Date(),
      endDate: new Date(),
    },
  };
  const onChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  useEffect(() => {
    window.scroll(0, 0);
    document.title = 'Staycation | Checkout';
  }, []);
  const handleSubmit = (nextStep) => {
    setTimeout(() => {
      nextStep();
    }, 1000);
  };
  const steps = {
    bookingInformation: {
      title: 'Booking Information',
      description: 'Please fill up the blank fields below',
      content: (
        <BookingInformation
          data={data}
          checkout={checkout}
          ItemDetails={itemDetails}
          onChange={onChange}
        />
      ),
    },
    payment: {
      title: 'Payment',
      description: 'Kindly follow the instructions below',
      content: (
        <Payment
          data={data}
          ItemDetails={itemDetails}
          checkout={checkout}
          onChange={onChange}
        />
      ),
    },
    completed: {
      title: 'Yay! Completed',
      description: null,
      content: <Completed />,
    },
  };
  return (
    <>
      <Header isCentered />
      <Stepper steps={steps} initialStep="bookingInformation">
        {(prevStep, nextStep, CurrentStep, stepsData) => (
          <>
            <Numbering
              data={stepsData}
              current={CurrentStep}
              style={{ marginBottom: 50 }}
            />
            <Meta data={stepsData} current={CurrentStep} />
            <MainContent data={stepsData} current={CurrentStep} />
            {CurrentStep === 'bookingInformation' && (
              <Controller>
                {data.firstName !== '' &&
                  data.lastName !== '' &&
                  data.email !== '' &&
                  data.phone !== '' && (
                    <Button
                      className="btn mb-3"
                      type="button"
                      isBlock
                      isPrimary
                      hasShadow
                      onClick={nextStep}
                    >
                      Continue to Book
                    </Button>
                  )}
                <Button
                  className="btn"
                  type="link"
                  isBlock
                  isLight
                  href={`/properties/${checkout._id}`}
                >
                  Cancel
                </Button>
              </Controller>
            )}
            {CurrentStep === 'payment' && (
              <Controller>
                {data.proofPayment !== '' &&
                  data.bankName !== '' &&
                  data.bankHolder !== '' && (
                    <Button
                      className="btn mb-3"
                      type="button"
                      isBlock
                      isPrimary
                      hasShadow
                      onClick={() => handleSubmit(nextStep)}
                    >
                      Continue to Book
                    </Button>
                  )}
                <Button
                  className="btn"
                  type="button"
                  isBlock
                  isLight
                  onClick={prevStep}
                >
                  Cancel
                </Button>
              </Controller>
            )}
            {CurrentStep === 'completed' && (
              <Controller>
                <Button
                  className="btn"
                  type="link"
                  isBlock
                  isPrimary
                  hasShadow
                  href="/"
                >
                  Back to Home
                </Button>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </>
  );
}