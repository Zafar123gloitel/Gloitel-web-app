export interface IConfigs {
  NODE_ENV: string;

  // Domain
  NEXT_PUBLIC_CLIENT_BASE_DOMAIN: string;
  NEXT_PUBLIC_SERVER_BASE_DOMAIN: string;

  // Base-Url
  NEXT_PUBLIC_CLIENT_BASE_URL: string;
  NEXT_PUBLIC_SERVER_BASE_URL: string;
  NEXT_PUBLIC_API_VERSION: string;

  // Secret
  NEXT_PUBLIC_SECRET_TOKEN: string;

  // Google Tag Manager
  NEXT_PUBLIC_GOOGLETAGID: string;
}
