var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// src/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react2 = require("@remix-run/react"), import_react3 = require("@emotion/react"), import_server = require("react-dom/server"), import_create_instance = __toESM(require("@emotion/server/create-instance"));

// src/styles/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(
  null
);

// src/styles/createEmotionCache.tsx
var import_cache = __toESM(require("@emotion/cache")), createEmotionCache = () => (0, import_cache.default)({ key: "css" });

// src/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "src/entry.server.tsx",
          lineNumber: 23,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "src/entry.server.tsx",
        lineNumber: 22,
        columnNumber: 4
      }, this)
    }, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 3
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: chunks.styles,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "src/entry.server.tsx",
          lineNumber: 33,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "src/entry.server.tsx",
        lineNumber: 32,
        columnNumber: 4
      }, this)
    }, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 3
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// src/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("react"), import_react5 = require("@emotion/react");

// src/styles/theme/index.js
var import_theme_ui = require("theme-ui"), import_presets = require("@theme-ui/presets");

// src/styles/theme/styles/cards.js
var cards = {
  padding: 24,
  display: "flex",
  borderRadius: 20,
  border: "2px solid",
  alignItems: "center",
  justifyContent: "center",
  large: {
    height: 255,
    maxWidth: 366,
    p: {
      textAlign: "center",
      fontSize: "0.8125rem"
    },
    header: {
      mb: 2,
      color: "gs800",
      fontSize: "1.5rem",
      fontWeight: "bold",
      textAlign: "start"
    },
    footer: {
      display: "flex",
      justifyContent: "space-between"
    },
    content: {
      height: 207,
      maxWidth: 314,
      color: "gs700",
      display: "flex",
      overflow: "hidden",
      flexDirection: "column",
      justifyContent: "space-evenly"
    }
  },
  small: {
    maxWidth: 366,
    content: {
      textAlign: "start",
      width: 318,
      overflow: "hidden"
    },
    footer: {
      mt: "0.5rem"
    }
  }
};

// src/styles/theme/styles/colors.ts
var colors = {
  primary: {
    100: "#C29191",
    200: "#B87E7E",
    300: "#AD6C6C",
    500: "#994747",
    400: "#A35959",
    600: "#8A4040",
    700: "#7A3939",
    800: "#6B3232",
    900: "#5C2B2B"
  },
  secondary: {
    100: "#e3bdb2",
    200: "#dfb2a5",
    300: "#daa799",
    500: "#D1917F",
    400: "#d69c8c",
    600: "#bc8372",
    700: "#a77466",
    800: "#926659",
    900: "#7d574c"
  },
  tertiary: {
    100: "#a6adb0",
    200: "#979fa3",
    300: "#E1D5DD",
    400: "#798489",
    500: "#6A767C",
    600: "#5f6a70",
    700: "#555e63",
    800: "#4a5357",
    900: "#40474a"
  },
  grayscale: {
    100: "#F8F8F8",
    200: "#EBEBEB",
    300: "#DEDEDE",
    400: "#D1D1D1",
    500: "#BDBDBD",
    600: "#848484",
    700: "#5F5F5F",
    800: "#393939",
    900: "#131313"
  }
};

// src/styles/theme/styles/styles.js
var styles = {
  root: {
    color: "GS800",
    fontSize: "16px",
    boxSizing: "border-box",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeLegibility",
    a: { textDecoration: "none" }
  }
};

// src/styles/theme/styles/layout.js
var layout = {
  header: {
    my: 24,
    px: 24,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    fontFamily: "head",
    fontWeight: "bold",
    a: {
      fontSize: [14, 18],
      color: "HeaderText",
      ":hover": { color: "P300", textDecoration: "none" }
    }
  },
  footer: {
    py: 20,
    px: 24,
    fontSize: 10,
    color: "gs100",
    display: "block",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "red"
  },
  hero: {
    gap: 16,
    gridColumn: "1/-1",
    alignItems: "center",
    flexDirection: "column",
    h2: { fontSize: [40, 50] },
    h4: { fontSize: [18, 24], fontWeight: "regular" },
    h5: { fontSize: [18, 24], fontWeight: "regular", margin: 0 }
  },
  card: {
    margin: 24,
    padding: 24,
    borderRadius: 24,
    backgroundColor: "BackgroundColorCard",
    p: {
      fontWeight: "bold",
      span: {
        color: "P900"
      }
    },
    featured: {
      margin: 24,
      padding: 24,
      borderRadius: 24,
      backgroundColor: "BackgroundColorCardFeatured",
      p: {
        fontWeight: "bold",
        span: {
          color: "P900"
        }
      }
    }
  },
  button: {
    outline: {
      py: "8px",
      px: [48, 64],
      borderRadius: 8,
      border: "2px solid",
      borderColor: "P900",
      color: "P900",
      fontWeight: "bold",
      ":hover": { color: "primary", borderColor: "primary" }
    }
  },
  badge: {
    py: "8px",
    px: "16px",
    gap: "8px",
    borderRadius: 24,
    alignItems: "center",
    i: { fontSize: "12px" },
    p: {
      fontSize: "10px",
      fontWeight: "bold",
      span: { color: "P900" }
    },
    a: {
      color: "P900",
      fontSize: "10px",
      fontWeight: "bold",
      ":hover": { textDecoration: "none" }
    }
  },
  main: {
    position: "relative"
  },
  container: {
    padding: 4,
    maxWidth: "5xl"
  }
};

// src/styles/theme/styles/buttons.js
var buttons = {
  toggle: {
    p: "0",
    m: "0",
    color: "HeaderText",
    border: "none",
    fontSize: "40px",
    cursor: "pointer",
    background: "none",
    ":hover": { color: "P300" },
    ":focus": { border: "none" }
  },
  outline: {
    py: "8px",
    px: [48, 64],
    color: "P900",
    borderRadius: 8,
    fontWeight: "bold",
    border: "2px solid",
    borderColor: "P900"
  }
};

// src/styles/theme/styles/fonts.js
var fonts = {
  head: "Noto Sans HK",
  body: "Manrope"
}, fontSizes = [
  "0.62rem",
  "0.75rem",
  "0.87rem",
  "1.00rem",
  "1.12rem",
  "1.25rem",
  "1.50rem",
  "1.87rem",
  "2.34rem",
  "2.93rem",
  "3.66rem",
  "4.57rem"
], fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  bold: 700
}, lineHeights = {
  body: "160%"
};

// src/styles/theme/index.js
var DarkModeColors = {
  faztweb: "#0E0E0E",
  kentcdodds: "#1F2028"
}, theme_default = (0, import_theme_ui.merge)(import_presets.tailwind, {
  config: {
    initialColorModeName: "light"
  },
  colors: {
    primary: colors.primary[500],
    P100: colors.primary[100],
    P200: colors.primary[200],
    P300: colors.primary[300],
    P400: colors.primary[400],
    P600: colors.primary[600],
    P700: colors.primary[700],
    P800: colors.primary[800],
    P900: colors.primary[900],
    secondary: colors.secondary[500],
    S100: colors.secondary[100],
    S200: colors.secondary[200],
    S300: colors.secondary[300],
    S400: colors.secondary[400],
    S600: colors.secondary[600],
    S700: colors.secondary[700],
    S800: colors.secondary[800],
    S900: colors.secondary[900],
    tertiary: colors.tertiary[500],
    T100: colors.tertiary[100],
    T200: colors.tertiary[200],
    T300: colors.tertiary[300],
    T400: colors.tertiary[400],
    T600: colors.tertiary[600],
    T700: colors.tertiary[700],
    T800: colors.tertiary[800],
    T900: colors.tertiary[900],
    grayscale: colors.grayscale[500],
    GS100: colors.grayscale[100],
    GS200: colors.grayscale[200],
    GS300: colors.grayscale[300],
    GS400: colors.grayscale[400],
    GS600: colors.grayscale[600],
    GS700: colors.grayscale[700],
    GS800: colors.grayscale[800],
    GS900: colors.grayscale[900],
    alert: "#BE342D",
    warning: "#F2C94C",
    success: "#3CB96E",
    bg: "#FCFCFC",
    light: "#E4DAFF",
    bgCard: "#FCFCFC",
    bgInput: "#EFF0F6",
    figmaTitle: "#6E7191",
    strokeButton: "#D9DBE9",
    shadowFigma: "rgba(0,0,0,.8)",
    PGradient: "linear-gradient(96.38deg, #994747 34.72%, #40474A 83.72%)",
    sgradient: "linear-gradient(180deg, #D1917F 0%, #F2C94C 100%)",
    tgradient: "linear-gradient(230.96deg, #3CB96E 15.34%, #979FA3 72.39%)",
    HeaderText: colors.primary[700],
    BackgroundColorCardFeatured: "#FCFCFC",
    BackgroundColorCard: colors.grayscale[100],
    modes: {
      altamira: {
        background: DarkModeColors.kentcdodds
      },
      dark: {
        HeaderText: colors.grayscale[100],
        background: DarkModeColors.faztweb,
        BackgroundColorCard: colors.grayscale[100]
      }
    }
  },
  fontSizes,
  styles,
  fonts,
  fontWeights,
  lineHeights,
  cards,
  layout,
  buttons
});

// src/root.tsx
var import_theme_ui2 = require("theme-ui");
var import_react6 = require("@remix-run/react");

// src/styles/index.ts
var stylesheet = {
  reset: {
    rel: "stylesheet",
    href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css"
  },
  icons: {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
  },
  fonts: {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;700&family=Noto+Sans+HK:wght@100;300;400;700&display=swap"
  }
};

// src/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [
  stylesheet.reset,
  stylesheet.fonts,
  stylesheet.icons
], meta = () => ({
  charset: "utf-8",
  title: "Gaboland - Solution Maker",
  viewport: "width=device-width,initial-scale=1"
}), Document = (0, import_react5.withEmotionCache)(
  ({ children }, _emotionCache) => {
    let serverStyleData = (0, import_react4.useContext)(ServerStyleContext), clientStyleData = (0, import_react4.useContext)(ClientStyleContext), resetClientStyleData = (clientStyleData == null ? void 0 : clientStyleData.reset) || function() {
    };
    return (0, import_react4.useEffect)(() => {
      resetClientStyleData();
    }, [resetClientStyleData]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
              fileName: "src/root.tsx",
              lineNumber: 53,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Links, {}, void 0, !1, {
              fileName: "src/root.tsx",
              lineNumber: 54,
              columnNumber: 6
            }, this),
            serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
              "data-emotion": `${key} ${ids.join(" ")}`,
              dangerouslySetInnerHTML: { __html: css }
            }, key, !1, {
              fileName: "src/root.tsx",
              lineNumber: 56,
              columnNumber: 7
            }, this))
          ]
        }, void 0, !0, {
          fileName: "src/root.tsx",
          lineNumber: 52,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.ScrollRestoration, {}, void 0, !1, {
              fileName: "src/root.tsx",
              lineNumber: 66,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
              fileName: "src/root.tsx",
              lineNumber: 67,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
              fileName: "src/root.tsx",
              lineNumber: 68,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "src/root.tsx",
          lineNumber: 64,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 51,
      columnNumber: 4
    }, this);
  }
);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui2.ThemeProvider, {
      theme: theme_default,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 79,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 78,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 77,
    columnNumber: 3
  }, this);
}

// src/routes/projects/projects.ts
var projects_exports = {};
__export(projects_exports, {
  projects: () => projects
});
var projects = [
  {
    slug: "gaboland",
    title: "Gaboland",
    preview: "https://gabo.land",
    description: "Personal website or a simple portfolio",
    markdown: `### This is the [page] of Projects
		# This is so amazing`
  }
];

// src/routes/projects/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => ProjectSlug,
  loader: () => loader
});
var import_node = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_marked = require("marked"), import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.slug, "params.slug is required");
  let project = projects.find((project2) => project2.slug === params.slug);
  (0, import_tiny_invariant.default)(project, `Post not found: ${params.slug}`);
  let html = (0, import_marked.marked)(project.markdown);
  return (0, import_node.json)({ project, html });
};
function ProjectSlug() {
  let { project, html } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "mx-auto max-w-4xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "my-6 border-b-2 text-center text-3xl",
        children: project.title
      }, void 0, !1, {
        fileName: "src/routes/projects/$slug.tsx",
        lineNumber: 42,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        dangerouslySetInnerHTML: { __html: html }
      }, void 0, !1, {
        fileName: "src/routes/projects/$slug.tsx",
        lineNumber: 43,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/routes/projects/$slug.tsx",
    lineNumber: 41,
    columnNumber: 3
  }, this);
}

// src/routes/projects/index.tsx
var projects_exports2 = {};
__export(projects_exports2, {
  default: () => Projects
});
var import_react9 = require("@remix-run/react");

// src/components/header/index.tsx
var import_theme_ui7 = require("theme-ui");

// src/components/nav/index.tsx
var import_theme_ui4 = require("theme-ui"), import_react8 = require("@remix-run/react");

// src/components/links/index.tsx
var import_theme_ui3 = require("theme-ui"), Link = import_theme_ui3.Link, links_default = Link;

// src/config/index.ts
var navLinks = [
  {
    title: "Gaboland",
    slug: "/"
  },
  {
    title: "About",
    slug: "about"
  },
  {
    title: "Posts",
    slug: "posts"
  }
], defaultLinks = {
  default: [{ title: "Home", slug: "/" }],
  main: navLinks
};

// src/components/nav/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function NavLinks({ links: links2 }) {
  let linksToRender = links2 ?? defaultLinks.default;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui4.Flex, {
    as: "nav",
    "aria-label": "Primary Navigation",
    sx: { gap: ["12px", "24px"] },
    children: linksToRender.length !== 0 && linksToRender.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(links_default, {
      as: import_react8.Link,
      to: n.slug,
      children: n.title
    }, n.slug, !1, {
      fileName: "src/components/nav/index.tsx",
      lineNumber: 18,
      columnNumber: 6
    }, this))
  }, void 0, !1, {
    fileName: "src/components/nav/index.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

// src/components/buttons/burguer-menu.tsx
var import_theme_ui5 = require("theme-ui"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), BurguerMenu = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui5.Button, {
  as: "button",
  variant: "buttons.toggle",
  onClick: () => console.log("Booyah!"),
  "aria-label": "Toggle menu",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
    className: "bi bi-list"
  }, void 0, !1, {
    fileName: "src/components/buttons/burguer-menu.tsx",
    lineNumber: 11,
    columnNumber: 4
  }, this)
}, void 0, !1, {
  fileName: "src/components/buttons/burguer-menu.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this), burguer_menu_default = BurguerMenu;

// src/components/buttons/theme-changer-button.jsx
var import_theme_ui6 = require("theme-ui"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ThemeChangerButton = () => {
  let [colorMode, setColorMode] = (0, import_theme_ui6.useColorMode)(), isDark = colorMode === "dark";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui6.Button, {
    as: "button",
    variant: "buttons.toggle",
    onClick: (_e) => {
      setColorMode(isDark ? "light" : "dark");
    },
    "aria-label": "Toggle dark mode",
    children: isDark ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
      className: "bi bi-brightness-high"
    }, void 0, !1, {
      fileName: "src/components/buttons/theme-changer-button.jsx",
      lineNumber: 17,
      columnNumber: 5
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
      className: "bi bi-moon-stars"
    }, void 0, !1, {
      fileName: "src/components/buttons/theme-changer-button.jsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  }, void 0, !1, {
    fileName: "src/components/buttons/theme-changer-button.jsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}, theme_changer_button_default = ThemeChangerButton;

// src/components/header/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Header = ({ links: links2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui7.Flex, {
  as: "header",
  variant: "layout.header",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui7.Flex, {
      sx: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLinks, {
        links: links2
      }, void 0, !1, {
        fileName: "src/components/header/index.tsx",
        lineNumber: 22,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "src/components/header/index.tsx",
      lineNumber: 15,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui7.Flex, {
      sx: { gap: "12px" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(theme_changer_button_default, {}, void 0, !1, {
          fileName: "src/components/header/index.tsx",
          lineNumber: 25,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(burguer_menu_default, {}, void 0, !1, {
          fileName: "src/components/header/index.tsx",
          lineNumber: 26,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "src/components/header/index.tsx",
      lineNumber: 24,
      columnNumber: 4
    }, this)
  ]
}, void 0, !0, {
  fileName: "src/components/header/index.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this), header_default = Header;

// src/routes/projects/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Projects() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "src/routes/projects/index.tsx",
        lineNumber: 9,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Posts"
      }, void 0, !1, {
        fileName: "src/routes/projects/index.tsx",
        lineNumber: 10,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Link, {
              to: "admin",
              className: "text-red-600 underline",
              children: "Admin"
            }, void 0, !1, {
              fileName: "src/routes/projects/index.tsx",
              lineNumber: 14,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "src/routes/projects/index.tsx",
            lineNumber: 13,
            columnNumber: 5
          }, this),
          projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Link, {
              to: project.slug,
              className: "text-blue-600 underline",
              children: project.title
            }, void 0, !1, {
              fileName: "src/routes/projects/index.tsx",
              lineNumber: 20,
              columnNumber: 7
            }, this)
          }, project.slug, !1, {
            fileName: "src/routes/projects/index.tsx",
            lineNumber: 19,
            columnNumber: 6
          }, this))
        ]
      }, void 0, !0, {
        fileName: "src/routes/projects/index.tsx",
        lineNumber: 12,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/routes/projects/index.tsx",
    lineNumber: 8,
    columnNumber: 3
  }, this);
}

// src/routes/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "src/routes/about/index.tsx",
        lineNumber: 5,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "About"
      }, void 0, !1, {
        fileName: "src/routes/about/index.tsx",
        lineNumber: 6,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/routes/about/index.tsx",
    lineNumber: 4,
    columnNumber: 3
  }, this);
}

// src/routes/posts/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => PostSlug,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_marked2 = require("marked"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// src/models/posts.server.ts
var posts = [
  {
    slug: "my-first-post",
    title: "My First Post",
    markdown: "### This is amazing"
  },
  {
    slug: "90s-mixtape",
    title: "A Mixtape I Made Just For You",
    markdown: "This is amazing"
  }
];
async function getPosts() {
  return posts;
}
async function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}
async function createPost(post) {
  return posts.push(post);
}

// src/routes/posts/$slug.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.slug, "params.slug is required");
  let post = await getPost(params.slug);
  (0, import_tiny_invariant2.default)(post, `Post not found: ${params.slug}`);
  let html = (0, import_marked2.marked)(post.markdown);
  return (0, import_node2.json)({ post, html });
};
function PostSlug() {
  let { post, html } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "mx-auto max-w-4xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "my-6 border-b-2 text-center text-3xl",
        children: post.title
      }, void 0, !1, {
        fileName: "src/routes/posts/$slug.tsx",
        lineNumber: 30,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        dangerouslySetInnerHTML: { __html: html }
      }, void 0, !1, {
        fileName: "src/routes/posts/$slug.tsx",
        lineNumber: 31,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/routes/posts/$slug.tsx",
    lineNumber: 29,
    columnNumber: 3
  }, this);
}

// src/routes/posts/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => PostAdmin,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node"), import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async () => (0, import_node3.json)({ posts: await getPosts() });
function PostAdmin() {
  let { posts: posts3 } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mx-auto max-w-4xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "my-6 mb-2 border-b-2 text-center text-3xl",
        children: "Blog Admin"
      }, void 0, !1, {
        fileName: "src/routes/posts/admin.tsx",
        lineNumber: 19,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid grid-cols-4 gap-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
            className: "col-span-4 md:col-span-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: posts3.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Link, {
                  to: post.slug,
                  className: "text-blue-600 underline",
                  children: post.title
                }, void 0, !1, {
                  fileName: "src/routes/posts/admin.tsx",
                  lineNumber: 25,
                  columnNumber: 9
                }, this)
              }, post.slug, !1, {
                fileName: "src/routes/posts/admin.tsx",
                lineNumber: 24,
                columnNumber: 8
              }, this))
            }, void 0, !1, {
              fileName: "src/routes/posts/admin.tsx",
              lineNumber: 22,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "src/routes/posts/admin.tsx",
            lineNumber: 21,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "col-span-4 md:col-span-3",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
              fileName: "src/routes/posts/admin.tsx",
              lineNumber: 33,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "src/routes/posts/admin.tsx",
            lineNumber: 32,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "src/routes/posts/admin.tsx",
        lineNumber: 20,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/routes/posts/admin.tsx",
    lineNumber: 18,
    columnNumber: 3
  }, this);
}

// src/routes/posts/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => AdminIndex
});
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AdminIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Link, {
      to: "new",
      className: "text-blue-600 underline",
      children: "Create a New Post"
    }, void 0, !1, {
      fileName: "src/routes/posts/admin/index.tsx",
      lineNumber: 7,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "src/routes/posts/admin/index.tsx",
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

// src/routes/posts/admin/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => NewPost
});
var import_node4 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_tiny_invariant3 = __toESM(require("tiny-invariant")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 1e3));
  let formData = await request.formData(), title = formData.get("title"), slug = formData.get("slug"), markdown = formData.get("markdown"), errors = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required"
  };
  return Object.values(errors).some((errorMessage) => errorMessage) ? (0, import_node4.json)(errors) : ((0, import_tiny_invariant3.default)(typeof title == "string", "title must be a string"), (0, import_tiny_invariant3.default)(typeof slug == "string", "slug must be a string"), (0, import_tiny_invariant3.default)(typeof markdown == "string", "markdown must be a string"), await createPost({ title, slug, markdown }), (0, import_node4.redirect)("/posts/admin"));
}, inputClassName = "w-full rounded border border-gray-500 px-2 py-1 text-lg";
function NewPost() {
  let errors = (0, import_react13.useActionData)(), transition = (0, import_react13.useTransition)(), isCreating = Boolean(transition.submission);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Form, {
    method: "post",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
          children: [
            "Post Title:",
            " ",
            errors != null && errors.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
              className: "text-red-600",
              children: errors.title
            }, void 0, !1, {
              fileName: "src/routes/posts/admin/new.tsx",
              lineNumber: 58,
              columnNumber: 7
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "text",
              name: "title",
              className: inputClassName
            }, void 0, !1, {
              fileName: "src/routes/posts/admin/new.tsx",
              lineNumber: 60,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "src/routes/posts/admin/new.tsx",
          lineNumber: 55,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "src/routes/posts/admin/new.tsx",
        lineNumber: 54,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
          children: [
            "Post Slug:",
            " ",
            errors != null && errors.slug ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
              className: "text-red-600",
              children: errors.slug
            }, void 0, !1, {
              fileName: "src/routes/posts/admin/new.tsx",
              lineNumber: 67,
              columnNumber: 7
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "text",
              name: "slug",
              className: inputClassName
            }, void 0, !1, {
              fileName: "src/routes/posts/admin/new.tsx",
              lineNumber: 69,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "src/routes/posts/admin/new.tsx",
          lineNumber: 64,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "src/routes/posts/admin/new.tsx",
        lineNumber: 63,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "markdown",
            children: [
              "Markdown:",
              errors != null && errors.markdown ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                className: "text-red-600",
                children: errors.markdown
              }, void 0, !1, {
                fileName: "src/routes/posts/admin/new.tsx",
                lineNumber: 76,
                columnNumber: 7
              }, this) : null
            ]
          }, void 0, !0, {
            fileName: "src/routes/posts/admin/new.tsx",
            lineNumber: 73,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "src/routes/posts/admin/new.tsx",
            lineNumber: 79,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
            id: "markdown",
            rows: 20,
            name: "markdown",
            className: `${inputClassName} font-mono`
          }, void 0, !1, {
            fileName: "src/routes/posts/admin/new.tsx",
            lineNumber: 80,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "src/routes/posts/admin/new.tsx",
        lineNumber: 72,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-right",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          type: "submit",
          className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
          disabled: isCreating,
          children: isCreating ? "Creating..." : "Create Post"
        }, void 0, !1, {
          fileName: "src/routes/posts/admin/new.tsx",
          lineNumber: 88,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "src/routes/posts/admin/new.tsx",
        lineNumber: 87,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/routes/posts/admin/new.tsx",
    lineNumber: 53,
    columnNumber: 3
  }, this);
}

// src/routes/posts/index.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader4 = async () => (0, import_node5.json)({
  posts: await getPosts()
});
function Posts() {
  let { posts: posts3 } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "src/routes/posts/index.tsx",
        lineNumber: 23,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Posts"
      }, void 0, !1, {
        fileName: "src/routes/posts/index.tsx",
        lineNumber: 24,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.Link, {
              to: "admin",
              className: "text-red-600 underline",
              children: "Admin"
            }, void 0, !1, {
              fileName: "src/routes/posts/index.tsx",
              lineNumber: 28,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "src/routes/posts/index.tsx",
            lineNumber: 27,
            columnNumber: 5
          }, this),
          posts3.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.Link, {
              to: post.slug,
              className: "text-blue-600 underline",
              children: post.title
            }, void 0, !1, {
              fileName: "src/routes/posts/index.tsx",
              lineNumber: 34,
              columnNumber: 7
            }, this)
          }, post.slug, !1, {
            fileName: "src/routes/posts/index.tsx",
            lineNumber: 33,
            columnNumber: 6
          }, this))
        ]
      }, void 0, !0, {
        fileName: "src/routes/posts/index.tsx",
        lineNumber: 26,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/routes/posts/index.tsx",
    lineNumber: 22,
    columnNumber: 3
  }, this);
}

// src/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react16 = require("react"), import_theme_ui17 = require("theme-ui"), import_react17 = require("@remix-run/react");

// src/components/hero/index.tsx
var import_theme_ui8 = require("theme-ui"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Hero = ({ image, name, location, occupation }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui8.Flex, {
  variant: "layout.hero",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui8.Image, {
      as: import_theme_ui8.Image,
      alt: (image == null ? void 0 : image.alt) ?? "Selfie",
      src: (image == null ? void 0 : image.src) ?? "assets/me.jpg",
      sx: {
        width: 200,
        height: 200,
        borderRadius: "50%"
      }
    }, void 0, !1, {
      fileName: "src/components/hero/index.tsx",
      lineNumber: 15,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui8.Box, {
      sx: { textAlign: "center" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          children: name ?? "Jhon Doe"
        }, void 0, !1, {
          fileName: "src/components/hero/index.tsx",
          lineNumber: 26,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
          children: occupation ?? "Web Developer"
        }, void 0, !1, {
          fileName: "src/components/hero/index.tsx",
          lineNumber: 27,
          columnNumber: 5
        }, this),
        location && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
              style: { marginRight: 5 + "px" },
              className: "bi bi-geo-alt-fill"
            }, void 0, !1, {
              fileName: "src/components/hero/index.tsx",
              lineNumber: 30,
              columnNumber: 7
            }, this),
            location
          ]
        }, void 0, !0, {
          fileName: "src/components/hero/index.tsx",
          lineNumber: 29,
          columnNumber: 6
        }, this)
      ]
    }, void 0, !0, {
      fileName: "src/components/hero/index.tsx",
      lineNumber: 25,
      columnNumber: 4
    }, this)
  ]
}, void 0, !0, {
  fileName: "src/components/hero/index.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this), hero_default = Hero;

// src/components/sections/title.tsx
var import_theme_ui9 = require("theme-ui");

// src/utils/index.ts
var getIconClass = (IconProps) => {
  let classFound = Object.entries({
    cpu: "bi bi-cpu-fill",
    laptop: "bi bi-laptop",
    star: "bi bi-star-fill",
    article: "bi bi-newspaper",
    yingyang: "bi bi-yin-yang",
    instagram: "bi bi-instagram",
    laptopFill: "bi bi-laptop-fill"
  }).find(
    (icon) => icon[0] === IconProps ? icon[1] : null
  );
  if (classFound === void 0)
    throw new Error(`"${IconProps}" icon not allowed`);
  return classFound[1];
};

// src/components/sections/title.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SectionTitle = ({ variant, title, icon = "star" }) => {
  let IconBootstrapClass = getIconClass(icon);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui9.Flex, {
    variant: variant || "layout.card",
    sx: {
      gap: "8px",
      color: "P900",
      fontWeight: "bold",
      alignItems: "center"
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
        className: IconBootstrapClass,
        style: { fontSize: "18px" }
      }, void 0, !1, {
        fileName: "src/components/sections/title.tsx",
        lineNumber: 29,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: title
      }, void 0, !1, {
        fileName: "src/components/sections/title.tsx",
        lineNumber: 30,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/components/sections/title.tsx",
    lineNumber: 20,
    columnNumber: 3
  }, this);
}, title_default = SectionTitle;

// src/components/featured/index.tsx
var import_theme_ui14 = require("theme-ui");

// src/components/posts/featured-post.tsx
var import_theme_ui12 = require("theme-ui");

// src/components/badges/index.tsx
var import_theme_ui10 = require("theme-ui");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Badge = ({
  icon = "star",
  title = "Developer",
  variant = "layout.badge",
  hover = { background: "", color: "" },
  color = { background: "P900", font: "GS100" }
}) => {
  let IconBootstrapClass = getIconClass(icon);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui10.Flex, {
    variant,
    sx: {
      color: color.font,
      backgroundColor: color.background,
      ":hover": { backgroundColor: hover.background, color: hover.color }
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
        className: IconBootstrapClass
      }, void 0, !1, {
        fileName: "src/components/badges/index.tsx",
        lineNumber: 31,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: title
      }, void 0, !1, {
        fileName: "src/components/badges/index.tsx",
        lineNumber: 32,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/components/badges/index.tsx",
    lineNumber: 23,
    columnNumber: 3
  }, this);
}, badges_default = Badge;

// src/components/badges/badge-link.tsx
var import_react15 = require("@remix-run/react"), import_theme_ui11 = require("theme-ui");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Badge2 = ({
  href,
  to = "/",
  icon = "star",
  title = "Developer",
  hover = { background: "", color: "" },
  color = { background: "P900", font: "GS100" }
}) => {
  let IconBootstrapClass = getIconClass(icon);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui11.Flex, {
    variant: "layout.badge",
    sx: {
      color: color.font,
      backgroundColor: color.background,
      ":hover": { backgroundColor: hover.background, color: hover.color }
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
        className: IconBootstrapClass
      }, void 0, !1, {
        fileName: "src/components/badges/badge-link.tsx",
        lineNumber: 36,
        columnNumber: 4
      }, this),
      href ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui11.Link, {
        as: "a",
        href,
        target: "_blank",
        sx: { ":hover": { color: hover.color } },
        children: title
      }, void 0, !1, {
        fileName: "src/components/badges/badge-link.tsx",
        lineNumber: 38,
        columnNumber: 5
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(links_default, {
        to,
        as: import_react15.Link,
        sx: { ":hover": { color: hover.color } },
        children: title
      }, void 0, !1, {
        fileName: "src/components/badges/badge-link.tsx",
        lineNumber: 47,
        columnNumber: 5
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/components/badges/badge-link.tsx",
    lineNumber: 28,
    columnNumber: 3
  }, this);
}, badge_link_default = Badge2;

// src/components/posts/featured-post.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), FeaturedPost = ({ title, slug, children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui12.Flex, {
  variant: "layout.card",
  sx: { gap: "16px", flexDirection: "column", backgroundColor: "#FCFCFC" },
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui12.Flex, {
      sx: { justifyContent: "space-between", alignItems: "center" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui12.Paragraph, {
          sx: { fontSize: "12px" },
          children: title
        }, void 0, !1, {
          fileName: "src/components/posts/featured-post.tsx",
          lineNumber: 20,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(badges_default, {
          title: "Tutorial",
          color: { background: "#F7F7F7", font: "P900" }
        }, void 0, !1, {
          fileName: "src/components/posts/featured-post.tsx",
          lineNumber: 21,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "src/components/posts/featured-post.tsx",
      lineNumber: 19,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui12.Paragraph, {
      sx: { fontSize: "12px" },
      children
    }, void 0, !1, {
      fileName: "src/components/posts/featured-post.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui12.Flex, {
      sx: { justifyContent: "flex-end" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(badge_link_default, {
        icon: "article",
        title: "Read Post",
        to: `/posts/${slug}`,
        color: { background: "GS100", font: "P900" },
        hover: { background: "GS100", color: "primary" }
      }, void 0, !1, {
        fileName: "src/components/posts/featured-post.tsx",
        lineNumber: 28,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "src/components/posts/featured-post.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this)
  ]
}, void 0, !0, {
  fileName: "src/components/posts/featured-post.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this), featured_post_default = FeaturedPost;

// src/components/projects/featured-project.tsx
var import_theme_ui13 = require("theme-ui");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), FeaturedProject = ({
  title,
  instagram,
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui13.Flex, {
  variant: "layout.card",
  sx: {
    gap: "16px",
    color: "GS100",
    flexDirection: "column",
    backgroundColor: "primary"
  },
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui13.Flex, {
      sx: { justifyContent: "space-between" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          children: title.toUpperCase()
        }, void 0, !1, {
          fileName: "src/components/projects/featured-project.tsx",
          lineNumber: 27,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(badges_default, {
          title: "Cofounder",
          icon: "yingyang"
        }, void 0, !1, {
          fileName: "src/components/projects/featured-project.tsx",
          lineNumber: 28,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "src/components/projects/featured-project.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui13.Paragraph, {
      sx: { fontSize: "18px" },
      children
    }, void 0, !1, {
      fileName: "src/components/projects/featured-project.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui13.Flex, {
      sx: { justifyContent: "flex-end" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(badge_link_default, {
        icon: "instagram",
        title: "Instagram",
        href: `https://instagram.com/${instagram}`,
        color: { background: "GS100", font: "P900" },
        hover: { background: "GS100", color: "primary" }
      }, void 0, !1, {
        fileName: "src/components/projects/featured-project.tsx",
        lineNumber: 32,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "src/components/projects/featured-project.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this)
  ]
}, void 0, !0, {
  fileName: "src/components/projects/featured-project.tsx",
  lineNumber: 17,
  columnNumber: 3
}, this), featured_project_default = FeaturedProject;

// src/components/featured/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Featured = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui14.Box, {
  sx: { backgroundColor: "#F7F7F7", py: "24px", marginTop: "24px" },
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(title_default, {
      title: "Featured Project",
      variant: "layout.card.featured"
    }, void 0, !1, {
      fileName: "src/components/featured/index.tsx",
      lineNumber: 9,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(featured_project_default, {
      title: "Refribenco",
      instagram: "refribenco",
      children: [
        "Company dedicated to providing refrigeration spare parts and",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          style: { color: "#F2C94C" },
          children: "reliable technical service for refrigerators and air conditioners."
        }, void 0, !1, {
          fileName: "src/components/featured/index.tsx",
          lineNumber: 12,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "src/components/featured/index.tsx",
      lineNumber: 10,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(title_default, {
      title: "Featured Post",
      variant: "layout.card.featured"
    }, void 0, !1, {
      fileName: "src/components/featured/index.tsx",
      lineNumber: 16,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(featured_post_default, {
      title: "Migrate from Gatsby to Remix",
      slug: "admin",
      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit amet, consectetur."
    }, void 0, !1, {
      fileName: "src/components/featured/index.tsx",
      lineNumber: 17,
      columnNumber: 4
    }, this)
  ]
}, void 0, !0, {
  fileName: "src/components/featured/index.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this), featured_default = Featured;

// src/components/projects/index.tsx
var import_theme_ui15 = require("theme-ui");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), projects2 = [
  {
    id: 1,
    title: "Calas Dreamer",
    instagram: "calasdreamer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibusegestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sitamet, consectetur.",
    styles: { color: { background: "P100", font: "GS100" } },
    badge: { title: "Developer", icon: "laptop" }
  },
  {
    id: 2,
    title: "Terapist",
    instagram: "gabrielba15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibusegestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sitamet, consectetur.",
    styles: { color: { background: "P900", font: "GS100" } },
    badge: { title: "Developer", icon: "laptop" }
  }
], Projects2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children: projects2.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui15.Flex, {
    variant: "layout.card",
    sx: {
      gap: "16px",
      flexDirection: "column",
      color: project.styles.color.font,
      backgroundColor: project.styles.color.background
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui15.Flex, {
        sx: { justifyContent: "space-between" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            children: project.title
          }, void 0, !1, {
            fileName: "src/components/projects/index.tsx",
            lineNumber: 41,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(badges_default, {
            title: project.badge.title,
            icon: project.badge.icon,
            color: { background: "#FCFCFC", font: "P900" }
          }, void 0, !1, {
            fileName: "src/components/projects/index.tsx",
            lineNumber: 42,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "src/components/projects/index.tsx",
        lineNumber: 40,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui15.Paragraph, {
        sx: { fontSize: "16px" },
        children: project.description
      }, void 0, !1, {
        fileName: "src/components/projects/index.tsx",
        lineNumber: 48,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui15.Flex, {
        sx: { justifyContent: "flex-end" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(badge_link_default, {
          icon: "instagram",
          title: "Instagram",
          href: `https://instagram.com/${project.instagram}`,
          color: { background: "GS100", font: "P900" },
          hover: { background: "GS100", color: "primary" }
        }, void 0, !1, {
          fileName: "src/components/projects/index.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "src/components/projects/index.tsx",
        lineNumber: 49,
        columnNumber: 6
      }, this)
    ]
  }, project.id, !0, {
    fileName: "src/components/projects/index.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this))
}, void 0, !1, {
  fileName: "src/components/projects/index.tsx",
  lineNumber: 28,
  columnNumber: 3
}, this), projects_default = Projects2;

// src/components/posts/index.tsx
var import_theme_ui16 = require("theme-ui");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), posts2 = [
  {
    id: "1",
    title: "Migrate from Gatsby to Remix",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit amet, consectetur."
  },
  {
    id: "2",
    title: "Migrate from Gatsby to Remix",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit amet, consectetur."
  },
  {
    id: "3",
    title: "Migrate from Gatsby to Remix",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit amet, consectetur."
  }
];
function Posts2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: posts2.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui16.Flex, {
      variant: "layout.card",
      sx: {
        gap: "16px",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui16.Flex, {
          sx: { justifyContent: "space-between", alignItems: "center" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui16.Paragraph, {
              sx: { fontSize: "12px" },
              children: post.title
            }, void 0, !1, {
              fileName: "src/components/posts/index.tsx",
              lineNumber: 41,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(badges_default, {
              title: "Tutorial",
              color: { background: "#FCFCFC", font: "P900" }
            }, void 0, !1, {
              fileName: "src/components/posts/index.tsx",
              lineNumber: 42,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "src/components/posts/index.tsx",
          lineNumber: 40,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui16.Paragraph, {
          sx: { fontSize: "12px" },
          children: post.description
        }, void 0, !1, {
          fileName: "src/components/posts/index.tsx",
          lineNumber: 47,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui16.Flex, {
          sx: { justifyContent: "flex-end" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(badge_link_default, {
            to: "/posts",
            icon: "article",
            title: "Read Post",
            color: { background: "#FCFCFC", font: "P900" },
            hover: { background: "GS100", color: "primary" }
          }, void 0, !1, {
            fileName: "src/components/posts/index.tsx",
            lineNumber: 49,
            columnNumber: 7
          }, this)
        }, void 0, !1, {
          fileName: "src/components/posts/index.tsx",
          lineNumber: 48,
          columnNumber: 6
        }, this)
      ]
    }, post.id, !0, {
      fileName: "src/components/posts/index.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this))
  }, void 0, !1, {
    fileName: "src/components/posts/index.tsx",
    lineNumber: 28,
    columnNumber: 3
  }, this);
}

// src/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(header_default, {
        links: defaultLinks.main
      }, void 0, !1, {
        fileName: "src/routes/index.tsx",
        lineNumber: 27,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hero_default, {
        name: "Gabriel Bencomo",
        occupation: "Web Developer & Solution Maker"
      }, void 0, !1, {
        fileName: "src/routes/index.tsx",
        lineNumber: 28,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui17.Box, {
        variant: "layout.card",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            style: { fontSize: "24px" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "Also, I\u2019m an engineer"
              }, void 0, !1, {
                fileName: "src/routes/index.tsx",
                lineNumber: 34,
                columnNumber: 6
              }, this),
              " who loves to contribute",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "to the growth"
              }, void 0, !1, {
                fileName: "src/routes/index.tsx",
                lineNumber: 35,
                columnNumber: 6
              }, this),
              " and advancement of civilization."
            ]
          }, void 0, !0, {
            fileName: "src/routes/index.tsx",
            lineNumber: 33,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            style: { fontSize: "20px", marginTop: 32 },
            children: [
              "Remember, ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "make solutions and stay away"
              }, void 0, !1, {
                fileName: "src/routes/index.tsx",
                lineNumber: 38,
                columnNumber: 16
              }, this),
              " from problems."
            ]
          }, void 0, !0, {
            fileName: "src/routes/index.tsx",
            lineNumber: 37,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "src/routes/index.tsx",
        lineNumber: 32,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui17.Flex, {
        sx: { justifyContent: "center" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(links_default, {
          as: import_react17.Link,
          to: "/posts",
          variant: "layout.button.outline",
          children: "Blog"
        }, void 0, !1, {
          fileName: "src/routes/index.tsx",
          lineNumber: 42,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "src/routes/index.tsx",
        lineNumber: 41,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(featured_default, {}, void 0, !1, {
        fileName: "src/routes/index.tsx",
        lineNumber: 46,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(title_default, {
        title: "More Posts",
        icon: "article"
      }, void 0, !1, {
        fileName: "src/routes/index.tsx",
        lineNumber: 47,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Posts2, {}, void 0, !1, {
        fileName: "src/routes/index.tsx",
        lineNumber: 48,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(title_default, {
        title: "More Projects",
        icon: "cpu"
      }, void 0, !1, {
        fileName: "src/routes/index.tsx",
        lineNumber: 49,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(projects_default, {}, void 0, !1, {
        fileName: "src/routes/index.tsx",
        lineNumber: 50,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/routes/index.tsx",
    lineNumber: 26,
    columnNumber: 3
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "afb788f6", entry: { module: "/build/entry.client-KPRNR5UQ.js", imports: ["/build/_shared/chunk-J7H33VEG.js", "/build/_shared/chunk-D3OTTJXL.js", "/build/_shared/chunk-E7GW34U2.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CRS7OUEU.js", imports: ["/build/_shared/chunk-W7CCYMKR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about/index": { id: "routes/about/index", parentId: "root", path: "about", index: !0, caseSensitive: void 0, module: "/build/routes/about/index-GQTLUKMB.js", imports: ["/build/_shared/chunk-OTGSHUKN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-M4U3IU3M.js", imports: ["/build/_shared/chunk-OTGSHUKN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/$slug": { id: "routes/posts/$slug", parentId: "root", path: "posts/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/$slug-FYJFQPYN.js", imports: ["/build/_shared/chunk-52C552IL.js", "/build/_shared/chunk-URPXXGPM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/admin": { id: "routes/posts/admin", parentId: "root", path: "posts/admin", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/admin-SWCGDBMP.js", imports: ["/build/_shared/chunk-URPXXGPM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/admin/index": { id: "routes/posts/admin/index", parentId: "routes/posts/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts/admin/index-SK6V6NVO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/admin/new": { id: "routes/posts/admin/new", parentId: "routes/posts/admin", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/admin/new-VRG2I5HB.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/index": { id: "routes/posts/index", parentId: "root", path: "posts", index: !0, caseSensitive: void 0, module: "/build/routes/posts/index-AKUC6Q4O.js", imports: ["/build/_shared/chunk-OTGSHUKN.js", "/build/_shared/chunk-URPXXGPM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/$slug": { id: "routes/projects/$slug", parentId: "root", path: "projects/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/$slug-TOVGJMFU.js", imports: ["/build/_shared/chunk-W4MHAE63.js", "/build/_shared/chunk-52C552IL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/index": { id: "routes/projects/index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects/index-HQKF3QGV.js", imports: ["/build/_shared/chunk-W4MHAE63.js", "/build/_shared/chunk-OTGSHUKN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/projects": { id: "routes/projects/projects", parentId: "root", path: "projects/projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/projects-F77R4WGV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-AFB788F6.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects/projects": {
    id: "routes/projects/projects",
    parentId: "root",
    path: "projects/projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/projects/$slug": {
    id: "routes/projects/$slug",
    parentId: "root",
    path: "projects/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/projects/index": {
    id: "routes/projects/index",
    parentId: "root",
    path: "projects",
    index: !0,
    caseSensitive: void 0,
    module: projects_exports2
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "root",
    path: "about",
    index: !0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/posts/$slug": {
    id: "routes/posts/$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/posts/admin": {
    id: "routes/posts/admin",
    parentId: "root",
    path: "posts/admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/posts/admin/index": {
    id: "routes/posts/admin/index",
    parentId: "routes/posts/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/posts/admin/new": {
    id: "routes/posts/admin/new",
    parentId: "routes/posts/admin",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "root",
    path: "posts",
    index: !0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
