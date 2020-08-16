const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Wabapp\\JavaSccript\\Gatsby\\gatsby-site\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Wabapp\\JavaSccript\\Gatsby\\gatsby-site\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("D:\\Wabapp\\JavaSccript\\Gatsby\\gatsby-site\\src\\pages\\about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Wabapp\\JavaSccript\\Gatsby\\gatsby-site\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("D:\\Wabapp\\JavaSccript\\Gatsby\\gatsby-site\\src\\pages\\page-2.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("D:\\Wabapp\\JavaSccript\\Gatsby\\gatsby-site\\src\\pages\\using-typescript.tsx")))
}

