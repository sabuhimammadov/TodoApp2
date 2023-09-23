import { TodoContainer } from "./Pages/TodoContainer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div className="text-white">
      <TodoContainer />
      <ToastContainer />
    </div>
  );
}

export default App;
