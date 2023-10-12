import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/themeProvider";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
