import { useEffect } from "react";
import init, { push } from "@/util/matomo";

export const Bootstrap = () => {
  useEffect(() => {
    init({
      url: "https://analytics.0xalice.com",
      siteId: "2",
    });
    push(["trackPageView"]);
    push(["enableLinkTracking"]);
  }, []);
  return <></>;
};
