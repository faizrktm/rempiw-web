import { Box, Text } from 'candi-ui';
import AdminPage from 'components/AdminPage';
import Button from 'components/Button';
import ModalSuccess from 'components/Success';
import config from 'config';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Tagihan({ invoices }) {
  const [status, setStatus] = useState(null);
  const router = useRouter();
  const sendNotif = async (id) => {
    try {
      setStatus('loading');
      const url = `${config.API.INVOICES}/send/${id}`;
      const res = await fetch(url);
      await res.json();
      setStatus('success');
    } catch (error) {
      setStatus(error.message);
    }
  };
  return (
    <AdminPage>
      {status && status !== 'loading' && status !== 'success' && (
      <Box background="failed500" round="small" pad="medium">
        <Text color="white" size="small">{status}</Text>
      </Box>
      )}

      {status === 'success' && (
      <ModalSuccess message="Berhasil mengirim notifikasi" onClick={() => setStatus()} />
      )}
      <style jsx>
        {`
        table {
          border-spacing: 0px;
          border-collapse: collapse;
          flex: 1;
          align-self: stretch;
          width: 100%;
        }

        td, th {
          text-align: start;
          font-weight: inherit;
          margin: 0;
          padding: 0.8rem 1rem;
        }

        th {
          background-color: #2196F3;
          color: white;
        }

        th:first-child {
          border-top-left-radius: 8px;
        }

        th:last-child {
          border-top-right-radius: 8px;
        }

        tbody tr:last-child td:first-child {
          border-bottom-left-radius: 8px;
        }

        tbody tr:last-child td:last-child {
          border-bottom-right-radius: 8px;
        }

        tbody tr:nth-child(odd) td {
          background-color: #EEEEEE;
        }

      `}
      </style>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>No. HP</th>
            <th>Jatuh Tempo</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {invoices && invoices.map(({
            id,
            nama,
            no_hp: noHp,
            jatuh_tempo: jt,
            invoice_number: invoiceNumber,
          }) => (
            <tr key={id}>
              <td>{nama}</td>
              <td>{noHp}</td>
              <td>{jt}</td>
              <td>
                <Box direction="row" align="center" gap="small">
                  <Button size="small" color="#FFB84C" onClick={() => router.push(`/${invoiceNumber}`)}>Detail</Button>
                  <Button size="small" onClick={() => sendNotif(id)}>Notifikasi</Button>
                </Box>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminPage>
  );
}

export async function getServerSideProps() {
  let invoices = null;
  try {
    const res = await fetch(config.API.INVOICES);
    invoices = await res.json();
    if (invoices.code !== 200) {
      throw new Error('Invalid');
    }
    invoices = invoices.result;
  } catch (_) {
    // cathing shadow
  }
  return {
    props: {
      invoices,
    }, // will be passed to the page component as props
  };
}
