import PropTypes from 'prop-types';
export default function InputNumber({
  value,
  placeholder,
  name,
  min,
  max,
  prefix,
  suffix,
  isSuffixPlural,
  outerClassName,
  onChange,
}) {
  const handleChange = (e) => {
    let inputValue = String(e.target.value);
    if (prefix) inputValue = inputValue.replace(new RegExp(`^${prefix}`), '');
    if (suffix) inputValue = inputValue.replace(new RegExp(`${suffix}s?$`), '');
    const numericMatch = inputValue.match(/[0-9]+/);
    const numericValue = numericMatch ? Number(numericMatch[0]) : 0;
    if (numericValue <= max && numericValue >= min) {
      onChange({
        target: {
          name: name,
          value: numericValue,
        },
      });
    }
  };
  const minus = () => {
    if (value > min) {
      onChange({
        target: {
          name: name,
          value: value - 1,
        },
      });
    }
  };
  const plus = () => {
    if (value < max) {
      onChange({
        target: {
          name: name,
          value: value + 1,
        },
      });
    }
  };
  const displayValue = `${prefix || ''}${value}${suffix || ''}${isSuffixPlural && value > 1 ? 's' : ''}`;
  return (
    <div
      className={['input-number mb-3', outerClassName]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="input-group">
        <div className="input-group-prepend">
          <span
            className="input-group-text minus"
            onClick={minus}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && minus()}
          >
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          className="form-control"
          placeholder={placeholder || '0'}
          value={displayValue}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <span
            className="input-group-text plus"
            onClick={plus}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && plus()}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
}
InputNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  isSuffixPlural: PropTypes.bool,
};
InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: '',
  suffix: '',
  isSuffixPlural: false,
  placeholder: '0',
  outerClassName: '',
};