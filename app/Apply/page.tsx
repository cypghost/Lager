"use client";
import Script from "next/script";

export default function JobApplicationForm() {
  return (
    <div className="w-full min-h-screen pb-10">
      <iframe
        data-tally-src="https://tally.so/embed/3j9aZa?hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="100%"
        style={{ border: 0, margin: 0 }}
        title="Lager Register"
        className="h-full"
      ></iframe>

      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          // @ts-ignore
          Tally?.loadEmbeds();
        }}
      />
    </div>
  );
}
