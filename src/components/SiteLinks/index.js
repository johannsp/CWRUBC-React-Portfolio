import React from "react";

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
  const text = children || link;
  const attributes = {};
  if (blank) {
    attributes["target"] = "_blank";
    attributes["rel"] = "noopener noreferrer";
  }
  attributes["href"] = `${linkType}${link}`;
  console.log(attributes);
  return (
    <tr>
      <td>
      <i className={icon}></i>
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
          icon="fa fa-envelope"
          section="Email"
          linkType="mailto:"
          link="JohnLSpetz@zoho.com"
          blank={true}
        />
        <SiteLinkRow
          icon="fa fa-linkedin"
          section="LinkedIn"
          linkType="https://"
          link="www.linkedin.com/in/john-l-spetz/"
          blank={true}
        />
        <SiteLinkRow
          icon="fa fa-github"
          section="GitHub"
          linkType="https://"
          link="github.com/johannsp"
          blank={true}
        />
        <SiteLinkRow
          icon="fa fa-file-pdf-o"
          section="Resume"
          linkType="https://"
          link="github.com/johannsp"
          blank={true}
        >Resume as PDF</SiteLinkRow>
        <SiteLinkRow
          icon="fa fa-home"
          section="Home"
          linkType="/"
          link="home"
          blank={false}
        >Profile Page</SiteLinkRow>
        <SiteLinkRow
          icon="fa fa-television"
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
