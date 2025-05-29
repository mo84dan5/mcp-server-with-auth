// auth.ts
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, } from 'firebase/auth';
import dotenv from 'dotenv';
dotenv.config();
// Firebase プロジェクトの設定
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
};
// Firebase アプリの初期化
const app = initializeApp(firebaseConfig);
// Firebase Authentication の取得
const auth = getAuth(app);
/**
 * ユーザーIDとパスワードを用いてFirebase Authenticationに問い合わせ、認証結果を取得します。
 * @param email - ユーザーのメールアドレス
 * @param password - パスワード
 * @returns 認証成功時はtrue、失敗時はfalse
 */
export async function authenticateWithPassword(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // 必要に応じて、user オブジェクトを使用して追加の処理を行う
        return true;
    }
    catch (error) {
        console.error('認証エラー:', error);
        return false;
    }
}
/**
 * 現在のユーザーが認証済みかどうかを確認します。
 * @returns 認証済みの場合はtrue、未認証またはセッション切れの場合はfalse
 */
export function isAuthenticated() {
    const user = auth.currentUser;
    return user !== null;
}
/**
 * 認証状態の変化を監視します。
 * @param callback - ユーザー情報を受け取るコールバック関数
 */
export function observeAuthState(callback) {
    onAuthStateChanged(auth, callback);
}
