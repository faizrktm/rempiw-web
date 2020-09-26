const money = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0,
  // maximumFractionDigits: 0,
});

export default money;
