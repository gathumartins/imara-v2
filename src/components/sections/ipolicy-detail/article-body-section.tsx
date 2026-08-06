import { FileText } from "lucide-react"

export function ArticleBodySection({content}: {content: string}) {
  return (
    <>
      <article className="max-w-none [&_p]:text-body [&_p]:mb-4 [&_p]:text-gray-500 [&_p]:leading-relaxed [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:text-h5 [&_h3]:text-navy-900 [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-gold-700 [&_blockquote]:bg-gold-100 [&_blockquote]:px-6 [&_blockquote]:py-5 {&_ul]:list-inside [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-inside [&_ol]:list-decimal [&_ol]:pl-4 [&_a]:text-blue-700 [&_a]:underline">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </>
  );
}
