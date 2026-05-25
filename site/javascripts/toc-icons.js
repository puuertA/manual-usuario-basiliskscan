(() => {
  const applyTocIcons = () => {
    const tocLinks = document.querySelectorAll(
      ".md-sidebar--secondary .md-nav__link[href^='#']"
    );
    if (!tocLinks.length) return;

    const headings = Array.from(
      document.querySelectorAll(
        ".md-typeset h1[id], .md-typeset h2[id], .md-typeset h3[id], .md-typeset h4[id], .md-typeset h5[id], .md-typeset h6[id]"
      )
    );

    const headingById = new Map(
      headings.map((heading) => [heading.id, heading])
    );

    tocLinks.forEach((link) => {
      const hash = link.getAttribute("href");
      if (!hash) return;

      const targetId = hash.replace("#", "");
      const heading = headingById.get(targetId);
      if (!heading) return;

      const icon = heading.querySelector(".twemoji, .emoji, svg");
      if (!icon) return;

      if (link.querySelector(".toc-icon")) return;

      const iconClone = icon.cloneNode(true);
      const wrapper = document.createElement("span");
      wrapper.className = "toc-icon";
      wrapper.setAttribute("aria-hidden", "true");
      wrapper.appendChild(iconClone);

      link.insertBefore(wrapper, link.firstChild);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyTocIcons);
  } else {
    applyTocIcons();
  }

  document.addEventListener("contentUpdated", applyTocIcons);
})();
