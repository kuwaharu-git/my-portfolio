import React, { Children } from 'react';
import { css } from '@emotion/react';

export default function Icons ({ svgChildren }) {
    const svgStyle = css`
        width: 40%;
        fill: #fff;
        `;
    

    // スタイルを適用してSVGをレンダリング
    return (
        <svg css={svgStyle} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {svgChildren}
        </svg>
    );
}


