import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorMessage = () => {
    const error = useRouteError();
    return (
      <div className="flex flex-col place-items-center justify-center align-items-center h-screen">
        <img width="300" src="https://i.ibb.co/xsfjJt3/not-found.jpg" alt="" />
        <p>{error.error.message}</p>
        <Link to="/">
          <button className="mt-5 bg-yellow-400 rounded-lg w-20 ml-3">HOME</button>
        </Link>
      </div>
    );
};

export default ErrorMessage;