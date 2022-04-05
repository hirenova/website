interface EncodeURIComponentsParams {
  [name: string]: string;
}

export const encodeURIComponents = (
  params: EncodeURIComponentsParams
): string => {
  const queryString = Object.entries(params)
    .filter(([key, value]) => value !== "")
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
  return queryString;
};

export const encodeURIAll = (
  directory: string,
  params: EncodeURIComponentsParams | string
): string => {
  if (typeof params !== "string") {
    params = encodeURIComponents(params);
    if (params === "") return directory;
  }
  return `${directory}?${params}`;
};

export const redirectLogin = () => {};

export const redirectSignUp = () => {};
