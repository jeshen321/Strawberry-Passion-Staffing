import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import Root from "./pages/root.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: "#FBD1C7",
            colorTextBase: "#fff",
            fontSize: 15,
            colorPrimary: "#fff",
          },
          components: {
            Button: {
              colorPrimary: "#E0653B",
              colorPrimaryHover: "#C1BB41",
              colorPrimaryActive: "#9E339F",
              colorTextLightSolid: "#fff",
            },
          },
        }}
      >
        <Root />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
);
