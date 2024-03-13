import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


const Content = ({ content }) => {

    const data = content;

    return (
        <div className="p-4 ml-5" style={{ overflowY: "scroll" }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {data}
            </ReactMarkdown>
        </div>
    )
}

export default Content
