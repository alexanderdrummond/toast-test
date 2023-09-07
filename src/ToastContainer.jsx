import React from 'react';
import { useToast } from './ToastContext';
import './ToastContainer.css';

function ToastContainer() {
    const { toasts } = useToast();

    return toasts.map((toast) => (
        <div key={toast.id} className={`toast-container ${toast.position}`}>
            <div className={`toast toast-${toast.type}`}>
                {toast.message}
            </div>
        </div>
    ));
}


export default ToastContainer;