/* import React from 'react'
import Layout from '../components/Layout/Layout'

const Contact = () => {
  return (
    <Layout>
      <h1>Contact Page</h1>
    </Layout>
  )
}

export default Contact


 */


import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        <div className="col-md-8">
          <h1 className="bg-light p-2 text-black text-left">Contact us</h1>

          <p className="text-justify mt-2">
            <b>eShopping Help Center  | 24x7 Customer Care Support </b>
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@eShopping.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
