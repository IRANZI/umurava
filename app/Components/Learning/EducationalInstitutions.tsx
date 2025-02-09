
import React from 'react';

const EducationalInstitutions: React.FC = () => {
  return (
    <div className="mt-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Join a few Educational Institutions using <br/>Skills Challenges by Umurava</h2>

      {/* Top Row - 6 Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-6">
        <img src="/Tori 1.png" alt="Tori" className="h-16 object-contain" />
        <img src="/Gdg_Kigali 1.png" alt="GGS Kigali" className="h-16 object-contain" />
        <img src="/ed.png" alt="The Education Collaborative" className="h-16 object-contain" />
        <img src="/KeplerLogo 1.png" alt="Kepler" className="h-16 object-contain" />
        <img src="/hill.png" alt="HIIL" className="h-16 object-contain" />
        <img src="/CIBA 1.png" alt="ARED Look inward" className="h-16 object-contain" />
      </div>

      {/* Bottom Row - 6 Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        <img src="/Ared 1.png" alt="IGIHE" className="h-16 object-contain" />
        <img src="/IGIHE_LOGO 1.png" alt="Viamo" className="h-16 object-contain" />
        <img src="/EducationCollaborative 1.png" alt="Kepler" className="h-16 object-contain" />
        <img src="/KeplerLogo 1.png" alt="Laterite" className="h-16 object-contain" />
        <img src="/HiiL_Logo 1.png" alt="Solefrid" className="h-16 object-contain" />
        <img src="/SokoFund 1.png" alt="Logo 12" className="h-16 object-contain" />
      </div>
    </div>
  );
};

export default EducationalInstitutions;