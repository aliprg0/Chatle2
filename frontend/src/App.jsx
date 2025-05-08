import React from "react";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <LoginPage />
      {/* <SignUpPage />
      <HomePage /> */}
    </div>
  );
};

export default App;
