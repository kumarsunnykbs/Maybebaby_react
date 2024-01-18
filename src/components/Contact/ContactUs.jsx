import React from "react";
import { toast } from 'react-toastify';
import soc1 from "../../asset/image/socialmedia1.png";
import soc2 from "../../asset/image/socialmedia2.png";
import soc3 from "../../asset/image/socialmedia3.png";
import soc4 from "../../asset/image/map.png";
import Header from "../MainHeader/Header";
import Footer from "../../pages/footer/Footer";
import { BASE_URL } from "../../uility/common";
import { useFormik } from "formik";
import * as Yup from "yup";


const ContactUs = () => {

    const initialValues = {
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phoneNumber: Yup.string().required("Phone Number is required"),
        message: Yup.string()
    });


    const onSubmit = async (values, { resetForm }) => {
        try {
            // Make the API request
            const response = await fetch(`${BASE_URL}/contactUs`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            // Handle the response
            if (response.ok) {
                // API request successful, do something with the response
                toast.success('Form submitted successfully');
                resetForm(); // Reset the form after successful submission
            } else {
                // API request failed, handle the error
                throw new Error("API request failed");
            }
        } catch (error) {
            // Handle any error that occurred during the API request
            console.error(error);
        }
    };


    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return (
        <>
        <Header />
            <section className="about-new contact-new">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-content">
                                <h3 className="AboutUshead">Contact Us</h3>
                                <p className="contact-p">For any inquiries or assistance, please don't hesitate to reach out to our team. You can contact us via phone or email, and we'll be delighted to address your questions and provide the support you need.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mobile-none-contact">
                        <div className="col-lg-4">
                            <div className="contact-common BT">
                                <img src={soc1} alt="" />
                                <p className="contact-p1">Email</p>
                                <p className="contact-p2">mailto: info@example.com</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-common BT">
                                <img src={soc2} alt="" />
                                <p className="contact-p1">Location</p>
                                <p className="contact-p2">2425 Hc 1, Glennallen, Alaska 99588, USA</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-common BT">
                                <img src={soc3} alt="" />
                                <p className="contact-p1">Phone</p>
                                <p className="contact-p2">(907) 822-3605</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mar-top-contact">
                        <div className="col-lg-6 right-con-pd">
                            <div className="contact-form">
                                <div className="center-frm">
                                    <h3 className="get-to">Get in touch with us</h3>
                                    <form onSubmit={formik.handleSubmit}>
                    <div className="margin-form">
                        <label className="label-frm">Full Name *</label>
                        <input
                            className="label-input"
                            type="text"
                            name="fullName"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.fullName && formik.errors.fullName && (
                            <div className="error-message">{formik.errors.fullName}</div>
                        )}
                    </div>
                    <div className="margin-form">
                        <label className="label-frm">Email Address *</label>
                        <input
                            className="label-input"
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="error-message">{formik.errors.email}</div>
                        )}
                    </div>
                    <div className="margin-form">
                        <label className="label-frm">Phone Number *</label>
                        <input
                            className="label-input"
                            type="text"
                            name="phoneNumber"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                            <div className="error-message">{formik.errors.phoneNumber}</div>
                        )}
                    </div>
                    <div className="margin-form">
                        <label className="label-frm">Your Message</label>
                        <textarea
                            className="label-input label-textarea"
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                        ></textarea>
                        {formik.touched.message && formik.errors.message && (
                            <div className="error-message">{formik.errors.message}</div>
                        )}
                    </div>
                    <button className="Submit-button BT" type="submit">
                        Submit
                    </button>
                </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 left-con-pd">
                            <div className="contact-map">
                                <img className="soc4" src={soc4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row dextop-none-contact">
                        <div className="col-6">
                            <div className="contact-common BT">
                                <img src={soc1} alt="" />
                                <p className="contact-p1">Email</p>
                                <p className="contact-p2">mailto: info@example.com</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="contact-common BT">
                                <img src={soc3} alt="" />
                                <p className="contact-p1">Phone</p>
                                <p className="contact-p2">(907) 822-3605</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="contact-common BT">
                                <img src={soc2} alt="" />
                                <p className="contact-p1">Location</p>
                                <p className="contact-p2">2425 Hc 1, Glennallen, Alaska 99588, USA</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ContactUs;