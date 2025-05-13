/**
 * Define a mount point for JavaScript
 */
import ReactDOM from 'react-dom/client';
import App from '../App';


export function mount(el: HTMLElement, props = {}){
    const chatRoot = ReactDOM.createRoot(el);
    chatRoot.render(
        <App {...props} />
    );

}