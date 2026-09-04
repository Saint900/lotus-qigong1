// Standalone localStorage utility with app-scoped keys
// Replaces scopedStorage from @lark-apaas/client-toolkit-lite for standalone/Vercel deploy

const STORAGE_PREFIX = 'lotus_qigong:';

export const scopedStorage = {
  getItem(key: string): string | null {
    try {
      return localStorage.getItem(`${STORAGE_PREFIX}${key}`);
    } catch {
      return null;
    }
  },
  setItem(key: string, value: string): void {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}${key}`, value);
    } catch {
      // ignore quota errors
    }
  },
  removeItem(key: string): void {
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
    } catch {
      // ignore
    }
  },
  clear(): void {
    try {
      const keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(STORAGE_PREFIX)) keys.push(k);
      }
      keys.forEach((k) => localStorage.removeItem(k));
    } catch {
      // ignore
    }
  },
};
