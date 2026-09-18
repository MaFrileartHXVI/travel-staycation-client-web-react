import PropTypes from 'prop-types';
import Button from '@/components/atoms/Button';
export default function Categories({ data }) {
  if (!data || data.length === 0) return null;
  return data.map((category, index1) => {
    const items = category.itemId || category.items || [];
    if (items.length === 0) return null;
    return (
      <section className="container" key={`category-${index1}`}>
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        <div className="container-grid">
          {items.map((item, index2) => {
            const imageUrl =
              item.imageUrl ||
              (item.imageId && item.imageId[0] ? item.imageId[0].imageUrl : '');
            return (
              <div
                className="item column-3 row-1"
                key={`category-${index1}-item-${item._id || index2}`}
              >
                <div className="card">
                  {item.isPopular && (
                    <div className="tag">
                      Popular <span className="font-weight-light">Choice</span>
                    </div>
                  )}
                  <figure className="img-wrapper" style={{ height: 180 }}>
                    <img
                      src={imageUrl}
                      alt={item.name || item.title}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      href={`/properties/${item._id}`}
                      className="stretched-link d-block text-gray-800"
                    >
                      <h5 className="h4">{item.name || item.title}</h5>
                    </Button>
                    <span className="text-gray-500">
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
  });
}
Categories.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      itemId: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
          name: PropTypes.string,
          title: PropTypes.string,
          isPopular: PropTypes.bool,
          imageUrl: PropTypes.string,
          imageId: PropTypes.arrayOf(
            PropTypes.shape({
              imageUrl: PropTypes.string,
            })
          ),
          country: PropTypes.string,
          city: PropTypes.string,
        })
      ),
      items: PropTypes.arrayOf(PropTypes.object),
    })
  ).isRequired,
};