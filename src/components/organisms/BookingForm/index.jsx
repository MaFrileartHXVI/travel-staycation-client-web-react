import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@/components/atoms/Button';
import InputNumber from '@/components/molecules/Form/InputNumber';
import InputDate from '@/components/molecules/Form/InputDate';
export default function BookingForm({ itemDetails, startBooking }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  });
  const updateData = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(data.date.endDate);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    const countDuration = Math.round(
      (endDate - startDate) / (1000 * 60 * 60 * 24)
    );
    if (countDuration > 0 && countDuration !== data.duration) {
      setData((prev) => ({
        ...prev,
        duration: countDuration,
      }));
    }
  }, [data.date]);
  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    startDate.setHours(0, 0, 0, 0);
    const expectedEndDate = new Date(startDate);
    expectedEndDate.setDate(startDate.getDate() + data.duration);
    const currentEndDate = new Date(data.date.endDate);
    currentEndDate.setHours(0, 0, 0, 0);
    if (expectedEndDate.getTime() !== currentEndDate.getTime()) {
      setData((prev) => ({
        ...prev,
        date: {
          ...prev.date,
          endDate: expectedEndDate,
        },
      }));
    }
  }, [data.duration]);
  const handleStartBooking = () => {
    startBooking({
      _id: itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    navigate('/checkout');
  };
  return (
    <div className="card bordered" style={{ padding: '60px 80px' }}>
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4">
        ${itemDetails.price}{' '}
        <span className="text-gray-500 font-weight-light">
          per {itemDetails.unit}
        </span>
      </h5>
      <label htmlFor="duration">How long you will stay?</label>
      <InputNumber
        max={30}
        suffix=" night"
        isSuffixPlural
        onChange={updateData}
        name="duration"
        value={data.duration}
      />
      <label htmlFor="date">Pick a date</label>
      <InputDate onChange={updateData} name="date" value={data.date} />
      <h6
        className="text-gray-500 font-weight-light"
        style={{ marginBottom: 40 }}
      >
        You will pay{' '}
        <span className="text-gray-900">
          ${itemDetails.price * data.duration} USD
        </span>{' '}
        per{' '}
        <span className="text-gray-900">
          {data.duration} {itemDetails.unit}
        </span>
      </h6>
      <Button
        className="btn"
        hasShadow
        isPrimary
        isBlock
        onClick={handleStartBooking}
      >
        Continue to Book
      </Button>
    </div>
  );
}
BookingForm.propTypes = {
  itemDetails: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
  startBooking: PropTypes.func.isRequired,
};