export const isValidPhone = (phone) => {
  let phoneVar = phone;
  if (phoneVar.startsWith("+84")) {
    if (phoneVar.length != 12) return false;
  } else if (phoneVar.length != 10) {
    return false;
  } else {
    // Cách 1
    // return /(([03+[2-9]|05+[6|8|9]|07+[0|6|7|8|9]|08+[1-9]|09+[1-4|6-9]]){3})+[0-9]{7}\b/g.test(
    //   phone
    // );
    // Cách 2
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(phone);
  }
};
