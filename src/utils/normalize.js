const normalizeUser = (dummyName, dummyPhone) => {
  const [firstName, surname] = dummyName.split(' ');
  const [normalPhone] = dummyPhone.split(' ');
  const newPhone = normalPhone.replaceAll('.', '-');
  const user = {
    name: firstName,
    surname,
    phone: newPhone,
  };
  return user;
};

export default normalizeUser;
