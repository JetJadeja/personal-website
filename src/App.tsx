import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Article from "./components/Article";

// Container component that handles consistent spacing between sections
const ContentSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-60 py-10">{children}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero takes full viewport height */}
                <Hero />

                {/* Work, Projects, and Writing sections with consistent spacing */}
                <ContentSection>
                  {/* About section sits right below the viewport */}
                  <div className="mt-0">
                    <About />
                  </div>
                  <Work />
                  <Projects />
                  <Writing />
                </ContentSection>
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
