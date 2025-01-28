import { getFirestore } from "firebase-admin/firestore";
import { App, cert, getApp, getApps, initializeApp } from "firebase-admin/app";

const serviceKey = require("./service_key.json");

let app: App;

if (getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceKey),
    });
} else {
    app = getApp();
}

const adminDb = getFirestore(app);

export { app as admingApp, adminDb };
