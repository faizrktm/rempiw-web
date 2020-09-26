import { Box, Text } from 'candi-ui';
import BorderedCard from 'components/BorderedCard';
import { useState } from 'react';
import { Plus, Minus } from 'react-feather';
import styled from 'styled-components';
import money from 'utils/money';
import Field from './Field';

const HorizontalField = ({ label, content }) => (
  <Box direction="row" align="center">
    <Text margin={{ right: 'small' }}>
      {label}
    </Text>
    <Text>
      :
      {' '}
      {content}
    </Text>
  </Box>
);

export default function DetailCard({
  jumlah,
  bulan,
  awalTagihan,
  akhirTagihan,
  nopol,
  tarif,
  keterangan,
}) {
  const [active, setActive] = useState(false);

  return (
    <BorderedCard gap="medium">
      <Box align="center" direction="row" justify="between">
        <Field label="Nomor Polisi" content={nopol} flex />
        <Box direction="row" align="center" justify="between" flex>
          <Field label="Total Tagihan" content={money.format(jumlah)} />
          <Box role="presentation" onClick={() => setActive((prev) => !prev)} round="small" pad="xsmall" align="center" justify="center" margin={{ left: '1rem' }}>
            {active ? <Minus color="#B9B8B8" size={28} /> : <Plus color="#B9B8B8" size={28} />}
          </Box>
        </Box>
      </Box>
      {active && (
        <Expandable pad={{ top: 'medium' }}>
          <HorizontalField label="Awal Tagihan" content={awalTagihan} />
          <HorizontalField label="Akhir Tagihan" content={akhirTagihan} />
          <HorizontalField label="Bulan" content={bulan} />
          <HorizontalField label="Jumlah" content={money.format(tarif)} />
          {keterangan && <HorizontalField label="Keterangan" content={keterangan} />}
        </Expandable>
      )}
    </BorderedCard>
  );
}

const Expandable = styled(Box)`
  border-top: 1px solid #ccc;
`;
