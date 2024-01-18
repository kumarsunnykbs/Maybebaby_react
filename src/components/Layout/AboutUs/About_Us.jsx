import React, { useState } from "react";
import Header from "../../MainHeader/Header";
import Footer from "../../../pages/footer/Footer";
import bannerimg12 from "../../../asset/image/cm.png";
import may from "../../../asset/image/may.png";
import "./About_Us.css"

const About_Us = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const content = `Experience the future of family planning Welcome to MaybeBaby.AI, where curiosity, love, and technology converge. We’re not just a cutting-edge tech company. We’re pioneers on a journey to reimagine how we view family, relationships, and life itself. MaybeBaby isn’t just a status symbol; it’s a testament to your forward-thinking mindset and bold embrace of what technology can offer to our personal lives.

  Our story began in the imaginative mind of our founder, Mr. Myko K. Marci. As a past student of genetics at UCLA and a hopeful father one day, he discovered the unique challenge of imagining the future face of his own future son or daughter. The sparkle in their eyes, the curve of their smile – cherishing the promise of life yet to unfold. Yet, he also recognized the limitations of the human imagination. In an age where technology has woven itself into the fabric of our lives, Mr. Marci pondered, why shouldn’t we utilize its prowess to envision the unseeable? This question sparked the genesis of MaybeBaby.AI. We invite you to embark on this revolutionary journey with us.

  MaybeBaby leverages advanced artificial intelligence to craft a stunningly accurate portrayal of your potential future children, brought to life from just two images. It’s more than a whimsical exploration – it’s a deeply personal experience. It’s a peek into a potential future that was once purely left to our dreams. But MaybeBaby isn’t for everyone. It’s for the pioneers, the visionaries, the ones who seize life with both hands and aren’t afraid to step into the unknown. When you use MaybeBaby, you don’t just use an app; you make a statement. A statement that you believe in the power of technology to redefine our lives in the most personal of ways.

  It’s a badge of honor that tells the world you’re not just living in the future, but you’re creating it. We’ve created an exclusive community for you, where you’re privy to the most advanced AI technology available today. By choosing MaybeBaby, you align yourself with the elite, the brave, and the future-forward individuals who don’t just predict the future – they build it. Join us, and let’s shape the future together – one beautiful face at a time`;

  const truncatedContent = content.slice(
    0,
    content.indexOf("yet to unfold") + 13
  );
  const displayContent = expanded ? content : truncatedContent;

  return (
    <>
      <Header />
      <section className="about-new">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="AboutUshead">About Us</h3>
            </div>
          </div>
          <div className="row about-center">
            <div className="col-lg-7">
              <div className="know-content-left desktop-about">
                <img className="may" src={may} alt="" />
                <p>
                  Experience the future of family planning Welcome to
                  MaybeBaby.AI, where curiosity, love, and technology converge.
                  We’re not just a cutting-edge tech company. We’re pioneers on
                  a journey to reimagine how we view family, relationships, and
                  life itself. MaybeBaby isn’t just a status symbol; it’s a
                  testament to your forward-thinking mindset and bold embrace of
                  what technology can offer to our personal lives.
                </p>
                <p>
                  Our story began in the imaginative mind of our founder, Mr.
                  Myko K. Marci. As a past student of genetics at UCLA and a
                  hopeful father one day, he discovered the unique challenge of
                  imagining the future face of his own future son or daughter.
                  The sparkle in their eyes, the curve of their smile –
                  cherishing the promise of life yet to unfold. Yet, he also
                  recognized the limitations of the human imagination. In an age
                  where technology has woven itself into the fabric of our
                  lives, Mr. Marci pondered, why shouldn’t we utilize its
                  prowess to envision the unseeable? This question sparked the
                  genesis of MaybeBaby.AI. We invite you to embark on this
                  revolutionary journey with us.
                </p>
                <p>
                  MaybeBaby leverages advanced artificial intelligence to craft
                  a stunningly accurate portrayal of your potential future
                  children, brought to life from just two images. It’s more than
                  a whimsical exploration – it’s a deeply personal experience.
                  It’s a peek into a potential future that was once purely left
                  to our dreams. But MaybeBaby isn’t for everyone. It’s for the
                  pioneers, the visionaries, the ones who seize life with both
                  hands and aren’t afraid to step into the unknown. When you use
                  MaybeBaby, you don’t just use an app; you make a statement. A
                  statement that you believe in the power of technology to
                  redefine our lives in the most personal of ways.
                </p>
                <p>
                  It’s a badge of honor that tells the world you’re not just
                  living in the future, but you’re creating it. We’ve created an
                  exclusive community for you, where you’re privy to the most
                  advanced AI technology available today. By choosing MaybeBaby,
                  you align yourself with the elite, the brave, and the
                  future-forward individuals who don’t just predict the future –
                  they build it. Join us, and let’s shape the future together –
                  one beautiful face at a time
                </p>
              </div>
              <div className="know-content-left mobile-about">
                <img className="may" src={may} alt="" />
                <p>{displayContent}</p>
                {content.length > truncatedContent.length && (
                  <button onClick={toggleReadMore}>
                    {expanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="know-content-right">
                <img className="img-ab3" src={bannerimg12} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About_Us;
