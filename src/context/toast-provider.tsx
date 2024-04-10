import { ReactNode, createContext, useContext, useRef, useState } from "react";

export const ToastContext = createContext({
  showToast: (message: string, duration: number = 2500) => {},
});

export const useToast = () => {
  return useContext(ToastContext);
};
export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toastIsMounted, setToastIsMounted] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const itvRef = useRef<NodeJS.Timeout | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const showToast = (message: string, duration: number = 2500) => {
    if (isLoading) return;
    if (itvRef.current) {
      clearTimeout(itvRef.current);
      itvRef.current = null;
    }
    setIsLoading(true);
    setToastIsMounted(true);
    setToastMessage(message);
    const itv = setTimeout(() => {
      setToastIsMounted(false);
      setIsLoading(false);
    }, duration);
    itvRef.current = itv;
  };
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastIsMounted && (
        <div className="ring-1 ring-[#00001A] fixed bottom-4 left-4 right-4 lg:top-12 lg:left-auto lg:bottom-auto lg:right-12 bg-[#27EAE4] text-[#00001A] px-8 py-4 rounded-lg fade-in-out z-50 shadow-lg">
          {toastMessage}
        </div>
      )}
    </ToastContext.Provider>
  );
};
