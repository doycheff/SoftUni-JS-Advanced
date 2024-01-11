function daysInAMonth(month, year) {
  let a = new Date(year, month);
  a.setDate(0);
  console.log(a.getDate());
}
daysInAMonth(1, 2012);
daysInAMonth(2, 2021);
