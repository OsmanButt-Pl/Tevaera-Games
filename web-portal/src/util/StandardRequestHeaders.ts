interface StandardRequestHeaders {
  authorization?: string;
  'x-daoiq-apim': string;
}

export const getStandardHeaders = (): StandardRequestHeaders => {
  const headers: StandardRequestHeaders = {
    'x-daoiq-apim': `${process.env.REACT_APP_DAOIQ_API_SUBSCRIPTION_KEY}`,
  };
  return headers;
};

// TODO: Use MSAL library to generate token and pass a bearer token in authorization header
export const getStandardHeadersWithAuth = async (): Promise<StandardRequestHeaders> => {
  const headers: StandardRequestHeaders = {
    authorization: `Bearer <accessToken>`,
    'x-daoiq-apim': `${process.env.REACT_APP_DAOIQ_API_SUBSCRIPTION_KEY}`,
  };

  return headers;
};
