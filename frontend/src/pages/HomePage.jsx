import React from "react";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex w-full justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="text-3xl font-semibold">
            <p>Rukun Warga 04</p>
          </div>
          <div className="text-lg mt-2">
            <a
              href="/data_wrg"
              className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Pergi ke Data Warga
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
