import axios from 'axios';
import React from 'react';

const ImageBBHooks = async (image) => {
    const formdata = new FormData()
    formdata.append('image', image[0])
    try {
        const result = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbbKey}`, formdata)
        return result?.data?.data?.display_url
    }
    catch (error) {
        return error.message
    }
};
export default ImageBBHooks;