import PropTypes from 'prop-types';
import parse from 'html-react-parser';
export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {parse(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.length === 0
          ? 'Tidak Ada Feature'
          : data.features.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    className="d-block mb-2"
                    src={feature.imageUrl}
                    alt={feature.name}
                  />{' '}
                  <span>{feature.qty}</span>{' '}
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}
PageDetailDescription.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        qty: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      })
    ).isRequired,
  }).isRequired,
};