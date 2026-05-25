(() => {
  const iconSvgs = {
    compass:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm3.88 6.12L14 14l-5.88 1.88L10 10l5.88-1.88ZM12 12Z'/></svg>",
    puzzle:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M20 13a3 3 0 0 0-3-3h-1V7a2 2 0 0 0-2-2h-3V4a2 2 0 1 0-4 0v1H4a2 2 0 0 0-2 2v3h1a3 3 0 1 1 0 6H2v3a2 2 0 0 0 2 2h3v-1a3 3 0 1 1 6 0v1h3a2 2 0 0 0 2-2v-3h1a3 3 0 0 0 3-3Z'/></svg>",
    rocket:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M14 4.5c-3.86 0-7 3.14-7 7v1.09l-2.3 2.3a1 1 0 0 0-.29.7V19a1 1 0 0 0 1 1h3.41a1 1 0 0 0 .7-.29l2.3-2.3H13c3.86 0 7-3.14 7-7v-1c0-2.49-2.01-4.5-4.5-4.5H14Zm-2 7a2 2 0 1 1 2 2a2 2 0 0 1-2-2Zm-6.5 7.5 2-2 .5 2Z'/></svg>",
    console:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm1.5 4.5 3 3-3 3L7 17l4-4-4-4L5.5 9.5ZM12 16h6v-2h-6v2Z'/></svg>",
    cog:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.06 7.06 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 13.9 2h-3.8a.5.5 0 0 0-.49.42l-.36 2.54c-.58.22-1.12.52-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.56a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.83 14.24a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.5.42 1.05.72 1.63.94l.36 2.54a.5.5 0 0 0 .49.42h3.8a.5.5 0 0 0 .49-.42l.36-2.54c.58-.22 1.12-.52 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 15.5 12A3.5 3.5 0 0 1 12 15.5Z'/></svg>",
    shield:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M12 2 4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3Zm0 10.99 4.24-4.24 1.41 1.41L12 15.82 8.34 12.16l1.41-1.41L12 12.99Z'/></svg>",
    database:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M12 2C7.03 2 3 3.79 3 6v12c0 2.21 4.03 4 9 4s9-1.79 9-4V6c0-2.21-4.03-4-9-4Zm0 2c3.87 0 7 1.34 7 2s-3.13 2-7 2-7-1.34-7-2 3.13-2 7-2Zm0 14c-3.87 0-7-1.34-7-2v-2.09C6.34 14.6 8.98 15 12 15s5.66-.4 7-1.09V16c0 .66-3.13 2-7 2Zm0-6c-3.87 0-7-1.34-7-2V8.91C6.34 9.6 8.98 10 12 10s5.66-.4 7-1.09V10c0 .66-3.13 2-7 2Z'/></svg>",
    chart:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M5 9h3v10H5V9Zm5-4h3v14h-3V5Zm5 7h3v7h-3v-7Z'/></svg>",
    flask:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M6 2h12v2h-1v5.17l3.91 6.78A3 3 0 0 1 18.31 20H5.69a3 3 0 0 1-2.6-4.05L7 9.17V4H6V2Zm3 2v5.65L5.01 17H19l-3.99-7.35V4H9Z'/></svg>",
    help:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M11 18h2v2h-2v-2Zm1-16a7 7 0 0 0-7 7h2a5 5 0 1 1 5 5h-1v3h2v-1.07A7 7 0 0 0 12 2Z'/></svg>",
  };

  const iconByLabel = new Map([
    ["basiliskscan", "compass"],
    ["instalação", "puzzle"],
    ["installation", "puzzle"],
    ["primeiros passos", "rocket"],
    ["getting started", "rocket"],
    ["comandos", "console"],
    ["commands", "console"],
    ["configuração", "cog"],
    ["configuration", "cog"],
    ["fontes de vulnerabilidades", "shield"],
    ["vulnerability sources", "shield"],
    ["banco offline", "database"],
    ["offline database", "database"],
    ["relatórios html", "chart"],
    ["html reports", "chart"],
    ["exemplos de uso", "flask"],
    ["usage examples", "flask"],
    ["faq", "help"],
  ]);

  const iconByPath = [
    { pattern: /^\/(?:en\/)?$/i, icon: "compass" },
    { pattern: /^(?:\/en)?\/instalacao\/?$/i, icon: "puzzle" },
    { pattern: /^(?:\/en)?\/primeiros-passos\/?$/i, icon: "rocket" },
    { pattern: /^(?:\/en)?\/comandos\/?$/i, icon: "console" },
    { pattern: /^(?:\/en)?\/configuracao\/?$/i, icon: "cog" },
    { pattern: /^(?:\/en)?\/fontes-vulnerabilidades\/?$/i, icon: "shield" },
    { pattern: /^(?:\/en)?\/banco-offline\/?$/i, icon: "database" },
    { pattern: /^(?:\/en)?\/relatorios\/?$/i, icon: "chart" },
    { pattern: /^(?:\/en)?\/exemplos-de-uso\/?$/i, icon: "flask" },
    { pattern: /^(?:\/en)?\/faq\/?$/i, icon: "help" },
  ];

  const applyNavIcons = () => {
    const links = document.querySelectorAll(
      ".md-nav--primary .md-nav__link[href]"
    );

    links.forEach((link) => {
      const rawHref = link.getAttribute("href") || "";
      if (link.querySelector(".nav-icon")) return;
      const url = new URL(rawHref, window.location.origin);
      const normalizedPath = url.pathname
        .replace(/index\.html$/i, "")
        .replace(/\.html$/i, "")
        .replace(/\/?index\/?$/i, "/")
        .replace(/\/+/g, "/");

      const label = link.textContent.trim().toLowerCase();
      const iconFromLabel = iconByLabel.get(label);
      const match = iconByPath.find((entry) => entry.pattern.test(normalizedPath));
      const iconKey = iconFromLabel || match?.icon;
      if (!iconKey) return;

      const iconSvg = iconSvgs[iconKey];
      if (!iconSvg) return;

      const wrapper = document.createElement("span");
      wrapper.className = "nav-icon";
      wrapper.setAttribute("aria-hidden", "true");
      wrapper.innerHTML = iconSvg;

      link.insertBefore(wrapper, link.firstChild);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyNavIcons);
  } else {
    applyNavIcons();
  }

  document.addEventListener("contentUpdated", applyNavIcons);
})();
