"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

interface MarkdownRendererProps {
  content: string;
  locale?: string;
}

export default function MarkdownRenderer({
  content,
  locale,
}: MarkdownRendererProps) {
  return (
    <div
      className={`prose prose-lg dark:prose-invert max-w-none ${
        locale === "fa" ? "prose-rtl" : ""
      }`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-bold mt-4 mb-2" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-4 leading-relaxed" {...props} />
          ),
          code: ({ node, inline, ...props }: any) => {
            if (inline) {
              return (
                <code
                  className="bg-muted text-primary px-1.5 py-0.5 rounded text-sm font-mono"
                  {...props}
                />
              );
            }
            return (
              <code
                className="block bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono"
                {...props}
              />
            );
          },
          pre: ({ node, ...props }) => (
            <pre
              className="bg-muted border border-border p-4 rounded-lg overflow-x-auto my-4"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc my-4 space-y-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal my-4 space-y-2" {...props} />
          ),
          li: ({ node, ...props }) => <li className="ml-6" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground"
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              className="text-primary hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="rounded-lg shadow-md my-4" alt="" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-bold" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
