import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import HeaderBlock from './components/common/HeaderBlock';
import FooterBlock from './components/common/FooterBlock';

export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/test" element={<TestPage />} />
  </>
);
