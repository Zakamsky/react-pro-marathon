import config, { ConfigEndpointKeyType } from '../config';

function getUrlWithParamsConfig(endpointConfig: ConfigEndpointKeyType) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };

  return url;
}
export default getUrlWithParamsConfig;
