function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (typeof text === "string") {
    element.textContent = text;
  }
  return element;
}

function buildLinks(container, links, className) {
  if (!Array.isArray(links)) {
    return;
  }

  links
    .filter((link) => link && link.label && link.url)
    .forEach((link) => {
      const anchor = createElement("a", className, link.label);
      anchor.href = link.url;

      if (!link.url.startsWith("#") && !link.url.startsWith("mailto:")) {
        anchor.target = "_blank";
        anchor.rel = "noreferrer noopener";
      }

      container.appendChild(anchor);
    });
}

function renderIntro(paragraphs) {
  const wrapper = document.getElementById("intro-paragraphs");
  wrapper.innerHTML = "";

  paragraphs.forEach((paragraph) => {
    const element = createElement("p");
    element.innerHTML = paragraph;
    wrapper.appendChild(element);
  });
}

function renderBullets(targetId, items) {
  const list = document.getElementById(targetId);
  list.innerHTML = "";

  items.forEach((item) => {
    const element = createElement("li");
    element.innerHTML = item;
    list.appendChild(element);
  });
}

function renderWorks(works) {
  const container = document.getElementById("work-list");
  container.innerHTML = "";

  works.forEach((work, index) => {
    const card = createElement("article", "work-card");

    const thumb = createElement("div", "work-thumb");
    if (work.image) {
      const image = createElement("img", "work-thumb__image");
      image.src = work.image;
      image.alt = work.title;
      image.role = "button";
      image.tabIndex = 0;
      image.dataset.fullImage = work.image;
      thumb.appendChild(image);
    } else {
      thumb.appendChild(
        createElement(
          "div",
          "work-thumb__fallback",
          work.imageLabel || `Paper ${String(index + 1).padStart(2, "0")}`
        )
      );
    }

    const content = createElement("div", "work-content");
    const title = createElement("h3", "work-title");
    const titleLink = createElement("a", "", work.title);
    titleLink.href = work.titleUrl || "#";
    if (work.titleUrl && !work.titleUrl.startsWith("#")) {
      titleLink.target = "_blank";
      titleLink.rel = "noreferrer noopener";
    }
    title.appendChild(titleLink);

    const authors = createElement("p", "work-authors");
    if (work.authorsHtml) {
      authors.innerHTML = work.authorsHtml;
    } else {
      authors.textContent = work.authors || "";
    }

    const meta = createElement("div", "work-meta");
    const venue = createElement("span", "work-venue", work.venue);
    const links = createElement("div", "work-links");
    const description = createElement("p", "work-description", work.description);

    buildLinks(links, work.links, "");

    content.appendChild(title);
    content.appendChild(authors);
    meta.appendChild(venue);
    if (links.childElementCount > 0) {
      meta.appendChild(links);
    }
    content.appendChild(meta);
    content.appendChild(description);

    card.appendChild(thumb);
    card.appendChild(content);
    container.appendChild(card);
  });
}

function renderInterests(interests) {
  const container = document.getElementById("interest-list");
  container.innerHTML = "";

  interests.forEach((item) => {
    const card = createElement("article", "interest-card");
    card.appendChild(createElement("h3", "", item.title));
    card.appendChild(createElement("p", "", item.description));
    container.appendChild(card);
  });
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeButton = document.getElementById("lightbox-close");

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.classList.contains("work-thumb__image")) {
      lightboxImage.src = target.dataset.fullImage || target.getAttribute("src") || "";
      lightboxImage.alt = target.getAttribute("alt") || "Expanded work preview";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
      return;
    }

    const target = event.target;
    if (
      event.key === "Enter" &&
      target instanceof HTMLElement &&
      target.classList.contains("work-thumb__image")
    ) {
      target.click();
    }
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

function hydrateProfile(profile) {
  document.title = `${profile.name} | Academic Homepage`;
  document.getElementById("eyebrow").textContent = profile.eyebrow;
  document.getElementById("display-name").textContent = profile.name;
  document.getElementById("local-name").textContent = profile.localName;
  document.getElementById("contact-line").textContent = profile.contactLine;

  const image = document.getElementById("profile-photo");
  image.src = profile.photo;
  image.alt = `${profile.name} profile photo`;

  renderIntro(profile.intro);
  renderBullets("focus-areas", profile.focusAreas);

  const linkRow = document.getElementById("profile-links");
  linkRow.innerHTML = "";
  buildLinks(linkRow, profile.links, "link-chip");
}

function hydrateSections(sections) {
  document.getElementById("works-title").textContent = sections.worksTitle;
  document.getElementById("works-note").textContent = sections.worksNote;
  document.getElementById("experience-title").textContent = sections.experienceTitle;
  document.getElementById("interests-title").textContent = sections.interestsTitle;
}

function boot() {
  hydrateProfile(siteData.profile);
  hydrateSections(siteData.sections);
  renderWorks(siteData.works);
  setupLightbox();
  renderBullets("experience-list", siteData.experiences);
  renderInterests(siteData.interests);
}

document.addEventListener("DOMContentLoaded", boot);
