// App.js

import React, { useEffect } from 'react';
import styled from 'styled-components';
import AppRouter from './routes/AppRouter';
import { AdminProvider } from './context/AdminContext';
import { BlogProvider } from './context/BlogContext';
import { ThemeProvider } from './context/ThemeContext';
import { UIProvider } from './context/UIContext';
import { UserProvider } from './context/UserContext';
import { ProjectProvider } from './context/ProjectContext';
import { AuthProvider } from './context/AuthContext';
import { initGA, logPageView } from './services/analytics';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content:space-between;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const App = () => {

  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial pageview
  }, []);

  return (
    <AuthProvider>
      <AdminProvider>
        <UserProvider>
         <BlogProvider>
            <ProjectProvider>
              <ThemeProvider>
                <UIProvider>
                  <AppWrapper className="App">
                    <ContentContainer>
                      <AppRouter />
                    </ContentContainer>
                  </AppWrapper>
                </UIProvider>
              </ThemeProvider>
            </ProjectProvider>
          </BlogProvider>
        </UserProvider>
      </AdminProvider>
    </AuthProvider>
  );
}

export default App;
