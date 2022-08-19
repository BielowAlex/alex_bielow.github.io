import React from 'react';

const Constellation: React.FC = () => {
    const [translateCount, setTranslateCount] = React.useState<number>(0);
    const mainDiv = React.useRef<HTMLDivElement>(null)

    const root = React.useMemo(() =>document.querySelector(':root') as HTMLDivElement,[]);

    const moveOnScroll = () => {
        if (mainDiv.current !== null) {
            if (window.scrollY > 0 && window.scrollY < mainDiv.current.offsetHeight) {
                setTranslateCount(Math.floor(window.scrollY / 10));
            }
        }
    }

    const parallax = (e: React.MouseEvent<HTMLDivElement>) => {
        const x = (e.clientX - window.innerWidth / 2)/50;
        const y = (e.clientY - window.innerHeight / 2)/50;

        if(root!==null){
            root.style.setProperty('--posX',`${x}`);
            root.style.setProperty('--posY',`${y}`);
        }
    }


    React.useEffect(() => {
        window.addEventListener('scroll', moveOnScroll);
    }, []);

    return (
        <div className="constellation _anim_item"
             style={{transform: `translateY(-${translateCount}px)`}}
             ref={mainDiv}
             onMouseMove={(e) => parallax(e)}>
            <svg className="constellation_ursa" width="233" height="297" viewBox="0 0 233 297" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2_14)">
                    <path
                        d="M87.7705 37.5372L87.6936 37.303L87.4611 37.2214L9.4838 9.8464L9.15255 10.7899L86.8973 38.0833L105.066 93.4141L123.278 162.954L105.062 231.679L104.975 232.006L105.247 232.208L176.588 285.299L176.969 285.582L177.271 285.217L221.237 232.126L221.581 231.711L221.142 231.399L186.301 206.683L124.233 162.652L106.029 93.146L106.025 93.1313L106.02 93.1167L87.7705 37.5372Z"
                        stroke="#FF0000" strokeOpacity="0.3"/>
                </g>
                <g filter="url(#filter1_d_2_14)">
                    <circle cx="10.3182" cy="10.3182" r="3.31818" fill="#630707" fillOpacity="0.8"
                            shapeRendering="crispEdges"/>
                    <circle cx="10.3182" cy="10.3182" r="2.81818" stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter2_d_2_14)">
                    <circle cx="87.2954" cy="37.5227" r="3.31818" fill="#630707" fillOpacity="0.8"
                            shapeRendering="crispEdges"/>
                    <circle cx="87.2954" cy="37.5227" r="2.81818" stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter3_d_2_14)">
                    <circle cx="105.318" cy="93.3182" r="3.31818" fill="#630707" fillOpacity="0.8"
                            shapeRendering="crispEdges"/>
                    <circle cx="105.318" cy="93.3182" r="2.81818" stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter4_d_2_14)">
                    <circle cx="124.795" cy="162.955" r="3.31818" fill="#630707" fillOpacity="0.8"
                            shapeRendering="crispEdges"/>
                    <circle cx="124.795" cy="162.955" r="2.81818" stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter5_d_2_14)">
                    <circle cx="104.886" cy="232.636" r="3.31818" fill="#630707" fillOpacity="0.8"
                            shapeRendering="crispEdges"/>
                    <circle cx="104.886" cy="232.636" r="2.81818" stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter6_d_2_14)">
                    <circle cx="177.886" cy="285.727" r="3.31818" fill="#630707" fillOpacity="0.8"
                            shapeRendering="crispEdges"/>
                    <circle cx="177.886" cy="285.727" r="2.81818" stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter7_d_2_14)">
                    <circle cx="222.682" cy="232.636" r="3.31818" fill="#630707" fillOpacity="0.8"
                            shapeRendering="crispEdges"/>
                    <circle cx="222.682" cy="232.636" r="2.81818" stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <defs>
                    <filter id="filter0_d_2_14" x="7.15256" y="8.84641" width="219.157" height="282.42"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="2"/>
                        <feGaussianBlur stdDeviation="1.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14" result="shape"/>
                    </filter>
                    <filter id="filter1_d_2_14" x="0" y="0" width="20.6364" height="20.6364"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_14"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14" result="shape"/>
                    </filter>
                    <filter id="filter2_d_2_14" x="76.9773" y="27.2045" width="20.6364" height="20.6364"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_14"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14" result="shape"/>
                    </filter>
                    <filter id="filter3_d_2_14" x="95" y="83" width="20.6364" height="20.6364"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_14"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14" result="shape"/>
                    </filter>
                    <filter id="filter4_d_2_14" x="114.477" y="152.636" width="20.6364" height="20.6364"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_14"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14" result="shape"/>
                    </filter>
                    <filter id="filter5_d_2_14" x="94.5682" y="222.318" width="20.6364" height="20.6364"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_14"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14" result="shape"/>
                    </filter>
                    <filter id="filter6_d_2_14" x="167.568" y="275.409" width="20.6364" height="20.6364"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_14"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14" result="shape"/>
                    </filter>
                    <filter id="filter7_d_2_14" x="212.364" y="222.318" width="20.6364" height="20.6364"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_14"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14" result="shape"/>
                    </filter>
                </defs>
            </svg>

            <svg className="constellation_virgo" width="311" height="235" viewBox="0 0 311 235" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2_20)">
                    <path
                        d="M267.01 76.8772L267.095 76.8288L267.156 76.7518L300.493 34.4599L299.708 33.8408L266.432 76.0556L219.909 102.427L185.411 60.0485L177.854 6.92958L176.864 7.07042L184.405 60.0738L125.158 117.164L75.3896 110.928L75.2322 110.909L75.0923 110.983L9.42824 145.965L9.89842 146.848L75.4226 111.94L125.07 118.161L176.569 182.248L104.202 215.781L85.2528 199.286L84.9978 199.064L84.6968 199.218L36.7115 223.758L37.1668 224.648L84.8512 200.262L103.79 216.748L104.035 216.961L104.329 216.825L177.215 183.051L177.672 183.621L177.853 182.513L185.402 136.212L220.088 103.476L267.01 76.8772Z"
                        stroke="#FF0000" strokeOpacity="0.3" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter1_d_2_20)">
                    <ellipse cx="10.3521" cy="146.217" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M13.2042 146.217C13.2042 147.87 11.9118 149.182 10.3521 149.182C8.7924 149.182 7.5 147.87 7.5 146.217C7.5 144.563 8.7924 143.252 10.3521 143.252C11.9118 143.252 13.2042 144.563 13.2042 146.217Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter2_d_2_20)">
                    <ellipse cx="37.628" cy="224.535" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M40.48 224.535C40.48 226.188 39.1876 227.5 37.628 227.5C36.0683 227.5 34.7759 226.188 34.7759 224.535C34.7759 222.882 36.0683 221.57 37.628 221.57C39.1876 221.57 40.48 222.882 40.48 224.535Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter3_d_2_20)">
                    <ellipse cx="85.1081" cy="200.517" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M87.9601 200.517C87.9601 202.171 86.6677 203.482 85.1081 203.482C83.5484 203.482 82.256 202.171 82.256 200.517C82.256 198.864 83.5484 197.552 85.1081 197.552C86.6677 197.552 87.9601 198.864 87.9601 200.517Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter4_d_2_20)">
                    <ellipse cx="104.302" cy="215.137" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M107.154 215.137C107.154 216.79 105.862 218.102 104.302 218.102C102.743 218.102 101.45 216.79 101.45 215.137C101.45 213.484 102.743 212.172 104.302 212.172C105.862 212.172 107.154 213.484 107.154 215.137Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter5_d_2_20)">
                    <ellipse cx="177.038" cy="182.765" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M179.89 182.765C179.89 184.419 178.597 185.73 177.038 185.73C175.478 185.73 174.186 184.419 174.186 182.765C174.186 181.112 175.478 179.8 177.038 179.8C178.597 179.8 179.89 181.112 179.89 182.765Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter6_d_2_20)">
                    <ellipse cx="124.507" cy="118.022" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M127.359 118.022C127.359 119.675 126.066 120.987 124.507 120.987C122.947 120.987 121.654 119.675 121.654 118.022C121.654 116.369 122.947 115.057 124.507 115.057C126.066 115.057 127.359 116.369 127.359 118.022Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter7_d_2_20)">
                    <ellipse cx="185.12" cy="59.5445" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M187.972 59.5445C187.972 61.1977 186.679 62.5095 185.12 62.5095C183.56 62.5095 182.268 61.1977 182.268 59.5445C182.268 57.8912 183.56 56.5795 185.12 56.5795C186.679 56.5795 187.972 57.8912 187.972 59.5445Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter8_d_2_20)">
                    <ellipse cx="220.477" cy="102.358" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M223.329 102.358C223.329 104.012 222.037 105.323 220.477 105.323C218.917 105.323 217.625 104.012 217.625 102.358C217.625 100.705 218.917 99.3935 220.477 99.3935C222.037 99.3935 223.329 100.705 223.329 102.358Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter9_d_2_20)">
                    <ellipse cx="300.284" cy="34.4826" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M303.136 34.4826C303.136 36.1359 301.844 37.4476 300.284 37.4476C298.725 37.4476 297.432 36.1359 297.432 34.4826C297.432 32.8293 298.725 31.5176 300.284 31.5176C301.844 31.5176 303.136 32.8293 303.136 34.4826Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter10_d_2_20)">
                    <ellipse cx="266.947" cy="76.2524" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M269.799 76.2524C269.799 77.9056 268.507 79.2174 266.947 79.2174C265.387 79.2174 264.095 77.9056 264.095 76.2524C264.095 74.5991 265.387 73.2874 266.947 73.2874C268.507 73.2874 269.799 74.5991 269.799 76.2524Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter11_d_2_20)">
                    <ellipse cx="185.12" cy="136.819" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M187.972 136.819C187.972 138.472 186.679 139.784 185.12 139.784C183.56 139.784 182.268 138.472 182.268 136.819C182.268 135.165 183.56 133.854 185.12 133.854C186.679 133.854 187.972 135.165 187.972 136.819Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter12_d_2_20)">
                    <ellipse cx="178.048" cy="10.465" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M180.9 10.465C180.9 12.1183 179.608 13.43 178.048 13.43C176.488 13.43 175.196 12.1183 175.196 10.465C175.196 8.81173 176.488 7.5 178.048 7.5C179.608 7.5 180.9 8.81173 180.9 10.465Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter13_d_2_20)">
                    <ellipse cx="76.0161" cy="111.757" rx="3.35208" ry="3.46499" fill="#630707" fillOpacity="0.8"
                             shapeRendering="crispEdges"/>
                    <path
                        d="M78.8682 111.757C78.8682 113.41 77.5758 114.722 76.0161 114.722C74.4565 114.722 73.1641 113.41 73.1641 111.757C73.1641 110.103 74.4565 108.792 76.0161 108.792C77.5758 108.792 78.8682 110.103 78.8682 111.757Z"
                        stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <defs>
                    <filter id="filter0_d_2_20" x="7.42822" y="5.92958" width="297.065" height="223.718"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="1" dy="2"/>
                        <feGaussianBlur stdDeviation="1.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter1_d_2_20" x="0" y="135.752" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter2_d_2_20" x="27.2759" y="214.07" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter3_d_2_20" x="74.756" y="190.052" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter4_d_2_20" x="93.9502" y="204.672" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter5_d_2_20" x="166.686" y="172.3" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter6_d_2_20" x="114.154" y="107.557" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter7_d_2_20" x="174.768" y="49.0795" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter8_d_2_20" x="210.125" y="91.8935" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter9_d_2_20" x="289.932" y="24.0176" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter10_d_2_20" x="256.595" y="65.7874" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter11_d_2_20" x="174.768" y="126.354" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter12_d_2_20" x="167.696" y="0" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                    <filter id="filter13_d_2_20" x="65.6641" y="101.292" width="20.7042" height="20.93"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_20"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_20" result="shape"/>
                    </filter>
                </defs>
            </svg>
            <svg className="constellation_aries" width="221" height="127" viewBox="0 0 221 127" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10L161.136 45.7863L199.205 78.4017L210 116" stroke="#FF0000" strokeOpacity="0.3"/>
                <g filter="url(#filter0_d_3_37)">
                    <circle cx="10.3182" cy="10.3182" r="3.31818" fill="#630707" fillOpacity="0.8"
                            shapeRendering="crispEdges"/>
                    <circle cx="10.3182" cy="10.3182" r="2.81818" stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter1_d_3_37)">
                    <circle cx="161.318" cy="46.3182" r="3.31818" fill="#630707" fillOpacity="0.8"
                            shapeRendering="crispEdges"/>
                    <circle cx="161.318" cy="46.3182" r="2.81818" stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter2_d_3_37)">
                    <circle cx="199.318" cy="77.3182" r="3.31818" fill="#630707" fillOpacity="0.8"
                            shapeRendering="crispEdges"/>
                    <circle cx="199.318" cy="77.3182" r="2.81818" stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter3_d_3_37)">
                    <circle cx="210.318" cy="116.318" r="3.31818" fill="#630707" fillOpacity="0.8"
                            shapeRendering="crispEdges"/>
                    <circle cx="210.318" cy="116.318" r="2.81818" stroke="#630707" shapeRendering="crispEdges"/>
                </g>
                <defs>
                    <filter id="filter0_d_3_37" x="0" y="0" width="20.6364" height="20.6364"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3_37"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_37"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_37" result="shape"/>
                    </filter>
                    <filter id="filter1_d_3_37" x="151" y="36" width="20.6364" height="20.6364"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3_37"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_37"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_37" result="shape"/>
                    </filter>
                    <filter id="filter2_d_3_37" x="189" y="67" width="20.6364" height="20.6364"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3_37"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_37"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_37" result="shape"/>
                    </filter>
                    <filter id="filter3_d_3_37" x="200" y="106" width="20.6364" height="20.6364"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3_37"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_37"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_37" result="shape"/>
                    </filter>
                </defs>
            </svg>

            <svg className="stars" width="1222" height="856" viewBox="0 0 1222 856" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_4_48)">
                    <circle r="2" transform="matrix(1 0 0 -1 1053 414)" fill="#630707" fillOpacity="0.2"
                            shapeRendering="crispEdges"/>
                    <circle r="1.5" transform="matrix(1 0 0 -1 1053 414)" stroke="#630707" strokeOpacity="0.2"
                            shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter1_d_4_48)">
                    <circle r="2" transform="matrix(1 0 0 -1 939 233)" fill="#630707" fillOpacity="0.2"
                            shapeRendering="crispEdges"/>
                    <circle r="1.5" transform="matrix(1 0 0 -1 939 233)" stroke="#630707" strokeOpacity="0.2"
                            shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter2_d_4_48)">
                    <circle r="6.5" transform="matrix(1 0 0 -1 920.5 325.5)" fill="#630707" fillOpacity="0.2"
                            shapeRendering="crispEdges"/>
                    <circle r="6" transform="matrix(1 0 0 -1 920.5 325.5)" stroke="#630707" strokeOpacity="0.2"
                            shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter3_d_4_48)">
                    <circle r="5" transform="matrix(1 0 0 -1 805 143)" fill="#630707" fillOpacity="0.2"
                            shapeRendering="crispEdges"/>
                    <circle r="4.5" transform="matrix(1 0 0 -1 805 143)" stroke="#630707" strokeOpacity="0.2"
                            shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter4_d_4_48)">
                    <circle r="4" transform="matrix(1 0 0 -1 1206 781)" fill="#630707" fillOpacity="0.2"
                            shapeRendering="crispEdges"/>
                    <circle r="3.5" transform="matrix(1 0 0 -1 1206 781)" stroke="#630707" strokeOpacity="0.2"
                            shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter5_d_4_48)">
                    <circle r="2" transform="matrix(1 0 0 -1 1090 598)" fill="#630707" fillOpacity="0.2"
                            shapeRendering="crispEdges"/>
                    <circle r="1.5" transform="matrix(1 0 0 -1 1090 598)" stroke="#630707" strokeOpacity="0.2"
                            shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter6_d_4_48)">
                    <circle r="2" transform="matrix(1 0 0 -1 1067 686)" fill="#630707" fillOpacity="0.2"
                            shapeRendering="crispEdges"/>
                    <circle r="1.5" transform="matrix(1 0 0 -1 1067 686)" stroke="#630707" strokeOpacity="0.2"
                            shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter7_d_4_48)">
                    <circle r="2" transform="matrix(1 0 0 -1 953 505)" fill="#630707" fillOpacity="0.2"
                            shapeRendering="crispEdges"/>
                    <circle r="1.5" transform="matrix(1 0 0 -1 953 505)" stroke="#630707" strokeOpacity="0.2"
                            shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter8_d_4_48)">
                    <circle r="2" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 623.017 640.108)"
                            fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle r="1.5" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 623.017 640.108)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter9_d_4_48)">
                    <circle r="2" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 416.646 583.826)"
                            fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle r="1.5" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 416.646 583.826)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter10_d_4_48)">
                    <circle r="6.5" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 465.556 664.487)"
                            fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle r="6" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 465.556 664.487)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter11_d_4_48)">
                    <circle r="5" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 257.065 608.114)"
                            fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle r="4.5" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 257.065 608.114)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter12_d_4_48)">
                    <circle r="4" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 983.882 807.066)"
                            fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle r="3.5" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 983.882 807.066)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter13_d_4_48)">
                    <circle r="2" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 774.684 750.662)"
                            fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle r="1.5" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 774.684 750.662)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter14_d_4_48)">
                    <circle r="2" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 817.236 831.051)"
                            fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle r="1.5" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 817.236 831.051)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter15_d_4_48)">
                    <circle r="2" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 610.865 774.768)"
                            fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle r="1.5" transform="matrix(0.736794 -0.676117 -0.676117 -0.736794 610.865 774.768)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter16_d_4_48)">
                    <circle cx="263" cy="456" r="2" fill="#630707" fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="263" cy="456" r="1.5" stroke="#630707" strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter17_d_4_48)">
                    <circle cx="515.516" cy="76.1082" r="2" transform="rotate(-137.459 515.516 76.1082)" fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="515.516" cy="76.1082" r="1.5" transform="rotate(-137.459 515.516 76.1082)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter18_d_4_48)">
                    <circle cx="721.888" cy="19.8258" r="2" transform="rotate(-137.459 721.888 19.8258)" fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="721.888" cy="19.8258" r="1.5" transform="rotate(-137.459 721.888 19.8258)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter19_d_4_48)">
                    <circle cx="672.978" cy="100.487" r="6.5" transform="rotate(-137.459 672.978 100.487)"
                            fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="672.978" cy="100.487" r="6" transform="rotate(-137.459 672.978 100.487)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter20_d_4_48)">
                    <circle cx="881.469" cy="44.114" r="5" transform="rotate(-137.459 881.469 44.114)" fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="881.469" cy="44.114" r="4.5" transform="rotate(-137.459 881.469 44.114)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter21_d_4_48)">
                    <circle cx="154.652" cy="243.066" r="4" transform="rotate(-137.459 154.652 243.066)" fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="154.652" cy="243.066" r="3.5" transform="rotate(-137.459 154.652 243.066)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter22_d_4_48)">
                    <circle cx="363.849" cy="186.662" r="2" transform="rotate(-137.459 363.849 186.662)" fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="363.849" cy="186.662" r="1.5" transform="rotate(-137.459 363.849 186.662)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter23_d_4_48)">
                    <circle cx="321.297" cy="267.051" r="2" transform="rotate(-137.459 321.297 267.051)" fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="321.297" cy="267.051" r="1.5" transform="rotate(-137.459 321.297 267.051)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter24_d_4_48)">
                    <circle cx="527.669" cy="210.768" r="2" transform="rotate(-137.459 527.669 210.768)" fill="#630707"
                            fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="527.669" cy="210.768" r="1.5" transform="rotate(-137.459 527.669 210.768)"
                            stroke="#630707"
                            strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter25_d_4_48)">
                    <circle cx="149" cy="637" r="2" fill="#630707" fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="149" cy="637" r="1.5" stroke="#630707" strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter26_d_4_48)">
                    <circle cx="130.5" cy="544.5" r="6.5" fill="#630707" fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="130.5" cy="544.5" r="6" stroke="#630707" strokeOpacity="0.2"
                            shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter27_d_4_48)">
                    <circle cx="15" cy="727" r="5" fill="#630707" fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="15" cy="727" r="4.5" stroke="#630707" strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter28_d_4_48)">
                    <circle cx="416" cy="89" r="4" fill="#630707" fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="416" cy="89" r="3.5" stroke="#630707" strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter29_d_4_48)">
                    <circle cx="300" cy="272" r="2" fill="#630707" fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="300" cy="272" r="1.5" stroke="#630707" strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter30_d_4_48)">
                    <circle cx="277" cy="184" r="2" fill="#630707" fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="277" cy="184" r="1.5" stroke="#630707" strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <g filter="url(#filter31_d_4_48)">
                    <circle cx="163" cy="365" r="2" fill="#630707" fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <circle cx="163" cy="365" r="1.5" stroke="#630707" strokeOpacity="0.2" shapeRendering="crispEdges"/>
                </g>
                <defs>
                    <filter id="filter0_d_4_48" x="1029" y="390" width="48" height="48" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter1_d_4_48" x="915" y="209" width="48" height="48" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter2_d_4_48" x="892" y="297" width="57" height="57" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter3_d_4_48" x="778" y="116" width="54" height="54" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter4_d_4_48" x="1180" y="755" width="52" height="52" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter5_d_4_48" x="1066" y="574" width="48" height="48" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter6_d_4_48" x="1043" y="662" width="48" height="48" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter7_d_4_48" x="929" y="481" width="48" height="48" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter8_d_4_48" x="599.017" y="616.108" width="48" height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter9_d_4_48" x="392.646" y="559.826" width="48" height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter10_d_4_48" x="437.056" y="635.987" width="57.0001" height="57.0001"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter11_d_4_48" x="230.065" y="581.114" width="54.0001" height="54.0001"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter12_d_4_48" x="957.882" y="781.066" width="52.0001" height="52.0001"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter13_d_4_48" x="750.684" y="726.662" width="48" height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter14_d_4_48" x="793.236" y="807.051" width="48" height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter15_d_4_48" x="586.865" y="750.768" width="48" height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter16_d_4_48" x="239" y="432" width="48" height="48" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter17_d_4_48" x="491.516" y="52.1082" width="48" height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter18_d_4_48" x="697.888" y="-4.17419" width="48" height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter19_d_4_48" x="644.478" y="71.9874" width="57.0001" height="57.0001"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter20_d_4_48" x="854.469" y="17.114" width="54.0001" height="54.0001"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter21_d_4_48" x="128.652" y="217.066" width="52" height="52"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter22_d_4_48" x="339.849" y="162.662" width="48" height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter23_d_4_48" x="297.297" y="243.051" width="48" height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter24_d_4_48" x="503.669" y="186.768" width="48" height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter25_d_4_48" x="125" y="613" width="48" height="48" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter26_d_4_48" x="102" y="516" width="57" height="57" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter27_d_4_48" x="-12" y="700" width="54" height="54" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter28_d_4_48" x="390" y="63" width="52" height="52" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter29_d_4_48" x="276" y="248" width="48" height="48" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter30_d_4_48" x="253" y="160" width="48" height="48" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                    <filter id="filter31_d_4_48" x="139" y="341" width="48" height="48" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feMorphology radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_48"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.388235 0 0 0 0 0.027451 0 0 0 0 0.027451 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_48"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_48" result="shape"/>
                    </filter>
                </defs>
            </svg>


        </div>
    );
};

export {Constellation};
