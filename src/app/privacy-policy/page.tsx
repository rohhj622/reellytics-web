export default async function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-8">Privacy Policy</h1>

      <h2 className="text-2xl font-semibold mt-4">Article 1 (Purpose of Personal Information Collection and Use)</h2>
      <p className="mt-2 text-lg">
        ONE N SIX (hereinafter referred to as "the Company") collects and uses personal information within the following scope to provide seamless services to users:
      </p>
      <ul className="mt-2 list-disc pl-6 text-lg">
        <li>User authentication and service provision</li>
        <li>Responding to customer inquiries</li>
        <li>Compliance with laws and terms of service</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Article 2 (Collected Personal Information and Collection Methods)</h2>
      <h3 className="text-xl font-semibold mt-4">Collected Personal Information</h3>
      <p className="mt-2 text-lg">
        <strong>(Required)</strong> Information provided through SSO login: Email (using Google login)
      </p>

      <h3 className="text-xl font-semibold mt-4">Methods of Collecting Personal Information</h3>
      <p className="mt-2 text-lg">
        Automatically collected through Google SSO (Single Sign-On) login integration
      </p>

      <h2 className="text-2xl font-semibold mt-8">Article 3 (Retention and Use Period of Personal Information)</h2>
      <p className="mt-2 text-lg">
        The Company, in principle, promptly deletes personal information once the purpose of collection and use is achieved. However, if retention is required under relevant laws, the information will be stored for the legally mandated period and then deleted.
      </p>
      <ul className="mt-2 list-disc pl-6 text-lg">
        <li>Login records: 3 months (Communications Privacy Protection Act)</li>
        <li>Under GDPR: Immediate deletion upon user request</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Article 4 (Provision and Entrustment of Personal Information to Third Parties)</h2>
      <p className="mt-2 text-lg">
        The Company does not provide users’ personal information to external parties.
      </p>
      <p className="mt-2 text-lg">
        Some service operations may be outsourced, and in such cases, the Company ensures that personal information is securely managed in compliance with privacy laws, including GDPR and CCPA.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Article 5 (Overseas Data Transfer)</h2>
      <p className="mt-2 text-lg">
        The Company stores users’ personal information on servers located in South Korea and applies appropriate protection measures in accordance with the legal requirements of specific countries. For users within the European Union (EU), adequate safeguards (such as SCCs, BCRs) are provided in compliance with GDPR.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Article 6 (User Rights and How to Exercise Them)</h2>
      <p className="mt-2 text-lg">
        Users can access, correct, delete, or request the suspension of their personal information processing at any time.
      </p>
      <p className="mt-2 text-lg">
        Under GDPR, users have the right to data portability (request for data transfer to another service) and the right to be forgotten (request for deletion).
      </p>
      <p className="mt-2 text-lg">
        Under CCPA, users can request disclosure of personal information and opt out of the sale of their data.
      </p>
      <p className="mt-2 text-lg">
        Users can contact customer support for inquiries regarding personal information, and the Company will promptly take action.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Article 7 (Protection and Management of Personal Information)</h2>
      <p className="mt-2 text-lg">
        The Company takes the following measures to securely protect personal information:
      </p>
      <ul className="mt-2 list-disc pl-6 text-lg">
        <li>Encryption and restricted access to personal information</li>
        <li>Operation of security systems to prevent hacking and viruses</li>
        <li>Minimization of personnel handling personal information and conducting regular training</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Article 8 (Personal Information Protection Officer and Contact Information)</h2>
      <p className="mt-2 text-lg">
        The Company has designated the following personal information protection officer to safeguard users' personal information:
      </p>
      <p className="mt-2 text-lg">
        <strong>Personal Information Protection Officer:</strong> Hyunjin Roh
      </p>
      <p className="mt-2 text-lg">
        <strong>Contact:</strong> onensix23@gmail.com
      </p>

      <p className="mt-8 text-lg">
        This Privacy Policy is effective from January 30, 2025.
      </p>
    </div>
  );
};
