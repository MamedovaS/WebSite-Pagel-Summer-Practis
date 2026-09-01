import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  return (
    <div className="breadcrumbs-outer">
      <div className="wrap">
        <div className="breadcrumb">
          <Link to="/"><i className="fa fa-home"></i> PAGEL</Link>
          {items.map((item, index) => (
            <span key={index}>
              <span> / </span>
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;