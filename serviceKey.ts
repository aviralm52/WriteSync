export const serviceKey = {
  type: "service_account",
  project_id: "writesync-1812c",
  private_key_id: process.env.PRIVATE_KEY_ID!,
  private_key: process.env.PRIVATE_KEY!,
  client_email:
    "firebase-adminsdk-fbsvc@writesync-1812c.iam.gserviceaccount.com",
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40writesync-1812c.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

