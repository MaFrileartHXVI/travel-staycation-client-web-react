import PropTypes from 'prop-types';
export default function Meta({ data, current }) {
  if (!data[current]) return null;
  return (
    <div className="text-center" style={{ marginBottom: 30 }}>
      <h1 className="h2">{data[current].title}</h1>
      <p className="lead text-gray-500">{data[current].description}</p>
    </div>
  );
}
Meta.propTypes = {
  data: PropTypes.object.isRequired,
  current: PropTypes.string.isRequired,
};