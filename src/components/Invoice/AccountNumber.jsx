import BorderedCard from 'components/BorderedCard';
import Field from './Field';

export default function AccountNumber() {
  return (
    <BorderedCard gap="medium">
      <Field label="Nomor Rekening" content="1234567890" contentClipboard="1234567890" />
      <Field label="Nama Bank" content="BRI Cabang Bogor" />
      <Field label="Atas Nama" content="PT. Jasa Raharja (Persero) Pwkl Bogor" />
    </BorderedCard>
  );
}
