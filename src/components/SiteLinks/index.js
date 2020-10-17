import React from "react";
import {
  FaRegEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaRegFilePdf,
  FaHome,
  FaTv
} from "react-icons/fa";

export function SiteLinkTable({ children }) {
  return <table><tbody>{children}</tbody></table>;
}

export function SiteLinkRow({
  icon,
  section,
  linkType,
  link,
  blank = false,
  children
}) {
  // Per jsx-in-depth React topic, run time type choice requires
  // a capitalized variable rather than the raw prop.
  const Icon = icon;
  const text = children || link;
  const attributes = {};
  if (blank) {
    attributes["target"] = "_blank";
    attributes["rel"] = "noopener noreferrer";
  }
  attributes["href"] = `${linkType}${link}`;
  return (
    <tr>
      <td>
      <Icon />
      </td>
      <td>
      {section}: 
      </td>
      <td>
      <a {...attributes}>
      {text}
      </a>
      </td>
    </tr>
  )
}

export function SiteLinks() {
  return (
    <aside className="flex-container">

      <div className="avatar">
        <img src="./images/JohnLSpetz_avatar.jpg" alt="John L Spetz" />
      </div>

      <address id="right">

        <h2>
        Contact Info
        </h2>

        <SiteLinkTable>

        <SiteLinkRow
          icon={FaRegEnvelope}
          section="Email"
          linkType="mailto:"
          link="JohnLSpetz@zoho.com"
          blank={true}
        />
        <SiteLinkRow
          icon={FaLinkedinIn}
          section="LinkedIn"
          linkType="https://"
          link="www.linkedin.com/in/john-l-spetz/"
          blank={true}
        />
        <SiteLinkRow
          icon={FaGithub}
          section="GitHub"
          linkType="https://"
          link="github.com/johannsp"
          blank={true}
        />
        <SiteLinkRow
          icon={FaRegFilePdf}
          section="Resume"
          linkType="https://"
          link="github.com/johannsp"
          blank={true}
        >Resume as PDF</SiteLinkRow>
        <SiteLinkRow
          icon={FaHome}
          section="Home"
          linkType="/"
          link="home"
          blank={false}
        >Profile Page</SiteLinkRow>
        <SiteLinkRow
          icon={FaTv}
          section="Portfolio"
          linkType="/"
          link="Portfolio"
          blank={false}
        >Recent Projects</SiteLinkRow>

        </SiteLinkTable>

      </address>

    </aside>
  );
}

export default SiteLinks;
