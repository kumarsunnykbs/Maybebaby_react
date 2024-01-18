import React from "react";
import Header from "../../MainHeader/Header";
import Footer from "../../../pages/footer/Footer";
import "./TermsOfservice.css";
const TermsOfService = () => {
  return (
    <>
      <Header />
      <section className="term-new">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="termsConditions">Terms Of Services</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="termsPoint">
                <div className="term">
                  <div className="termsheader">1. Acceptance of Terms</div>
                  <p className="terms-paragraph">
                    This agreement (the “Agreement”) is entered into by and
                    between you, the user (hereinafter “User”) of MaybeBaby.AI,
                    a mobile and web application (the “Service”), and Outfight
                    LLC, a Wyoming limited liability company with its principal
                    place of business in Sheridan, Wyoming (the “Company”). By
                    using the Service, you acknowledge that you have read,
                    understood, and agree to be bound by the terms contained in
                    this Agreement.
                  </p>
                </div>
                <div className="term">
                  <div className="termsheader">2. Service Description</div>
                  <p className="terms-paragraph">
                    The Service provides a platform for Users to upload two
                    photographs, which the Service uses to generate an image
                    predicting what the children of the individuals in the
                    photographs might look like
                  </p>
                </div>

                <div className="term">
                  <div className="termsheader">3. User Obligations</div>
                  <p className="terms-paragraph">
                    The User agrees not to upload or use photographs of any
                    individual who is under the age of 18. In using the Service,
                    the User affirms that the photographs used do not depict
                    minors and has obtained all necessary consents from the
                    individuals in the photographs.
                  </p>
                </div>

                <div className="term">
                  <div className="termsheader">4. Intellectual Property</div>
                  <p className="terms-paragraph">
                    All intellectual property rights relating to the Service and
                    its outputs, including but not limited to copyright,
                    trademarks, and trade secrets, are owned by the Company.
                  </p>
                </div>

                <div className="term">
                  <div className="termsheader">5. Limitations of Liability</div>
                  <p className="terms-paragraph">
                  The service is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement.
In no event shall the Company be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the Service or the use or other dealings in the Service.
                  </p>
                </div>

                <div className="term">
                  <div className="termsheader">
                    6. Dispute Resolution and Governing Law
                  </div>
                  <p className="terms-paragraph">
                    This Agreement shall be governed by and construed in
                    accordance with the laws of the state of Wyoming, excluding
                    its conflicts of law rules. Any dispute arising from or
                    relating to the subject matter of this Agreement shall be
                    finally settled in Wyoming.
                  </p>
                </div>

                <div className="term">
                  <div className="termsheader">
                    7. Modifications to Agreement
                  </div>
                  <p className="terms-paragraph">
                    This Agreement shall be governed by and construed in
                    accordance with the laws of the state of Wyoming, excluding
                    its conflicts of law rules. Any dispute arising from or
                    relating to the subject matter of this Agreement shall be
                    finally settled in Wyoming.
                  </p>
                </div>

                <div className="term">
                  <div className="termsheader">8. Contact Information</div>
                  <p className="terms-paragraph">
                    Any questions about the Agreement or the Service can be
                    directed to 228 Park Ave S #72873, New York, NY 10003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsOfService;
