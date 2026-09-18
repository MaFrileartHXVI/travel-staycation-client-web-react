import PropTypes from 'prop-types';
import Button from '@/components/atoms/Button';
export default function MostPicked({ data, refMostPicked }) {
  if (!data || data.length === 0) return null;
  return (
    <section className="container" ref={refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {data.map((item, index) => {
          const imageUrl =
            item.imageUrl ||
            (item.imageId && item.imageId[0] ? item.imageId[0].imageUrl : '');
          return (
            <div
              key={`mostpicked-${item._id || index}`}
              className={`item column-4${index === 0 ? ' row-2' : ' row-1'}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span className="font-weight-light"> per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={imageUrl}
                    alt={item.name || item.title}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="stretched-link d-block text-white"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name || item.title}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
MostPicked.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
      imageUrl: PropTypes.string,
      imageId: PropTypes.arrayOf(
        PropTypes.shape({
          imageUrl: PropTypes.string,
        })
      ),
      country: PropTypes.string,
      city: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      unit: PropTypes.string,
    })
  ).isRequired,
  refMostPicked: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};
MostPicked.defaultProps = {
  refMostPicked: null,
};