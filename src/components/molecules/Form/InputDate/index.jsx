import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import formatDate from '@/utils/formatDate';
export default function InputDate({
  value,
  placeholder,
  name,
  onChange,
  outerClassName,
}) {
  const [isShowed, setIsShowed] = useState(false);
  const refDate = useRef(null);
  const datePickerChange = (selectionRange) => {
    const target = {
      target: {
        value: selectionRange.selection,
        name: name,
      },
    };
    onChange(target);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refDate.current && !refDate.current.contains(event.target)) {
        setIsShowed(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };
  const displayDate = `${value.startDate ? formatDate(value.startDate) : ''}${
    value.endDate ? ' - ' + formatDate(value.endDate) : ''
  }`;
  return (
    <div
      ref={refDate}
      className={['input-date mb-3', outerClassName].filter(Boolean).join(' ')}
    >
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src="/images/icon-calendar.svg" alt="icon calendar" />
          </span>
        </div>
        <input
          readOnly
          type="text"
          className="form-control"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />
        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
}
InputDate.propTypes = {
  value: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    key: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
};
InputDate.defaultProps = {
  placeholder: 'Please select a date',
  outerClassName: '',
};