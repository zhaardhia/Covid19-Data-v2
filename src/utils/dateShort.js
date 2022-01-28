
export const dateShort = (date) => {
  let dateParse = Date.parse(date);
    let dateConv = new Date(dateParse);
    let dateComplete = dateConv.getDate() + " " + (dateConv.toLocaleString('default', {month: 'short'})) + " " + dateConv.getFullYear();

    return dateComplete
};
