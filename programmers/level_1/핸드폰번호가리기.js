const solution = (phone_number) => {
  const phoneNumArr = phone_number.split('');
  let blindPhoneNum = [];

  for (let i = -1; i >= -phone_number.length; i--) {
    if (i >= -4) {
      blindPhoneNum.unshift(phoneNumArr.at(i));
    } else {
      blindPhoneNum.unshift('*');
    }
  }

  return blindPhoneNum.join('');
};
solution('01033334444');
solution('027778888');
solution('01012345678');

const solution2 = (phone_number) => {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
};

solution2('01033334444');
solution2('027778888');
solution2('01012345678');
