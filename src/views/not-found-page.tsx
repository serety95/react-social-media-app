import React from "react";

function NotFoundPage() {
  return (
    <section className='container mt-5'>
      <div className='d-flex align-items-center justify-content-center'>
        <div className='text-center'>
          <h1 className='display-1 fw-bold'>404</h1>
          <p className='fs-3'>
            <span className='text-danger'>Opps!</span> Page not found.
          </p>
          <p className='lead'>The page you’re looking for doesn’t exist.</p>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
