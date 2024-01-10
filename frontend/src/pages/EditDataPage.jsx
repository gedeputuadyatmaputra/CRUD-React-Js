import React from "react";
import FormEdiit from "../components/FormEdiit";
import Layout from "./Layout";

const EditDataPage = () => {
  return (
    <Layout>
      <div className="flex w-full justify-center items-center">
        <h1 className="text-3xl font-semibold mt-5">Edit Data Warga</h1>
      </div>
      <div className="flex mt-10 justify-center">
        <FormEdiit/>
      </div>
    </Layout>
  );
};

export default EditDataPage;
