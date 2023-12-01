import renderMathInElement from 'katex/dist/contrib/auto-render'

if (window.config?.math) {
  // ignore comment section if exists
  // https://github.com/tdduydev/hugo-blog/issues/487
  if (document.getElementsByClassName('comment')) {
    window.config.math.ignoredClasses = ['comment']
  }
  renderMathInElement(document.body, window.config.math)
}
