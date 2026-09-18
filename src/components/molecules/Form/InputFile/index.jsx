import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
export default function InputFile({
  placeholder = 'Browse a file...',
  name,
  accept,
  prepend,
  append,
  outerClassName = '',
  inputClassName = '',
  onChange,
}) {
  const [fileName, setFileName] = useState('');
  const refInputFile = useRef(null);
  const handleChange = (event) => {
    setFileName(event.target.value);
    onChange({
      target: {
        name: event.target.name,
        value: event.target.files,
      },
    });
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
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          value={fileName}
          onChange={handleChange}
        />
        <input
          readOnly
          onClick={() => refInputFile.current.click()}
          value={fileName}
          placeholder={placeholder}
          className={['form-control', inputClassName].filter(Boolean).join(' ')}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}
InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};