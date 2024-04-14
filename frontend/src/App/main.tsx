import ReactDOM from "react-dom/client";
import App from "./router.tsx";
import "./index.scss";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      components: {
        Select : {
          colorPrimary: "#adadad",
          colorTextBase: "#000",
          multipleItemBorderColorDisabled: 'transparent',
          algorithm: true,
        },
      },
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
