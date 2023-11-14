'use client';

import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import { useEffect, useState } from 'react';

export default function HorizoonVideo({ url }) {
    const [isClient, setIsClient] = useState(false);

    const videoSources = [
        {
            src: url + '?quality=low',
            type: 'video/mp4',
            size: 240,
        },
        {
            src: url + '?quality=low',
            type: 'video/mp4',
            size: 480,
        },
        {
            src: 'https://sejawat.s3.ap-southeast-1.amazonaws.com/sejawat/post_video/6ffde9f3b4085949928c52ca7abaffda/Anemia-Besi_Feed-%281%29.mp4',
            type: 'video/mp4',
            size: 720,
        },
        {
            src: url + '?quality=high',
            type: 'video/mp4',
            size: 1080,
        },
    ];

    const videoSrc = {
        type: 'video',
        sources: videoSources,
        // tracks: [
        //     {
        //         kind: 'captions',
        //         label: 'English',
        //         srclang: 'en',
        //         src: '/path/to/captions.en.vtt',
        //         default: true,
        //     },
        //     {
        //         kind: 'captions',
        //         label: 'French',
        //         srclang: 'fr',
        //         src: '/path/to/captions.fr.vtt',
        //     },
        // ],
        // poster: 'https://horizoon.s3.ap-southeast-1.amazonaws.com/background/8.jpg',
    };
    const options = {
        controls: [
            'play-large',
            'play',
            'progress',
            'current-time',
            'mute',
            'volume',
            'captions',
            'settings',
            'pip',
            'airplay',
            'fullscreen',
        ],
        // autoplay: true,
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="w-full overflow-hidden rounded-lg border">
            {isClient && <Plyr source={videoSrc} options={options} />}
        </div>
    );
}
