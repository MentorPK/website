import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-secondary w-full ">
      <Header />
      <Container>
        <div className="my-12 mx-2">
          <div className="text-4xl text-primary font-bold my-4">
            Privacy Policy
          </div>
          <div>
            The protection of your personal data is very important to us. We
            therefore process your data solely based on the applicable Legal
            provisions: EU General Data Protection Regulation (GDPR), Austrian
            Telecommunications Act (Telekommunikationsgesetz, TKG) . In this
            data protection information, we inform you about the aspects of data
            processing in the context of our activities. The use of our website
            is usually possible without providing personal data. If you enter
            personal data, e.g. for the purpose of contacting us. We will pass
            on the necessary information to companies that process data on our
            behalf. We only commission companies that are subject to the GDPR.
          </div>
          <div className="my-6 text-2xl">Owner</div>
          <div>
            <ul className="my-4">
              <li className="font-semibold">webpaw solutions e.U.</li>
              <li>Pawel Kowalski</li>
              <li>Gaswerkstraße 12/3/1</li>
              <li>1210 Vienna</li>
              <li>Austria</li>
              <br />
              <li>
                <span className="font-semibold">Email: </span>
                <a className="link text-primary" href="pawel@web-paw.com">
                  pawel@web-paw.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Legal Notice: </span>
                <a className="link text-primary" href="/legal-notice">
                  https://web-paw.com/legal-notice
                </a>
              </li>
            </ul>
          </div>
          <div className="my-6 text-2xl">Data transfer to third countries</div>
          <div>
            The transfer of your personal data to third countries will only be
            carried out in compliance with the applicable data protection laws
            and regulations, including the General Data Protection Regulation
            (GDPR). We will ensure that we have a valid legal basis for such
            transfers, which may include obtaining your explicit consent,
            entering into standard contractual clauses with the receiving party,
            or relying on other lawful transfer mechanisms as permitted by the
            relevant data protection authorities.
          </div>
          <br />
          <div>
            As an Austrian company, we may need to transfer your personal data
            to third countries for various purposes, such as providing you with
            our products or services, improving our offerings, or complying with
            legal obligations. When transferring your data to third countries,
            we take appropriate measures to ensure that your personal
            information is adequately protected in accordance with applicable
            data protection laws.
          </div>
          <br />
          <div>
            While we take every effort to secure your data on our website,
            please note that according to European Court of Justice, we cannot
            guarantee the security of information transmitted to third
            countries.
          </div>
          <div className="my-6 text-2xl">TLS encryption & HTTPS</div>
          <div>
            We use TLS encryption to protect the communication between your
            browser and our website's servers. TLS is a cryptographic protocol
            that ensures the secure transmission of data over the internet. When
            you visit our website and interact with any forms or input fields,
            the information you enter is encrypted before it is transmitted.
            This encryption helps prevent unauthorized interception and ensures
            that your data remains confidential during transmission.
          </div>
          <br />
          <div>
            Our website employs HTTPS, which is the secure version of the
            standard HTTP protocol. When you access our website through your web
            browser, you will notice that the URL starts with "https://" instead
            of "http://." The 's' in "https://" indicates that the connection is
            secure and encrypted. By using HTTPS, we ensure that all data
            exchanged between your browser and our website remains encrypted and
            protected.
          </div>
          <div className="my-6 text-2xl">Hosting</div>
          <div>
            Hosting is an essential aspect of running a website, and it serves
            as the foundation for making your website accessible to users on the
            internet. When you create a website, all the files, images, videos,
            and other content associated with it need to be stored somewhere,
            and this is where hosting comes into play.
          </div>
          <div>
            <div>Here's why hosting is necessary for your website:</div>
            <ul>
              <li>
                Storage of Website Files: Hosting provides the storage space
                required to keep all the files and data that make up your
                website. This includes HTML files, images, videos, CSS
                stylesheets, and any other content that your website displays to
                visitors.
              </li>
              <li>
                Accessibility to Users: Without hosting, your website would only
                exist on your local computer, and others wouldn't be able to
                access it online. Hosting allows your website to be available to
                anyone with an internet connection worldwide, making it
                accessible to a global audience.
              </li>
              <li>
                Website Performance: A reliable hosting service ensures that
                your website operates smoothly and loads quickly for visitors.
                Good hosting providers offer robust servers and technical
                infrastructure, which contributes to a positive user experience.
              </li>
              <li>
                Data Security and Backups: Reputable hosting services implement
                security measures to protect your website from potential threats
                like hacking and malware. They also offer regular backups to
                safeguard your data in case of any unexpected issues.
              </li>
              <li>
                Domain Connection: Hosting allows you to connect your website to
                a unique domain name (e.g., www.yourwebsite.com). This domain
                name serves as the address through which users can access your
                website.
              </li>
              <li>
                Technical Support: Hosting providers typically offer technical
                support to assist you with any issues related to your website
                and hosting account.
              </li>
            </ul>
          </div>
          <div className="my-6 text-2xl">Contact</div>
          <div>
            When you get in touch with us through the contact form, email, or
            any other communication method, we will retain the provided data for
            one year to address your inquiries and prepare for any subsequent
            discussions. If a contract is established, we will adhere to the
            statutory retention periods. Rest assured that we will not disclose
            this data without obtaining your consent. The data processing is
            conducted in accordance with § 6 Article 1b (contract) and/or § 6
            Article 1a (consent) of GDPR.
          </div>
          <div className="my-6 text-2xl">Services in use</div>
          <div>
            Hosting: <div>Netlify (Netlify Inc)</div>
            <div>44 Montgomery Street, Suite 300 San Francisco, CA, USA</div>
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noreferrer"
              className="link text-primary"
            >
              Privacy Policy
            </a>
          </div>
          <br />
          <div>
            Email Forwarding: <div>Resend (Plus Five Five, Inc.)</div>
            <div>2261 Market Street #5039 San Francisco, CA 94114, USA</div>
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="link text-primary"
            >
              Privacy Policy
            </a>
            <div>
              Resend provides an Application Programming Interface (API) that is
              connected to the contact form and forwards all entered data to our
              contact mail.
            </div>
          </div>
          <br />
          <div>
            Mail Hosting: <div>Google Workplace (Google Ireland Limited)</div>
            <div>Gordon House, Barrow Street Dublin 4 Ireland</div>
            <a
              href="https://policies.google.com/privacy?hl=en"
              target="_blank"
              rel="noreferrer"
              className="link text-primary"
            >
              Privacy Policy
            </a>
            <div>
              We utilize Google Workspace's email services to store data
              associated with our website, including emails and other
              communication data sent via our contact forms. Google Workspace
              ensures secure and efficient data storage and management.
            </div>
          </div>
          <div className="my-6 text-2xl">Your rights</div>
          <div>
            You have the right to request information about stored data and to
            have data corrected, or deleted. You may restrict the usage of data
            and may have it transferred to other parties. You have the right to
            revoke any given consent. Please send any request to the email
            address pawel@web-paw.com. If you believe that the processing of
            your data violates data protection law or that your data protection
            claims have otherwise been violated, you may file a complaint with
            the supervisory authority. In Austria, that would be the
            “Datenschutzbehörde”{' '}
            <a
              href="https://www.dsb.gv.at"
              target="_blank"
              rel="noreferrer"
              className="link text-primary"
            >
              https://www.dsb.gv.at
            </a>
            .
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;
