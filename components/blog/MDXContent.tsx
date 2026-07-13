import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-[32px] font-bold tracking-[-0.04em] text-[#EDEEF2] mt-10 mb-5 leading-tight" {...props}/>
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#EDEEF2] mt-10 mb-4 leading-tight" {...props}/>
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-[18px] font-bold text-[#EDEEF2] mt-8 mb-3" {...props}/>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[15px] text-[#72728A] leading-[1.85] mb-5" {...props}/>
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[#6C5FFF] hover:text-[#9B8FFF] underline underline-offset-2 transition-colors" {...props}/>
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-none space-y-2 mb-6" {...props}/>
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 mb-6 text-[#72728A] text-[15px]" {...props}/>
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="flex items-start gap-2 text-[15px] text-[#72728A] leading-relaxed" {...props}/>
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-[13px] text-[#00E5A0] bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] px-1.5 py-0.5 rounded" {...props}/>
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-[#0E0E11] border border-white/8 rounded-xl p-5 overflow-x-auto mb-6 font-mono text-[13px] text-[#EDEEF2] leading-relaxed" {...props}/>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-[#6C5FFF] pl-5 my-6 text-[#72728A] italic" {...props}/>
  ),
  hr: () => <hr className="border-white/8 my-10"/>,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-[#EDEEF2] font-semibold" {...props}/>
  ),
}

export default function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components}/>
}
