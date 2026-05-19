import { BookList } from './components/BookList'
import { Provider } from "react-redux";
import store from './store/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <BookList />
      </Provider>
    </>
  )
}

export default App
