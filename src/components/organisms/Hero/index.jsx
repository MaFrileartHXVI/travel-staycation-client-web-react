import PropTypes from 'prop-types';
import ImageHero from '@/assets/images/img-hero.jpg';
import ImageHeroFrame from '@/assets/images/img-hero-frame.jpg';
import Button from '@/components/atoms/Button';
import formatNumber from '@/utils/formatNumber';

export default function Hero({ data, refMostPicked }) {
  const showMostPicked = () => {
    window.scrollTo({
      top: refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  };

  return (
    <section className="container pt-4">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto pe-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: '170%' }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src="/images/icon-traveler.svg"
                alt={`${data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumber(data.travelers)}{' '}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src="/images/icon-treasure.svg"
                alt={`${data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {formatNumber(data.treasures)}{' '}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src="/images/icon-cities.svg"
                alt={`${data.cities} Cities`}
              />
              <h6 className="mt-3">
                {formatNumber(data.cities)}{' '}
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <div
            className="position-relative"
            style={{ width: 520, height: 410 }}
          >
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
            />
            <img
              src={ImageHeroFrame}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: '0 -15px -15px 0' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  data: PropTypes.shape({
    travelers: PropTypes.number.isRequired,
    treasures: PropTypes.number.isRequired,
    cities: PropTypes.number.isRequired,
  }).isRequired,
  refMostPicked: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};