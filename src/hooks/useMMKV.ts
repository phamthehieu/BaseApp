import { useState, useEffect, useCallback } from 'react';
import { storage } from '@/utils/storage';

/**
 * Custom hook to interact with MMKV storage
 * @param key - Storage key
 * @param defaultValue - Default value if key doesn't exist
 * @returns [value, setValue, removeValue]
 */
export const useMMKV = <T extends string | number | boolean>(
  key: string,
  defaultValue?: T
): [T | undefined, (value: T) => void, () => void] => {
  const [value, setValueState] = useState<T | undefined>(() => {
    const stored = storage.getString(key);
    if (stored === undefined) return defaultValue;
    
    // Try to parse as JSON, fallback to string
    try {
      return JSON.parse(stored) as T;
    } catch {
      return (stored as unknown as T) ?? defaultValue;
    }
  });

  useEffect(() => {
    const stored = storage.getString(key);
    if (stored !== undefined) {
      try {
        setValueState(JSON.parse(stored) as T);
      } catch {
        setValueState((stored as unknown as T) ?? defaultValue);
      }
    } else if (defaultValue !== undefined) {
      setValueState(defaultValue);
    }
  }, [key, defaultValue]);

  const setValue = useCallback(
    (newValue: T) => {
      const stringValue =
        typeof newValue === 'string' ? newValue : JSON.stringify(newValue);
      storage.set(key, stringValue);
      setValueState(newValue);
    },
    [key]
  );

  const removeValue = useCallback(() => {
    storage.delete(key);
    setValueState(defaultValue);
  }, [key, defaultValue]);

  return [value, setValue, removeValue];
};
