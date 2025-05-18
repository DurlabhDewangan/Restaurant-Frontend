
import LegalHeader from '../components/legal/LegalHeader';
import PrivacyPolicy from '../components/legal/PrivacyPolicy';
import TermsOfService from '../components/legal/TermOfServices';
import CookiePolicy from '../components/legal/CookiePolicy';
import ContactCTA from '../components/legal/ContactCTQ';
 import "../style/common.css"

const LegalPage = () => {
  return (
    <div className="legal-page">
      
      <LegalHeader />
      <PrivacyPolicy />
    <TermsOfService/>
      <CookiePolicy />
      <ContactCTA />

    </div>
  );
};

export default LegalPage;