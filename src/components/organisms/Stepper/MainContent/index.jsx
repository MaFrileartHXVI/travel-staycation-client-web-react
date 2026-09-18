import PropTypes from 'prop-types';
export default function MainContent({ data, current }) {
  if (!data[current] || !data[current].content) return null;
  return <>{data[current].content}</>;
}
MainContent.propTypes = {
  data: PropTypes.object.isRequired,
  current: PropTypes.string.isRequired,
};