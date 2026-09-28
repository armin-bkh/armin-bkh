import { getRequestConfig } from "next-intl/server";

// Single locale for now ("en"). To add more languages later, resolve the
// locale here (e.g. from a cookie or the pathname) and add the matching
// file under `messages/`. No routing changes needed until then.
export default getRequestConfig(async () => {
  const locale = "en";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
