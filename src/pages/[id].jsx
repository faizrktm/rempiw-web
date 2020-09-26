import {
  Box, Text,
} from 'candi-ui';
import { Bell, Book, CreditCard } from 'react-feather';

import config from 'config';
import Page from 'components/Page';
import Card from 'components/Card';
import BorderedCard from 'components/BorderedCard';
import CardHeader from 'components/CardHeader';
import AccountNumber from 'components/Invoice/AccountNumber';
import Field from 'components/Invoice/Field';
import DetailCard from 'components/Invoice/DetailCard';
import money from 'utils/money';

export default function Report({ invoice }) {
  if (invoice) {
    const total = invoice.invoice_details.reduce((acc, curr) => acc + curr.jumlah, 0);
    return (
      <Page>
        <Card gap="large">
          <CardHeader icon={<Bell size={26} color="white" />} title="Notifikasi Pembayaran" subtitle="Pembayaran kamu akan jatuh tempo" />
          <Box gap="medium">
            <BorderedCard>
              <Text>{invoice.nama}</Text>
              <Text size="small" weight="300">{invoice.no_hp}</Text>
            </BorderedCard>
            <BorderedCard gap="medium">
              <Field label="Jumlah Kendaraan" content={`${invoice.invoice_details.length} Kendaraan`} />
              <Field label="Total Tagihan" content={money.format(total)} />
            </BorderedCard>
          </Box>
        </Card>

        <Card gap="large" margin={{ top: 'large' }}>
          <CardHeader icon={<CreditCard size={26} color="white" />} title="Rekening Pembayaran" subtitle="Nomor rekening pembayaran iuran wajib" />
          <AccountNumber />
        </Card>

        <Card gap="large" margin={{ top: 'large' }}>
          <CardHeader icon={<Book size={26} color="white" />} title="Laporan Tagihan" subtitle="Agustus Tahun 2020" />
          {invoice.invoice_details.map(({
            id,
            jumlah,
            bulan,
            mulai_tagihan: awalTagihan,
            akhir_tagihan: akhirTagihan,
            nopol, tarif, keterangan,
          }) => (
            <DetailCard
              key={id.toString()}
              jumlah={jumlah}
              bulan={bulan}
              awalTagihan={awalTagihan}
              akhirTagihan={akhirTagihan}
              nopol={nopol}
              tarif={tarif}
              keterangan={keterangan}
            />
          ))}
        </Card>
      </Page>
    );
  }

  return (
    <Page>
      <Text>Tidak ditemukan</Text>
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  let invoice = null;
  try {
    const res = await fetch(`${config.API.INVOICES}/${id}`);
    invoice = await res.json();
    if (invoice.code !== 200) {
      throw new Error('Invalid');
    }
    invoice = invoice.result;
  } catch (_) {
    // cathing shadow
  }
  return {
    props: {
      invoice,
    }, // will be passed to the page component as props
  };
}
