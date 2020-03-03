import React from 'react';
// import styled from 'styled-components';
import { useFormik } from 'formik';

const FormsContainer = ({
  data,
}: {
  data: { profileName: string };
}): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      firstName: data.profileName,
      lastName: '123',
      email: '123',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id={`firstName@${data.profileName}`}
        name={`firstName@${data.profileName}`}
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id={`lastName@${data.profileName}`}
        name={`lastName@${data.profileName}`}
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id={`email@${data.profileName}`}
        name={`email@${data.profileName}`}
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormsContainer;
