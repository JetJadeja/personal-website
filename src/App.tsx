import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkAndProjects from "./components/WorkAndProjects";
import Writing from "./components/Writing";
import Article from "./components/Article";

// Container component that handles consistent spacing between sections
const ContentSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-16">{children}</div>;
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

                {/* About section sits right below the viewport */}
                <div className="mt-0">
                  <About />
                </div>

                {/* Work and Writing sections with consistent spacing */}
                <ContentSection>
                  <WorkAndProjects />
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
