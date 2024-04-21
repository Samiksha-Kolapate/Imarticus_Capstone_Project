import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus" >
        <div className="col-md-6 ">
          <img
            src="/images/about1.jpg"
            alt="contactus"
            style={{ width: "100%", height:"100%", alignItems:'start' }}
          />
        </div>
        <div className="col-md-4">
          <h3>About us</h3>
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
            <br></br>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
