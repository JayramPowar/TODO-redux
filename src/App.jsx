import TodoApp from './components/TodoApp.jsx'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}

export default App;