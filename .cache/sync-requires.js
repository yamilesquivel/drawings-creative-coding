const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/yamil/pro_des_per/drawings-creative-coding/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/yamil/pro_des_per/drawings-creative-coding/src/pages/index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/yamil/pro_des_per/drawings-creative-coding/src/pages/using-typescript.tsx"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/yamil/pro_des_per/drawings-creative-coding/src/templates/blog-post.js")))
}

