import PropTypes from 'prop-types';
export default function Numbering({ style, className, data, current }) {
  const keysOfData = Object.keys(data);
  return (
    <ol
      className={['stepper', className].filter(Boolean).join(' ')}
      style={style}
    >
      {keysOfData.map((list, index) => {
        let isActive = list === current ? 'active' : '';
        if (index + 1 === keysOfData.length) {
          isActive = '';
          return null;
        }
        return (
          <li
            key={`list-${index}`}
            className={[isActive].filter(Boolean).join(' ')}
          >
            {index + 1}
          </li>
        );
      })}
    </ol>
  );
}
Numbering.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  current: PropTypes.string.isRequired,
  style: PropTypes.object,
};
Numbering.defaultProps = {
  className: '',
  style: {},
};