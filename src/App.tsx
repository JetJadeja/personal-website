import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkAndProjects from "./components/WorkAndProjects";
import Writing from "./components/Writing";
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
                <About />
                <WorkAndProjects />
                <Writing />
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
