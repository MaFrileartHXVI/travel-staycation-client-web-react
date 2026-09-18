import PropTypes from 'prop-types';
import InputText from '@/components/molecules/Form/InputText';
import InputFile from '@/components/molecules/Form/InputFile';
export default function Payment({ data, ItemDetails, checkout, onChange }) {
  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-5 border-end py-5" style={{ paddingRight: 80 }}>
          <p className="mb-4">Transfer Pembayaran:</p>
          <p>Tax: {tax}%</p>
          <p>Sub total: ${subTotal} USD</p>
          <p>Total: ${grandTotal} USD</p>
          <div className="row mt-4">
            <div className="col-3 text-end">
              <img
                src="/images/logo-bca.jpg"
                alt="bank central asia"
                width="60"
              />
            </div>
            <div className="col">
              <dl>
                <dd>Bank Central Asia</dd>
                <dd>2208 1996</dd>
                <dd>BuildWith Angga</dd>
              </dl>
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <img src="/images/logo-mandiri.jpg" alt="mandiri" width="60" />
            </div>
            <div className="col">
              <dl>
                <dd>Bank Mandiri</dd>
                <dd>2208 1996</dd>
                <dd>BuildWith Angga</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          <label htmlFor="proofPayment">Upload Bukti Transfer</label>
          <InputFile accept="image/*" name="proofPayment" onChange={onChange} />
          <label htmlFor="bankName">Asal Bank</label>
          <InputText
            name="bankName"
            type="text"
            value={data.bankName}
            onChange={onChange}
          />
          <label htmlFor="bankHolder">Nama Pengirim</label>
          <InputText
            name="bankHolder"
            type="text"
            value={data.bankHolder}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
Payment.propTypes = {
  data: PropTypes.object.isRequired,
  ItemDetails: PropTypes.object.isRequired,
  checkout: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};