import { DefaultSeo } from "next-seo";
import { APP_NAME, DESCRIPTION } from "../utils/constants";
import "../style.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="transition-all duration-700">
      <DefaultSeo
        titleTemplate={`%s | ${APP_NAME}`}
        defaultTitle={APP_NAME}
        description={DESCRIPTION}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
