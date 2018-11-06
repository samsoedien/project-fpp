export const formatListing = values => {
  const formData = new FormData();

  for (const key in values) {
    if (key === 'png') {
      formData.append(key, values[key][0]);
    } else {
      formData.append(key, values[key]);
    }
  }
  const options = {
    method: 'POST',
    body: formData
  };

  return options;
};
