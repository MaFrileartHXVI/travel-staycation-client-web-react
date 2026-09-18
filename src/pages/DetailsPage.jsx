import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/organisms/Header';
import PageDetailTitle from '@/components/organisms/PageDetailTitle';
import FeaturedImage from '@/components/organisms/FeaturedImage';
import PageDetailDescription from '@/components/organisms/PageDetailDescription';
import BookingForm from '@/components/organisms/BookingForm';
import Categories from '@/components/organisms/Categories';
import Testimony from '@/components/organisms/Testimony';
import Footer from '@/components/organisms/Footer';
import itemDetails from '@/json/itemDetails.json';
export default function DetailsPage() {
  const { id } = useParams();
  useEffect(() => {
    document.title = 'Staycation | Details Page';
    window.scrollTo(0, 0);
  }, []);
  const breadcrumb = [
    { pageTitle: 'Home', pageHref: '/' },
    { pageTitle: 'House Details', pageHref: '' },
  ];
  return (
    <>
      <Header />
      <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
      <FeaturedImage data={itemDetails.imageUrls} />
      <section className="container">
        <div className="row">
          <div className="col-7 pe-5">
            <PageDetailDescription data={itemDetails} />
          </div>
          <div className="col-5">
            <BookingForm
              itemDetails={itemDetails}
              startBooking={() => {}}
            />
          </div>
        </div>
      </section>
      <Categories data={itemDetails.categories} />
      <Testimony data={itemDetails.testimonial} />
      <Footer />
    </>
  );
}