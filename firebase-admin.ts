import { getFirestore } from "firebase-admin/firestore";
import {
  App,
  cert,
  getApp,
  getApps,
  initializeApp,
  ServiceAccount,
} from "firebase-admin/app";

import { serviceKey } from "./serviceKey";

let app: App;

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceKey as ServiceAccount),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as admingApp, adminDb };
