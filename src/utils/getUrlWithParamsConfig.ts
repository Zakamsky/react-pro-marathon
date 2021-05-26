import config, { ConfigEndpointKeyType } from '../config';

function getUrlWithParamsConfig(endpointConfig: ConfigEndpointKeyType, query: object, id: string | number = '') {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };

  if (id !== '') {
    url.pathname += id;
  }

  return url;
}
export default getUrlWithParamsConfig;
