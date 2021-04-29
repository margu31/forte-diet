import ReactDOM from 'react-dom';

export default function Portal({ id, children }) {
  const el = document.getElementById(id);

  return ReactDOM.createPortal(children, el);
}
