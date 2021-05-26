import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

function req<T>(endpoint: string, query: object, id: string | number = ''): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query, id));
  return fetch(uri).then((res) => res.json());
}

export default req;
