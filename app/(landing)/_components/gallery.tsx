'use client'
import React from 'react'
//@ts-ignore
import ImageGallery from 'react-image-gallery'
import { motion } from 'framer-motion'

const Gallery = () => {
    const images = Array.from({ length: 27 }, (_, index) => ({
        original: `/images/gallery/A${index + 1}.jpg`,
        thumbnail: `/images/gallery/A${index + 1}.jpg`
    }));

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='font-dmserif text-blue-900 text-5xl md:text-6xl text-center mb-10 mt-20'>
                Our Memories
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=''>
                <ImageGallery items={images} />
            </motion.div>
        </div>
    )
}

export default Gallery
