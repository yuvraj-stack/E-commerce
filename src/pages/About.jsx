import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            repellendus deleniti dolor et eveniet. Laboriosam possimus assumenda
            provident odit excepturi suscipit facere itaque voluptatem facilis
            maiores? Tempora aut modi qui?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tenetur accusantium officia fugiat deserunt et dolor in laborum. Quo
            accusamus eligendi laborum cupiditate in eius vel soluta qui ab
            ullam.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos ullam beatae doloremque tempora in quam excepturi eaque
            ab accusamus, nam voluptatibus quo repellendus labore quibusdam
            praesentium dolorem harum eveniet rem?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            aliquid voluptate iusto voluptatibus voluptates. Culpa,
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            aliquid voluptate iusto voluptatibus voluptates. Culpa,
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Exceptional Customer Service : </b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            aliquid voluptate iusto voluptatibus voluptates. Culpa,
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
