export const configs = Object.freeze({
  google: {
    tagId: process.env.NEXT_PUBLIC_GOOGLETAGID as string,
    gtmId: process.env.NEXT_PUBLIC_GTAG_ID as string,
  },
});
