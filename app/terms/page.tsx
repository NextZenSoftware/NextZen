import { Section } from "@/components/layout/Section"

export const metadata = {
  title: "Terms & Conditions - NextzenSoftware",
  description: "NextzenSoftware Terms of Service.",
}

export default function TermsPage() {
  return (
    <Section className="prose dark:prose-invert max-w-4xl mx-auto">
      <h1>Terms & Conditions</h1>
      <p className="lead">Last updated: December 14, 2025</p>

      <h2>1. Agreement to Terms</h2>
      <p>
        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and NextzenSoftware (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
      </p>

      <h2>2. Intellectual Property Rights</h2>
      <p>
        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
      </p>

      <h2>3. User Representations</h2>
      <p>
        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside.
      </p>

      <h2>4. Prohibited Activities</h2>
      <p>
        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
      </p>

      <h2>5. Governing Law</h2>
      <p>
        These Terms shall be governed by and defined following the laws of India. NextzenSoftware and yourself irrevocably consent that the courts of Bangalore shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at legal@nextzen.com.
      </p>
    </Section>
  )
}
