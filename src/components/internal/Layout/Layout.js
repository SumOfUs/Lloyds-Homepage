import React from "react";
import { NextSeo } from "next-seo";

const Layout = ({ children, customMetadata = {} }) => {
  const METADATA = {
    title: customMetadata.title || "Lloyd's Climate Catastrophe",
    description:
      customMetadata.description ||
      "Insuring fossil fuels & Profiting from climate destruction",
    image:
      customMetadata.image ||
      "https://assets.cheftoyourtable.com/images/ctyt-logo.png",
    url: customMetadata.url || process.env.NOW_URL,
  };

  return (
    <>
      {/* <-- Next Seo Start --> */}
      <NextSeo
        title={METADATA.title}
        description={METADATA.description}
        canonical={METADATA.url}
        openGraph={{
          url: METADATA.url,
          title: METADATA.title,
          description: METADATA.description,
          images: [{ url: METADATA.image }],
          site_name: METADATA.title,
        }}
      />

      {/* Content and footer Container */}
      <div className="content">
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
