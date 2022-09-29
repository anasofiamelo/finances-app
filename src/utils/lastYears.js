const lastYears = ["2022", "2021", "2020", "2019", "2018", "2017"];

export const yearOptions = lastYears.map((year) => (
  <option key={year} value={year}>
    {year}
  </option>
));

export default lastYears;
