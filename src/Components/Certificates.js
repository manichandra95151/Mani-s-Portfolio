<<<<<<< HEAD
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { certificates } from "../Data/CertificatesData";

export default function CertificatesCarousel() {
    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-black bg-[rgba(250,250,250,1)] rounded-lg p-1 text-center max-w-xs mx-auto">
                Certificates
            </h2>
            <p className="text-gray-600 text-base font-bold mb-8 mt-2 p-1 text-center max-w-xs mx-auto">
                Showcasing my achievements and continuous learning.
            </p>

            <div className="w-full lg:w rounded-b-xl border-2 border-[rgba(38,38,38,0.5)] hover:border-[rgba(145,86,101,0.5)] transition-all duration-300">
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    showStatus={false}
                    className="rounded-lg shadow-lg"
                >
                    {certificates.map((cert, index) => (
                        <CertificateItem key={index} cert={cert} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

// Component for each certificate
const CertificateItem = ({ cert }) => {
    const [loading, setLoading] = useState(true); // State to track image loading

    return (
        <div className="text-center">
            <SkeletonTheme baseColor="#202020" highlightColor="#444" duration={0.2}>
                {/* Skeleton with exact dimensions of the image */}
                {loading && (
                    <Skeleton 
                        width={'100%'} 
                        height={'100%'} 
                        count={10}
                       style={{ marginTop: '1rem', borderRadius: '8px', display: 'inline-block' }} // Ensure inline-block to prevent height change
                    />
                )}

                <img
                    loading="lazy"
                    src={cert.src}
                    alt={cert.name}
                    className={`mx-auto ${loading ? 'hidden' : 'block'}`} // Hide the image while it's loading
                    style={{
                        height: '300px',
                        objectFit: 'fill', // Changed to cover for better aspect ratio handling
                       
                    }}
                    onLoad={() => setLoading(false)} // Set loading to false once the image has loaded
                />

                <div className="p-4">
                    <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                    <a
                        href={cert.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center my-5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white border border-[rgba(241,241,241,0.5)] shadow transition-colors hover:text-zinc-400 bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        View Certificate
                    </a>
                </div>
            </SkeletonTheme>
        </div>
    );
};
=======
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { certificates } from "../Data/CertificatesData";

export default function CertificatesCarousel() {
    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-black bg-[rgba(250,250,250,1)] rounded-lg p-1 text-center max-w-xs mx-auto">
                Certificates
            </h2>
            <p className="text-gray-600 text-base font-bold mb-8 mt-2 p-1 text-center max-w-xs mx-auto">
                Showcasing my achievements and continuous learning.
            </p>

            <div className="w-full lg:w rounded-b-xl border-2 border-[rgba(38,38,38,0.5)] hover:border-[rgba(145,86,101,0.5)] transition-all duration-300">
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    showStatus={false}
                    className="rounded-lg shadow-lg"
                >
                    {certificates.map((cert, index) => (
                        <CertificateItem key={index} cert={cert} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

// Component for each certificate
const CertificateItem = ({ cert }) => {
    const [loading, setLoading] = useState(true); // State to track image loading

    return (
        <div className="text-center">
            <SkeletonTheme baseColor="#202020" highlightColor="#444" duration={0.2}>
                {/* Skeleton with exact dimensions of the image */}
                {loading && (
                    <Skeleton 
                        width={'100%'} 
                        height={'100%'} 
                        count={10}
                       style={{ marginTop: '1rem', borderRadius: '8px', display: 'inline-block' }} // Ensure inline-block to prevent height change
                    />
                )}

                <img
                    loading="lazy"
                    src={cert.src}
                    alt={cert.name}
                    className={`mx-auto ${loading ? 'hidden' : 'block'}`} // Hide the image while it's loading
                    style={{
                        height: '300px',
                        objectFit: 'fill', // Changed to cover for better aspect ratio handling
                       
                    }}
                    onLoad={() => setLoading(false)} // Set loading to false once the image has loaded
                />

                <div className="p-4">
                    <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                    <a
                        href={cert.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center my-5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white border border-[rgba(241,241,241,0.5)] shadow transition-colors hover:text-zinc-400 bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        View Certificate
                    </a>
                </div>
            </SkeletonTheme>
        </div>
    );
};
>>>>>>> bde21574f1da4def6241182f8181b80fe5f83497
