import React from 'react';
import LazyLoad from 'react-lazyload';

const Loading = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
);

const LazyLoadWrapper = ({ children }) => (
  <LazyLoad placeholder={<Loading />} offset={100}>
    {children}
  </LazyLoad>
);

export default LazyLoadWrapper;
