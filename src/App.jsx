import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPages from "./components/WatchPages";
import MainContainer from "./components/MainContainer";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body></Body>,
      children: [
        {
          path: "/",
          element: <MainContainer></MainContainer>,
        },
        {
          path: "watch",
          element: <WatchPages></WatchPages>,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
