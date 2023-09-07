import { createContext, useContext, useState } from 'react';

const ToastContext = createContext(null);

export const useToast = () => {
    return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = 'success', position = 'top-right', timeout = 4000) => {
        const id = new Date().getTime();
        setToasts((prevToasts) => [...prevToasts, { id, message, type, position }]);

        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
        }, timeout);
    };

    return (
        <ToastContext.Provider value={{ addToast, toasts }}>
            {children}
        </ToastContext.Provider>
    );
};
