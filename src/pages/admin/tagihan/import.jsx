import { Box, Text } from 'candi-ui';
import Page from 'components/Page';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import { Edit, FileText } from 'react-feather';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import config from 'config';
import { useState } from 'react';
import ModalSuccess from 'components/Success';
import Button from 'components/Button';

const required = 'Kolom ini tidak boleh kosong';

export default function Import() {
  const {
    register,
    handleSubmit,
    errors,
    reset,
  } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    if (status === 'loading') return;
    try {
      setStatus('loading');
      const formData = new FormData();
      formData.append('nama', data.nama);
      formData.append('no_hp', data.no_hp);
      formData.append('jatuh_tempo', data.jatuh_tempo);
      formData.append('invoice_detail', data.invoice_detail[0]);

      const url = `${config.API.INVOICES}/create`;
      const res = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      await res.json();
      reset();
      setStatus('success');
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <Page>
      <Card gap="large" pad="large">
        <CardHeader icon={<Edit size={26} color="white" />} title="Import Tagihan WP" subtitle="Import via excel menggunakan template yang tersedia" />

        {status && status !== 'loading' && status !== 'success' && (
          <Box background="failed500" round="small" pad="medium">
            <Text color="white" size="small">{status}</Text>
          </Box>
        )}

        {status === 'success' && (
          <ModalSuccess message="Berhasil Menambah Data, silahkan tutup untuk melanjutkan" onClick={() => setStatus()} />
        )}

        <Box as="form" gap="large" onSubmit={handleSubmit(onSubmit)}>
          <Box gap="medium">
            <Text as="label" htmlFor="nama">Nama</Text>
            <Box gap="small">
              <TextInput name="nama" id="nama" ref={register({ required: true })} />
              {errors.nama && <Text color="failed500" size="small">{required}</Text>}
            </Box>
          </Box>

          <Box gap="medium">
            <Text as="label" htmlFor="no_hp">Nomor Handphone</Text>
            <Box gap="small">
              <TextInput placeholder="contoh: 0822xxxxx" name="no_hp" id="no_hp" ref={register({ required: true })} />
              {errors.no_hp && <Text color="failed500" size="small">{required}</Text>}
            </Box>
          </Box>

          <Box gap="medium">
            <Text as="label" htmlFor="jatuh_tempo">
              Jatuh Tempo
              <Text size="small">
                {' '}
                {' '}
                (hanya tanggal)
              </Text>
            </Text>
            <Box gap="small">
              <TextInput placeholder="contoh: 25" type="number" min={1} name="jatuh_tempo" id="jatuh_tempo" ref={register({ required: true })} />
              {errors.jatuh_tempo && <Text color="failed500" size="small">{required}</Text>}
            </Box>
          </Box>

          <Box gap="medium">
            <Box direction="row" align="center" justify="between">
              <Text as="label" htmlFor="invoice_detail">Tagihan</Text>
              <Box gap="small" direction="row" align="center">
                <FileText
                  size={16}
                  color="#49A8F3"
                />
                <Anchor href="/template.xlsx">download format</Anchor>
              </Box>
            </Box>
            <Box gap="small">
              <TextInput type="file" name="invoice_detail" id="invoice_detail" ref={register({ required: true })} />
              {errors.invoice_detail && <Text color="failed500" size="small">{required}</Text>}
            </Box>
          </Box>

          <Button type="submit">{status === 'loading' ? 'Loading...' : 'Submit'}</Button>
        </Box>
      </Card>
    </Page>
  );
}

const TextInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #49A8F3;
`;
