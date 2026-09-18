import PropTypes from 'prop-types';
import InputText from '@/components/molecules/Form/InputText';
export default function BookingInformation({
  data,
  ItemDetails,
  checkout,
  onChange,
}) {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-5 border-end py-5" style={{ paddingRight: 80 }}>
          <div className="card">
            <figure className="img-wrapper" style={{ height: 270 }}>
              <img
                className="img-cover"
                src={ItemDetails.imageUrls[0].url}
                alt={ItemDetails.name}
              />
            </figure>
            <div className="row align-items-center">
              <div className="col">
                <div className="meta-wrapper">
                  <h5>{ItemDetails.name}</h5>
                  <span className="text-gray-500">
                    {ItemDetails.city}, {ItemDetails.country}
                  </span>
                </div>
              </div>
              <div className="col-auto">
                <span>
                  ${checkout.duration * ItemDetails.price} USD
                  <span className="text-gray-500"> per </span>
                  {checkout.duration} {ItemDetails.unit}
                  {checkout.duration > 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          <label htmlFor="firstName">First Name</label>
          <InputText
            name="firstName"
            value={data.firstName}
            onChange={onChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <InputText
            name="lastName"
            value={data.lastName}
            onChange={onChange}
          />
          <label htmlFor="email">Email Address</label>
          <InputText
            name="email"
            type="email"
            value={data.email}
            onChange={onChange}
          />
          <label htmlFor="phone">Phone Number</label>
          <InputText
            name="phone"
            type="tel"
            value={data.phone}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
BookingInformation.propTypes = {
  data: PropTypes.object.isRequired,
  ItemDetails: PropTypes.object.isRequired,
  checkout: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};