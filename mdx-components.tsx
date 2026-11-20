import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="article-heading" {...props} />,
    h3: (props) => <h3 className="article-subheading" {...props} />,
    p: (props) => <p className="article-paragraph" {...props} />,
    a: (props) => <a className="article-link" {...props} />,
    blockquote: (props) => <blockquote className="article-quote" {...props} />,
    ul: (props) => <ul className="article-list" {...props} />,
    ol: (props) => <ol className="article-list" {...props} />,
    ...components,
  };
}