import config, { ConfigEndpointKeyType } from '../config';

function getUrlWithParamsConfig(endpointConfig: ConfigEndpointKeyType, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };

  return url;
}
export default getUrlWithParamsConfig;
