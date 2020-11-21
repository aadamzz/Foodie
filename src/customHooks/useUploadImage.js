import { useState, useEffect } from 'react'

export function useUploadImage() {
    const [uploadImage, setUploadImage] = useState();
    const [imageSrc, setImageSrc] = useState();

    useEffect(() => {
        if (uploadImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
            }
            reader.readAsDataURL(uploadImage);
        } else setImageSrc(null);
    }, [uploadImage])

    return { imageSrc, setUploadImage, setImageSrc };
}

