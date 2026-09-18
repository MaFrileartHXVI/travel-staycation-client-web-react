import { useState } from 'react';
import PropTypes from 'prop-types';
export default function InputText({
  value,
  type,
  placeholder,
  name,
  prepend,
  append,
  outerClassName,
  inputClassName,
  errorResponse,
  onChange,
}) {
  const [hasError, setHasError] = useState(null);
  let pattern = '';
  if (type === 'email') pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === 'tel') pattern = '[0-9]*';
  const handleChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };
    if (type === 'email') {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }
    if (type === 'tel') {
      if (event.target.validity.valid) onChange(target);
    } else {
      onChange(target);
    }
  };
  return (
    <div
      className={['input-text mb-3', outerClassName].filter(Boolean).join(' ')}
    >
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          name={name}
          type={type}
          pattern={type === 'email' ? undefined : pattern}
          className={['form-control', inputClassName].filter(Boolean).join(' ')}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {hasError && <span className="error-helper">{hasError}</span>}
    </div>
  );
}
InputText.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorResponse: PropTypes.string,
};
InputText.defaultProps = {
  type: 'text',
  placeholder: 'Please type here...',
  errorResponse: 'Please match the requested format.',
  prepend: undefined,
  append: undefined,
  outerClassName: '',
  inputClassName: '',
};