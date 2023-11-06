'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function CourseDescription({ body }) {
    return (
        <div className="mb-10">
            <h2 className="mb-4 text-xl font-extrabold">About This Class</h2>
            <article className="prose prose-dark-mode">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {body}
                </ReactMarkdown>
            </article>
        </div>
    );
}

export default CourseDescription;
