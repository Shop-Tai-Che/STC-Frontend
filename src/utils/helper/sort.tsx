export const sortedArrByField = (arr, field?) => {
  // console.log(arr, "is being sorted");
  if (!arr) return;
  else {
    let sortedArr = arr.sort((a, b) => {
      return (
        new Date(b[`${field}`]).getTime() - new Date(a[`${field}`]).getTime()
      );
    });
    // console.log("done sorting arr, the result is: ", sortedArr);
    return sortedArr;
  }
};
export const filterArrByField = (arr, field, value) => {
  // console.log(arr, "is being filtered with field: ", field, "value: ", value);
  if (!arr) return;
  else return arr.filter((e) => e[field] == value);
};
