import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextValue>({ showToast: () => {} });

const ICONS: Record<ToastType, string> = {
  success: '✓',
  error: '✕',
  info: 'ℹ',
  warning: '⚠',
};

const COLORS: Record<ToastType, string> = {
  success: '#10b981',
  error: '#ef4444',
  info: '#06b6d4',
  warning: '#f59e0b',
};

let nextId = 1;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info', duration = 3500) => {
    const id = nextId++;
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 9000,
          pointerEvents: 'none',
        }}
      >
        {toasts.map(toast => (
          <div
            key={toast.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 18px',
              background: 'rgba(13,13,26,0.95)',
              border: `1px solid ${COLORS[toast.type]}66`,
              borderLeft: `4px solid ${COLORS[toast.type]}`,
              borderRadius: '10px',
              color: '#f1f5f9',
              fontSize: '0.9rem',
              fontWeight: 500,
              backdropFilter: 'blur(10px)',
              boxShadow: `0 4px 20px ${COLORS[toast.type]}33`,
              animation: 'slideInRight 0.3s ease',
              pointerEvents: 'auto',
              minWidth: '260px',
              maxWidth: '360px',
            }}
          >
            <span
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: COLORS[toast.type],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {ICONS[toast.type]}
            </span>
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
