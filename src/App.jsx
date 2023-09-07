import { ToastProvider, useToast } from './ToastContext';
import ToastContainer from './ToastContainer';
import './App.css'

function ToastTrigger({ message, type, position, timeout }) {
    const { addToast } = useToast();

    return (
        <button onClick={() => addToast(message, type, position, timeout)}>Trigger {type} Toast</button>
    );
}

function App() {
    return (
        <ToastProvider>
            <div className="App">
                <ToastTrigger message='Success Message' type='success' position='top-right' timeout={4000} />
                <ToastTrigger message='Warning Message' type='warning' position='top-left' timeout={2000} />
                <ToastTrigger message='Error Message' type='error' position='bottom-right' timeout={6000} />
            </div>
            <ToastContainer />
        </ToastProvider>
    );
}

export default App;