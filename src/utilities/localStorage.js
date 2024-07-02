const getLocalStorageData = () => {
  const donations = localStorage.getItem("donations");
  if (donations) {
    return JSON.parse(donations);
  }
  return [];
};

const storeToLocalStorage = (donation) => {
  const donations = getLocalStorageData();
  const newDonations = [...donations, donation];
  localStorage.setItem("donations", JSON.stringify(newDonations));
};

export { getLocalStorageData, storeToLocalStorage };
