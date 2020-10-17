import React from "react";

export function Projects({ children }) {
  return <dl>{children}</dl>;
}

function ProjectLink({
  link,
  blank = false,
  children
}) {
  const linkAttributes = {};
  if (blank) {
    linkAttributes["target"] = "_blank";
    linkAttributes["rel"] = "noopener noreferrer";
  }
  linkAttributes["href"] = link;
  if (link) {
    return (
      <dd>
      <a {...linkAttributes}>
      Visit the Web Page
      </a>
      </dd>
    )
  } else {
    return (
      <>
      </>
    )
  }
}

export function Project({
  title,
  desc,
  github,
  link,
  image,
  blank = false,
  children
}) {
  const githubAttributes = {};
  if (blank) {
    githubAttributes["target"] = "_blank";
    githubAttributes["rel"] = "noopener noreferrer";
  }
  githubAttributes["href"] = github;
  return (
    <>
      <dt>
      Project: {title}
      </dt>
      <dd>
      {desc}
      </dd>
      <dd>
      <a {...githubAttributes}>
      GitHub Repository
      </a>
      </dd>
      <ProjectLink
        link={link}
        blank={blank}
      />
      <dd>
      <img src={image} alt={title} width="300px" /><br />
      </dd>
    </>
  )
}
