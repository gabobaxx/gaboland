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
var import_react6 = require("react"), import_react7 = require("@emotion/react");

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
    color: "gs800",
    fontSize: "16px",
    boxSizing: "border-box",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeLegibility"
  },
  p: {
    fontSize: [1, 2],
    lineHeight: "body",
    letterSpacing: "-0.003em",
    gridColumn: "1/-1",
    "--x-height-multiplier": 0.35,
    "--baseline-multiplier": 0.179
  },
  h1: {
    fontSize: [5, 6],
    mt: 2,
    gridColumn: "1/-1"
  },
  h2: {
    mt: 2,
    fontSize: [20, 30],
    fontFamily: "head",
    fontWeight: "bold",
    textAlign: "start",
    gridColumn: "1/-1"
  },
  h3: {
    fontSize: [3, 4],
    mt: 3,
    gridColumn: "1/-1"
  },
  h4: {
    fontSize: [2, 3],
    gridColumn: "1/-1"
  },
  h5: {
    fontSize: [1, 2],
    gridColumn: "1/-1"
  },
  h6: {
    fontSize: 1,
    mb: 2,
    gridColumn: "1/-1"
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
    color: "P900",
    border: "none",
    fontSize: "40px",
    cursor: "pointer",
    background: "none",
    ":hover": { color: "P300" },
    ":focus": { border: "none" }
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
    modes: {
      dark: {
        HeaderText: colors.primary[500],
        background: DarkModeColors.faztweb
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
var import_theme_ui10 = require("theme-ui");

// src/components/header/index.tsx
var import_theme_ui6 = require("theme-ui");

// src/components/nav/index.tsx
var import_theme_ui3 = require("theme-ui"), import_react4 = require("@remix-run/react");

// src/components/links/index.tsx
var import_theme_ui2 = require("theme-ui"), Link = import_theme_ui2.Link, links_default = Link;

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
];

// src/components/nav/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function NavLinks() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui3.Flex, {
    as: "nav",
    "aria-label": "Primary Navigation",
    sx: { gap: ["12px", "24px"] },
    children: navLinks.length !== 0 && navLinks.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(links_default, {
      as: import_react4.Link,
      to: n.slug,
      children: n.title
    }, n.slug, !1, {
      fileName: "src/components/nav/index.tsx",
      lineNumber: 16,
      columnNumber: 6
    }, this))
  }, void 0, !1, {
    fileName: "src/components/nav/index.tsx",
    lineNumber: 9,
    columnNumber: 3
  }, this);
}

// src/components/buttons/burguer-menu.tsx
var import_theme_ui4 = require("theme-ui"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), BurguerMenu = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui4.Button, {
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
var import_theme_ui5 = require("theme-ui"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ThemeChangerButton = () => {
  let [colorMode, setColorMode] = (0, import_theme_ui5.useColorMode)(), isDark = colorMode === "dark";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui5.Button, {
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
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui6.Flex, {
  as: "header",
  variant: "layout.header",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui6.Flex, {
      sx: {
        flex: 1,
        alignItems: "center",
        justifyContent: navLinks.length === 0 ? "center" : "flex-start"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLinks, {}, void 0, !1, {
        fileName: "src/components/header/index.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "src/components/header/index.tsx",
      lineNumber: 14,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui6.Flex, {
      sx: { gap: "12px" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(theme_changer_button_default, {}, void 0, !1, {
          fileName: "src/components/header/index.tsx",
          lineNumber: 24,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(burguer_menu_default, {}, void 0, !1, {
          fileName: "src/components/header/index.tsx",
          lineNumber: 25,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "src/components/header/index.tsx",
      lineNumber: 23,
      columnNumber: 4
    }, this)
  ]
}, void 0, !0, {
  fileName: "src/components/header/index.tsx",
  lineNumber: 13,
  columnNumber: 3
}, this), header_default = Header;

// src/components/footer/index.tsx
var import_theme_ui9 = require("theme-ui");

// src/components/footer/copyright.tsx
var import_theme_ui7 = require("theme-ui"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Copyright = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui7.Flex, {
  variant: "layout.footer",
  sx: { justifyContent: "space-between", fontSize: "0.8rem" },
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui7.Box, {
      as: "p",
      children: [
        "\xA9 ",
        new Date().getFullYear(),
        ". All rights reserved."
      ]
    }, void 0, !0, {
      fileName: "src/components/footer/copyright.tsx",
      lineNumber: 8,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui7.Box, {
      as: "p",
      children: [
        "Made with",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui7.Box, {
          as: "i",
          className: "bi bi-heart-fill",
          style: { background: "white" }
        }, void 0, !1, {
          fileName: "src/components/footer/copyright.tsx",
          lineNumber: 11,
          columnNumber: 4
        }, this),
        " ",
        "by gabriel."
      ]
    }, void 0, !0, {
      fileName: "src/components/footer/copyright.tsx",
      lineNumber: 9,
      columnNumber: 3
    }, this)
  ]
}, void 0, !0, {
  fileName: "src/components/footer/copyright.tsx",
  lineNumber: 4,
  columnNumber: 2
}, this), copyright_default = Copyright;

// src/components/footer/social-links.tsx
var import_theme_ui8 = require("theme-ui"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), FooterSocialLinks = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui8.Flex, {
  variant: "layout.footer",
  sx: {
    py: 40,
    mt: 48,
    alignItems: "center",
    justifyContent: "space-between"
  },
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(links_default, {
      as: import_react5.Link,
      className: "bi bi-github",
      to: "https://github.com/gaboland",
      sx: { fontSize: 24, color: "gs200" }
    }, "gaboland-github", !1, {
      fileName: "src/components/footer/social-links.tsx",
      lineNumber: 16,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(links_default, {
      as: import_react5.Link,
      to: "/about",
      sx: {
        color: "warning",
        cursor: "pointer",
        padding: "0.5rem",
        border: "2px solid",
        borderRadius: "8px",
        textAlign: "center",
        fontSize: "0.875rem",
        minWidth: "8.125rem",
        borderColor: "warning",
        textDecoration: "none"
      },
      children: "About Me"
    }, "about", !1, {
      fileName: "src/components/footer/social-links.tsx",
      lineNumber: 23,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(links_default, {
      as: import_react5.Link,
      className: "bi bi-instagram",
      to: "https://instagram.com/gaboland",
      sx: { fontSize: 24, color: "gs200" }
    }, "gaboland-instagram", !1, {
      fileName: "src/components/footer/social-links.tsx",
      lineNumber: 42,
      columnNumber: 3
    }, this)
  ]
}, void 0, !0, {
  fileName: "src/components/footer/social-links.tsx",
  lineNumber: 7,
  columnNumber: 2
}, this), social_links_default = FooterSocialLinks;

// src/components/footer/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui9.Box, {
  as: "footer",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(social_links_default, {}, void 0, !1, {
      fileName: "src/components/footer/index.tsx",
      lineNumber: 8,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copyright_default, {}, void 0, !1, {
      fileName: "src/components/footer/index.tsx",
      lineNumber: 9,
      columnNumber: 4
    }, this)
  ]
}, void 0, !0, {
  fileName: "src/components/footer/index.tsx",
  lineNumber: 7,
  columnNumber: 3
}, this), footer_default = Footer;

// src/components/layout/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "src/components/layout/index.tsx",
        lineNumber: 12,
        columnNumber: 4
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "src/components/layout/index.tsx",
        lineNumber: 14,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/components/layout/index.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

// src/root.tsx
var import_react8 = require("@remix-run/react");

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
}), Document = (0, import_react7.withEmotionCache)(
  ({ children }, _emotionCache) => {
    let serverStyleData = (0, import_react6.useContext)(ServerStyleContext), clientStyleData = (0, import_react6.useContext)(ClientStyleContext), resetClientStyleData = (clientStyleData == null ? void 0 : clientStyleData.reset) || function() {
    };
    return (0, import_react6.useEffect)(() => {
      resetClientStyleData();
    }, [resetClientStyleData]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Meta, {}, void 0, !1, {
              fileName: "src/root.tsx",
              lineNumber: 53,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Links, {}, void 0, !1, {
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.ScrollRestoration, {}, void 0, !1, {
              fileName: "src/root.tsx",
              lineNumber: 66,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
              fileName: "src/root.tsx",
              lineNumber: 67,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.LiveReload, {}, void 0, !1, {
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
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui10.ThemeProvider, {
      theme: theme_default,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
          fileName: "src/root.tsx",
          lineNumber: 80,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
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
var import_node = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_marked = require("marked"), import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.slug, "params.slug is required");
  let project = projects.find((project2) => project2.slug === params.slug);
  (0, import_tiny_invariant.default)(project, `Post not found: ${params.slug}`);
  let html = (0, import_marked.marked)(project.markdown);
  return (0, import_node.json)({ project, html });
};
function ProjectSlug() {
  let { project, html } = (0, import_react9.useLoaderData)();
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
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Projects() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Posts"
      }, void 0, !1, {
        fileName: "src/routes/projects/index.tsx",
        lineNumber: 7,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Link, {
              to: "admin",
              className: "text-red-600 underline",
              children: "Admin"
            }, void 0, !1, {
              fileName: "src/routes/projects/index.tsx",
              lineNumber: 11,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "src/routes/projects/index.tsx",
            lineNumber: 10,
            columnNumber: 5
          }, this),
          projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Link, {
              to: project.slug,
              className: "text-blue-600 underline",
              children: project.title
            }, void 0, !1, {
              fileName: "src/routes/projects/index.tsx",
              lineNumber: 17,
              columnNumber: 7
            }, this)
          }, project.slug, !1, {
            fileName: "src/routes/projects/index.tsx",
            lineNumber: 16,
            columnNumber: 6
          }, this))
        ]
      }, void 0, !0, {
        fileName: "src/routes/projects/index.tsx",
        lineNumber: 9,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/routes/projects/index.tsx",
    lineNumber: 6,
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
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      children: "About"
    }, void 0, !1, {
      fileName: "src/routes/about/index.tsx",
      lineNumber: 4,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "src/routes/about/index.tsx",
    lineNumber: 3,
    columnNumber: 3
  }, this);
}

// src/routes/posts/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => PostSlug,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_marked2 = require("marked"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

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
  let { post, html } = (0, import_react11.useLoaderData)();
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
var import_node3 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async () => (0, import_node3.json)({ posts: await getPosts() });
function PostAdmin() {
  let { posts: posts2 } = (0, import_react12.useLoaderData)();
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
              children: posts2.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Link, {
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
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
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
var import_react13 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AdminIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Link, {
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
var import_node4 = require("@remix-run/node"), import_react14 = require("@remix-run/react");
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
  let errors = (0, import_react14.useActionData)(), transition = (0, import_react14.useTransition)(), isCreating = Boolean(transition.submission);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.Form, {
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
var import_node5 = require("@remix-run/node"), import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader4 = async () => (0, import_node5.json)({
  posts: await getPosts()
});
function Posts() {
  let { posts: posts2 } = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Posts"
      }, void 0, !1, {
        fileName: "src/routes/posts/index.tsx",
        lineNumber: 21,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Link, {
              to: "admin",
              className: "text-red-600 underline",
              children: "Admin"
            }, void 0, !1, {
              fileName: "src/routes/posts/index.tsx",
              lineNumber: 25,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "src/routes/posts/index.tsx",
            lineNumber: 24,
            columnNumber: 5
          }, this),
          posts2.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Link, {
              to: post.slug,
              className: "text-blue-600 underline",
              children: post.title
            }, void 0, !1, {
              fileName: "src/routes/posts/index.tsx",
              lineNumber: 31,
              columnNumber: 7
            }, this)
          }, post.slug, !1, {
            fileName: "src/routes/posts/index.tsx",
            lineNumber: 30,
            columnNumber: 6
          }, this))
        ]
      }, void 0, !0, {
        fileName: "src/routes/posts/index.tsx",
        lineNumber: 23,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/routes/posts/index.tsx",
    lineNumber: 20,
    columnNumber: 3
  }, this);
}

// src/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_theme_ui12 = require("theme-ui");

// src/components/hero/index.tsx
var import_theme_ui11 = require("theme-ui"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Hero = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui11.Box, {
  as: "section",
  sx: { gridColumn: "1/-1" },
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui11.Box, {
      sx: { maxWidth: 200, mx: "auto", mt: 60 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui11.Image, {
          as: import_theme_ui11.Image,
          src: props.imageSrc || "assets/me.jpg",
          alt: props.imageAlt || "Selfie",
          sx: { borderRadius: "50%", width: "100%", height: 200 }
        }, void 0, !1, {
          fileName: "src/components/hero/index.tsx",
          lineNumber: 16,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui11.Box, {
          sx: {
            mt: "1.5rem",
            width: "100%",
            gap: "0.75rem",
            color: "gs800",
            display: "flex",
            textAlign: "center",
            flexDirection: "column"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui11.Box, {
              as: "h2",
              children: [
                "Hi, I am ",
                props.name || "Gabriel",
                "."
              ]
            }, void 0, !0, {
              fileName: "src/components/hero/index.tsx",
              lineNumber: 33,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui11.Box, {
              as: "h5",
              children: [
                props.occupation || "Software Engineer",
                "."
              ]
            }, void 0, !0, {
              fileName: "src/components/hero/index.tsx",
              lineNumber: 34,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui11.Box, {
              as: "h4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                  style: { marginRight: 5 + "px" },
                  className: "bi bi-geo-alt-fill"
                }, void 0, !1, {
                  fileName: "src/components/hero/index.tsx",
                  lineNumber: 36,
                  columnNumber: 6
                }, this),
                props.country || "Venezuela"
              ]
            }, void 0, !0, {
              fileName: "src/components/hero/index.tsx",
              lineNumber: 35,
              columnNumber: 5
            }, this)
          ]
        }, void 0, !0, {
          fileName: "src/components/hero/index.tsx",
          lineNumber: 22,
          columnNumber: 4
        }, this)
      ]
    }, void 0, !0, {
      fileName: "src/components/hero/index.tsx",
      lineNumber: 15,
      columnNumber: 3
    }, this),
    props.children
  ]
}, void 0, !0, {
  fileName: "src/components/hero/index.tsx",
  lineNumber: 14,
  columnNumber: 2
}, this), hero_default = Hero;

// src/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { minHeight: "55vh" },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_theme_ui12.Box, {
      as: "main",
      sx: {
        display: "grid",
        gridGap: "3rem",
        maxWidth: 720,
        margin: "0 auto",
        padding: "0 24px"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hero_default, {}, void 0, !1, {
        fileName: "src/routes/index.tsx",
        lineNumber: 31,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "src/routes/index.tsx",
      lineNumber: 13,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "src/routes/index.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1462e031", entry: { module: "/build/entry.client-RVBRHX5D.js", imports: ["/build/_shared/chunk-CRN43LGM.js", "/build/_shared/chunk-SRTWRCXI.js", "/build/_shared/chunk-ENUDX6JY.js", "/build/_shared/chunk-BPQL3L3K.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-T6TMHCH5.js", imports: ["/build/_shared/chunk-NG5QUVC3.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about/index": { id: "routes/about/index", parentId: "root", path: "about", index: !0, caseSensitive: void 0, module: "/build/routes/about/index-FAZKGFT4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-EXLGEUBG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/$slug": { id: "routes/posts/$slug", parentId: "root", path: "posts/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/$slug-QV3FFVK4.js", imports: ["/build/_shared/chunk-52C552IL.js", "/build/_shared/chunk-URPXXGPM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/admin": { id: "routes/posts/admin", parentId: "root", path: "posts/admin", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/admin-VHEXVMII.js", imports: ["/build/_shared/chunk-URPXXGPM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/admin/index": { id: "routes/posts/admin/index", parentId: "routes/posts/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts/admin/index-K3LWHDM3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/admin/new": { id: "routes/posts/admin/new", parentId: "routes/posts/admin", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/admin/new-NYFZSVHK.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/index": { id: "routes/posts/index", parentId: "root", path: "posts", index: !0, caseSensitive: void 0, module: "/build/routes/posts/index-VNZOFNBG.js", imports: ["/build/_shared/chunk-URPXXGPM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/$slug": { id: "routes/projects/$slug", parentId: "root", path: "projects/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/$slug-FP5RQONC.js", imports: ["/build/_shared/chunk-W4MHAE63.js", "/build/_shared/chunk-52C552IL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/index": { id: "routes/projects/index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects/index-TCQGI2WM.js", imports: ["/build/_shared/chunk-W4MHAE63.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/projects": { id: "routes/projects/projects", parentId: "root", path: "projects/projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/projects-F77R4WGV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-1462E031.js" };

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
