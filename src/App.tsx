import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Article from "./components/Article";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
              </>
            }
          />
          <Route path="/article/:slug" element={<Article />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
