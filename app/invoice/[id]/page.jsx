import React from 'react';

export default function Page({ params }) {
    // URL to be embedded in the iframe
    const iframeUrl = `https://checkout-staging.xendit.co/v2/${params.id}`;

    return (
        <div className="mt-4 md:container">
            <div className="xs:mx-2 xs:mb-5 xs:mt-2 xs:p-0 md:mx-2 md:mb-10">
                <iframe
                    className="h-screen"
                    src={iframeUrl}
                    title="Checkout"
                    width="100%"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
