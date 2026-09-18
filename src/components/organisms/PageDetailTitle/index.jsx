import PropTypes from 'prop-types';
import Breadcrumb from '@/components/molecules/Breadcrumb';
export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <div className="row align-items-center">
        <div className="col">
          <Breadcrumb data={breadcrumb} />
        </div>
        <div className="col-auto text-center">
          <h1 className="h2">{data.name}</h1>
          <span className="text-gray-400">
            {data.city}, {data.country}
          </span>
        </div>
        <div className="col"></div>
      </div>
    </section>
  );
}
PageDetailTitle.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  breadcrumb: PropTypes.array.isRequired,
};