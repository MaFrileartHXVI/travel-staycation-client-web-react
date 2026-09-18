import PropTypes from 'prop-types';
export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const stars = [];
  let leftPos = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    stars.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      />
    );
  }
  if (decimals > 0 && value <= 5) {
    stars.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{
          left: leftPos,
          height: height,
          width: decimals * width - spacing,
        }}
      />
    );
  }
  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${index}`}
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      />
    );
  }
  return (
    <div
      className={['stars', className].filter(Boolean).join(' ')}
      style={{ height: height }}
    >
      {starPlaceholder}
      {stars}
    </div>
  );
}
Star.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  spacing: PropTypes.number,
};
Star.defaultProps = {
  className: '',
  value: 0,
  width: 36,
  height: 36,
  spacing: 4,
};