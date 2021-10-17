import React from 'react';

import logo from '../../assets/images/logo.svg';

const Privacy: React.FC = () => {
  return (
    <div className="appTevera">
      <header className="header">
        <div className="d-flex justify-content-between align-items-center">
          <a href="/home">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <button className="btn btnDownload">Download Litepaper</button>
        </div>
      </header>
      <div className="container">
        <div className="content">
          <h2>Privacy Policy</h2>
          <p>Privacy Policy for The Tevaera</p>

          <p>
            At Tevaera, accessible from https://www.Tevaera.com, one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is collected and recorded by The Tevaera and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us
            through email at support@tevaera.com
          </p>

          <h3>Log Files</h3>

          <p>
            Tevaera follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting
            companies do this as part of hosting services’ analytics. The information collected by log files include internet protocol
            (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the
            number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information
            is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic
            information.
          </p>

          <h3>Cookies and Web Beacons</h3>

          <p>
            Like any other website, Tevaera uses ‘cookies’. These cookies are used to store information including visitors’
            preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the
            users’ experience by customizing our web page content based on visitors’ browser type and/or other information.
          </p>

          <p>
            Privacy Policies You may consult this list to find the Privacy Policy for each of the advertising partners of Tevaera. Our
            Privacy Policy was created with the help of the Privacy Policy Generator and the TermsFeed Generator.
          </p>

          <p>
            Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Tevaera, which are sent directly to users’ browsers. They automatically
            receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising
            campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>

          <p>Note that Tevaera has no access to or control over these cookies that are used by third-party advertisers.</p>

          <h3>Third Party Privacy Policies</h3>

          <p>
            Tevaera’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices
            and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their
            links here: Privacy Policy Links.
          </p>

          <p>
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie
            management with specific web browsers, it can be found at the browsers’ respective websites. What Are Cookies?
          </p>

          <h3>Children’s Information</h3>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians
            to observe, participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            Tevaera does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think
            that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and
            we will do our best efforts to promptly remove such information from our records.
          </p>

          <h3>Online Privacy Policy Only</h3>
          <p>
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the
            information that they shared and/or collected in Tevaera. This policy is not applicable to any information collected
            offline or via channels other than this website.
          </p>

          <h3>ARKit & Camera Usage</h3>

          <p>
            We do not collect or store data used by ARKit, ARCore, or other software for depth of facial mapping information. Our App
            Tevaera uses Apple’s TrueDepth API only to track the movement of your eyes, mouth and face. While using TrueDepth APIs the
            camera images and resulting depth data are only used for gameplay purposes. The face data only remains on your device, and
            is only shared remotely to the other people who are using the app at the same moment, living the same experience. This
            allows the remote user to see the movement of your avatar’s face in real time. This data is used to make a unique user
            experience, this data is never stored remotely, given to third parties, or used for any non-gameplay purposes.
          </p>

          <h4>Consent</h4>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>

          <h3>Marketplace Usage</h3>

          <p>
            By using our Marketplace you are agreeing to use experimental software, please use at your own risk. Tevaera it’s still in
            beta, please be patient regarding eventual glitches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
