import "../components/css/home.css";

import { useRef, useState, } from "react";

import React from "react";
import emailjs from "@emailjs/browser";

//6Lfb45YoAAAAAD_f18VXqtGGCy4StU2ulB_XuKQH

import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUs() {
    const form = useRef();
  const [protection, setprotection] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [orderNo, setOrderNo] = useState("");
  const [message, setMessage] = useState("");
  const [capVal, setCapVal] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    if (
      !email == "" &&
      !name == "" &&
      !phone == "" &&
      !orderNo == "" &&
      !message == ""
    ) {
      data = {
        name: name,
        email: email,
        phone: phone,
        orderNo: orderNo,
        message: message,
      };
      console.log(data);
    } else {
    }
    console.log(data);
    sendEmail(data)
  };
  const sendEmail = (data) => {
    emailjs
      .sendForm(
        "service_vfdr38d",
        "template_fq1hxre",
        form.current,
        "tgTqtRS0DBpurl8WN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

 
  return (
    <>
      <form action="" ref={form}>
        <img src="IMAGE/banner.jpg" alt="X-SHOPPING" />
        <div class="main">
          <h1>Open Letter Maker</h1>
          <hr />
          <p>
            All the Submissions to this form will be appended into a table as
            signatures in the style of open letter.
          </p>
          <h4>* Required</h4>
        </div>
        <div class="name">
          <h3>
            Name <span>*</span>
          </h3>
          <input
            type="text"
            name="name"
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="email">
          <h3>
            Email <span>*</span>
          </h3>
          <input
            type="email"
            name="email"
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="phone">
          <h3>
            Phone <span>*</span>
          </h3>
          <input
            type="phone"
            name="phone"
            id=""
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div class="order">
          <h3>
            Order Number <span>*</span>
          </h3>
          <input
            type="number"
            name="orderNo"
            id=""
            value={orderNo}
            onChange={(e) => setOrderNo(e.target.value)}
            required
          />
        </div>
        <div class="massage">
          <h3>
            Your Massage <span>*</span>
          </h3>
          <input
            type="text"
            name="message"
            id=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div class="protection">
          <h3>
            {" "}
            Span Protection <span>*</span>
          </h3>
          <input
            type="text"
            name="protection"
            id=""
            required
            onChange={(e) => setprotection(e.target.value)}
          />
        </div>
        <div class="captcha">
          <ReCAPTCHA
            sitekey="6Lfb45YoAAAAAD_f18VXqtGGCy4StU2ulB_XuKQH"
            onChange={(val) => setCapVal(val)}
          />
        </div>
        <div class="submit">
          <button class="button1" disabled={!capVal} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
