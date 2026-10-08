/**
 * MASTER BET — firebase.js
 * ÚNICO sítio com a configuração. Todas as páginas fazem:
 *   import { auth, db } from "./firebase.js";
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }       from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyAMaLF1E7X9rtmlu-hyZFSBeiZtlAobyT4",
  authDomain:        "master-bet-d2e04.firebaseapp.com",
  projectId:         "master-bet-d2e04",
  storageBucket:     "master-bet-d2e04.firebasestorage.app",
  messagingSenderId: "902595176891",
  // TODO: troque por o appId de uma app WEB (Firebase > Configurações > Seus apps > </>)
  appId:             "1:902595176891:android:7e6989c71b9d17b9aa7c9e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
