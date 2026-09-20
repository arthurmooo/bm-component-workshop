export function projectSavings(monthly, years, annualPercent) {
  if (!Number.isFinite(monthly) || monthly < 0 || monthly > 10000 || !Number.isInteger(years) || years < 1 || years > 30 || !Number.isFinite(annualPercent) || annualPercent < -5 || annualPercent > 12) throw new RangeError('Paramètres hors limites');
  const monthlyRate = (1 + annualPercent / 100) ** (1 / 12) - 1;
  let balance = 0;
  const series = [];
  for (let year = 1; year <= years; year++) {
    for (let month = 0; month < 12; month++) balance = balance * (1 + monthlyRate) + monthly;
    series.push({ year, value: balance });
  }
  return { series, total: balance, contributed: monthly * 12 * years };
}
