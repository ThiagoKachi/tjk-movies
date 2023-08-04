import { useEffect } from 'react';
import { SuccessToast } from './Success';
import { ErrorToast } from './Error';

interface ToastComponentProps {
  toastType: 'success' | 'error';
  onClose: () => void;
}

export function ToastComponent({ toastType, onClose }: ToastComponentProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    toastType === 'success' ? (
      <SuccessToast onClose={onClose} />
    ) : (
      <ErrorToast onClose={onClose} />
    )
  );
}