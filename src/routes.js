import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';

export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/test" element={<TestPage />} />
  </>
);
