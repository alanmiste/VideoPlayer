import React from 'react';

export default function Screen(props) {
    return (
        <div className={props.classText}>
            <video width="100%" height="100%" controls>
                <source src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_013_preview.mp4"  type="video/mp4"></source>
            </video>
        </div>
    )
}