export const createDate = () => {
  let date = new Date();
  //get day
  let day = date.getDate();
  let year = date.getFullYear();
  let month = date.getMonth();
  return `${year}/${month}/${day}`;
};
