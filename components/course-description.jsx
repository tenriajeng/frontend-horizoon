'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function CourseDescription({ body }) {
    return (
        <div className="mb-10">
            <article className="prose prose-sm dark:prose-dark-mode ">
                <ReactMarkdown className="" rehypePlugins={[rehypeRaw]}>
                    {body}
                </ReactMarkdown>
            </article>
        </div>
    );
}

export default CourseDescription;
