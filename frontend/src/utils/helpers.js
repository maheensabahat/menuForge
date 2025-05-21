export const generateApiPayload = (apiURL, bearerToken) => {
  return {
    baseURL: apiURL,
    headers: {
      "Content-Type": "application/json",
      ...(bearerToken && { Authorization: `Bearer ${token}` }),
    },
  };
};
