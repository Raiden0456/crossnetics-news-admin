import React from "react";

import LoginCard from "../../components/LoginCard/LoginCard";

interface LoginPageProps {}


const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-ctp-base">
      <LoginCard />
    </div>
  );
};

export default LoginPage;
