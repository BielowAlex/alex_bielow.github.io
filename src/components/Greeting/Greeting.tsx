import React from 'react';

const Greeting: React.FC = () => {
    const [rotateCount, setRotateCount] = React.useState<number>(0);

    const rotateOnScroll = () => {
        setRotateCount(Math.floor(window.scrollY / 7))
    }

    React.useEffect(() => {
        window.addEventListener('scroll',rotateOnScroll)
    }, [])

    return (
        <div className="greeting _anim_item _anim_no_hide">
            <div className='obj _anim_item '>
                <div className="light">

                </div>
            </div>
            <svg className="_rotate_item" width="300" height="300" viewBox="0 0 300 300" fill="none"
                 xmlns="http://www.w3.org/2000/svg" style={{transform:`rotate(${rotateCount}deg)`}}>
                <g clipPath="url(#clip0_1_121)">
                    <path
                        d="M178.101 42.7669C177.591 42.6411 177.198 42.3505 176.922 41.8949C176.647 41.4393 176.572 40.9564 176.698 40.4461C176.824 39.9358 177.114 39.543 177.57 39.2676C178.026 38.9922 178.508 38.9174 179.019 39.0431C179.529 39.1689 179.922 39.4596 180.197 39.9151C180.473 40.3707 180.548 40.8536 180.422 41.3639C180.338 41.7018 180.176 41.9909 179.934 42.2311C179.699 42.4731 179.418 42.6454 179.093 42.7481C178.776 42.8456 178.446 42.8519 178.101 42.7669Z"
                        fill="black"/>
                    <path
                        d="M236.094 67.8333L234.117 66.0813C234.504 65.4089 234.742 64.7279 234.831 64.0382C234.925 63.3533 234.894 62.681 234.739 62.0212C234.593 61.3609 234.337 60.7349 233.969 60.1434C233.601 59.5518 233.146 59.0158 232.604 58.5354C231.615 57.6594 230.498 57.1157 229.252 56.9043C228.012 56.6975 226.725 56.871 225.39 57.4247C224.06 57.9831 222.769 58.9693 221.516 60.3834C220.263 61.7975 219.44 63.1982 219.046 64.5855C218.657 65.9775 218.64 67.2766 218.995 68.4828C219.355 69.6937 220.029 70.7371 221.018 71.6131C221.56 72.0935 222.147 72.4806 222.779 72.7745C223.41 73.0683 224.06 73.2504 224.728 73.3206C225.407 73.3903 226.08 73.337 226.749 73.1607C227.427 72.9838 228.075 72.6654 228.691 72.2055L230.669 73.9575C229.78 74.6603 228.848 75.167 227.87 75.4777C226.893 75.7884 225.907 75.9159 224.912 75.8604C223.922 75.7995 222.957 75.5661 222.017 75.1601C221.082 74.7588 220.203 74.1931 219.379 73.4631C217.986 72.2292 217.049 70.7916 216.567 69.1504C216.085 67.5091 216.089 65.7857 216.579 63.98C217.068 62.1744 218.076 60.4104 219.602 58.6879C221.128 56.9655 222.758 55.7525 224.491 55.0489C226.225 54.3454 227.935 54.1337 229.622 54.414C231.31 54.6944 232.85 55.4515 234.243 56.6854C235.067 57.4154 235.734 58.2203 236.245 59.1C236.762 59.9845 237.107 60.917 237.282 61.8976C237.462 62.8728 237.457 63.8643 237.266 64.872C237.08 65.8744 236.689 66.8615 236.094 67.8333Z"
                        fill="black"/>
                    <path
                        d="M232.796 87.337L250.752 74.9429L252.253 77.1172L236.226 88.18L241.987 96.5267L240.059 97.8581L232.796 87.337Z"
                        fill="black"/>
                    <path d="M268.068 106.968L247.668 114.705L246.731 112.234L267.131 104.497L268.068 106.968Z"
                          fill="black"/>
                    <path
                        d="M269.154 144.995L268.836 142.372C269.571 142.125 270.201 141.773 270.725 141.316C271.25 140.866 271.673 140.343 271.994 139.746C272.323 139.155 272.546 138.516 272.663 137.829C272.78 137.143 272.794 136.44 272.707 135.72C272.548 134.409 272.072 133.261 271.28 132.277C270.489 131.3 269.41 130.576 268.044 130.105C266.678 129.641 265.058 129.523 263.182 129.751C261.307 129.979 259.762 130.481 258.547 131.258C257.333 132.043 256.459 133.004 255.924 134.142C255.391 135.287 255.204 136.515 255.363 137.826C255.45 138.546 255.633 139.225 255.911 139.863C256.189 140.502 256.554 141.069 257.008 141.565C257.47 142.067 258.009 142.474 258.626 142.785C259.252 143.103 259.947 143.294 260.714 143.358L261.032 145.981C259.901 145.918 258.867 145.679 257.929 145.263C256.992 144.848 256.169 144.289 255.461 143.588C254.761 142.886 254.193 142.072 253.759 141.144C253.325 140.224 253.042 139.217 252.909 138.124C252.685 136.277 252.937 134.58 253.665 133.032C254.392 131.484 255.538 130.196 257.102 129.169C258.666 128.143 260.59 127.49 262.874 127.213C265.158 126.936 267.183 127.108 268.947 127.731C270.711 128.354 272.131 129.33 273.209 130.659C274.286 131.987 274.936 133.575 275.161 135.423C275.293 136.515 275.259 137.561 275.058 138.558C274.858 139.562 274.499 140.49 273.98 141.34C273.467 142.189 272.806 142.927 271.995 143.555C271.191 144.182 270.244 144.662 269.154 144.995Z"
                        fill="black"/>
                    <path
                        d="M254.005 155.324L275.664 157.954L275.346 160.577L264.601 159.272L264.57 159.526L274.134 170.56L273.718 173.987L265.05 163.705L252.058 171.357L252.444 168.184L263.426 161.877L260.709 158.8L253.687 157.947L254.005 155.324Z"
                        fill="black"/>
                    <path
                        d="M240.043 202.164L257.999 214.558L256.498 216.733L248.502 211.214L241.894 220.788L249.89 226.307L248.389 228.481L230.433 216.087L231.934 213.913L239.965 219.456L246.573 209.882L238.542 204.339L240.043 202.164Z"
                        fill="black"/>
                    <path
                        d="M223.93 222.904L238.398 239.235L228.542 247.967L226.987 246.212L234.866 239.233L229.977 233.714L222.609 240.242L221.055 238.488L228.423 231.96L223.506 226.41L215.5 233.503L213.946 231.749L223.93 222.904Z"
                        fill="black"/>
                    <path
                        d="M204.918 237.971L215.057 257.29L208.53 260.716C207.02 261.508 205.646 261.9 204.407 261.893C203.171 261.892 202.086 261.567 201.152 260.918C200.218 260.27 199.452 259.376 198.855 258.238C198.258 257.1 197.961 255.968 197.964 254.843C197.967 253.719 198.318 252.652 199.016 251.644C199.717 250.642 200.817 249.749 202.313 248.963L207.596 246.191L208.705 248.304L203.498 251.037C202.466 251.578 201.715 252.165 201.245 252.796C200.768 253.432 200.534 254.1 200.541 254.802C200.546 255.514 200.751 256.256 201.157 257.03C201.563 257.803 202.062 258.403 202.655 258.83C203.248 259.257 203.945 259.461 204.745 259.442C205.548 259.429 206.472 259.149 207.516 258.601L211.629 256.442L202.579 239.199L204.918 237.971ZM200.379 251.422L191.07 245.239L193.787 243.813L203.021 250.036L200.379 251.422Z"
                        fill="black"/>
                    <path
                        d="M181.684 248.494L186.905 269.678L174.12 272.829L173.559 270.554L183.779 268.035L182.015 260.877L172.457 263.233L171.896 260.957L181.454 258.601L179.679 251.402L169.294 253.962L168.733 251.686L181.684 248.494Z"
                        fill="black"/>
                    <path
                        d="M123.689 257.233C124.2 257.359 124.593 257.65 124.868 258.105C125.143 258.561 125.218 259.044 125.092 259.554C124.967 260.064 124.676 260.457 124.22 260.732C123.765 261.008 123.282 261.083 122.772 260.957C122.261 260.831 121.868 260.54 121.593 260.085C121.318 259.629 121.243 259.146 121.369 258.636C121.452 258.298 121.615 258.009 121.857 257.769C122.092 257.527 122.372 257.355 122.697 257.252C123.014 257.154 123.345 257.148 123.689 257.233Z"
                        fill="black"/>
                    <path
                        d="M65.6962 232.167L67.6738 233.919C67.2868 234.591 67.0488 235.272 66.9597 235.962C66.8653 236.647 66.8959 237.319 67.0515 237.979C67.1971 238.639 67.4538 239.265 67.8217 239.857C68.1895 240.448 68.6446 240.984 69.1868 241.465C70.1756 242.341 71.2927 242.884 72.5382 243.096C73.7783 243.302 75.0659 243.129 76.4009 242.575C77.7306 242.017 79.0218 241.031 80.2746 239.617C81.5274 238.202 82.3508 236.802 82.7448 235.414C83.1336 234.022 83.1506 232.723 82.7959 231.517C82.4358 230.306 81.7614 229.263 80.7726 228.387C80.2304 227.907 79.6435 227.519 79.0119 227.226C78.3803 226.932 77.7303 226.75 77.0619 226.679C76.3835 226.61 75.7101 226.663 75.0415 226.839C74.3629 227.016 73.7155 227.335 73.0994 227.794L71.1218 226.042C72.01 225.34 72.9429 224.833 73.9203 224.522C74.8977 224.212 75.8836 224.084 76.8781 224.14C77.8679 224.201 78.833 224.434 79.7732 224.84C80.7081 225.241 81.5876 225.807 82.4116 226.537C83.8044 227.771 84.7417 229.208 85.2233 230.85C85.705 232.491 85.701 234.214 85.2115 236.02C84.722 237.826 83.7143 239.59 82.1884 241.312C80.6625 243.034 79.0328 244.247 77.2993 244.951C75.5658 245.655 73.8554 245.866 72.1681 245.586C70.4808 245.306 68.9407 244.549 67.5478 243.315C66.7239 242.585 66.0563 241.78 65.5453 240.9C65.0289 240.016 64.6832 239.083 64.5082 238.102C64.3284 237.127 64.3338 236.136 64.5245 235.128C64.7103 234.126 65.1009 233.138 65.6962 232.167Z"
                        fill="black"/>
                    <path
                        d="M68.994 212.663L51.038 225.057L49.5371 222.883L65.5643 211.82L59.803 203.473L61.7318 202.142L68.994 212.663Z"
                        fill="black"/>
                    <path d="M33.7221 193.032L54.1224 185.295L55.0593 187.766L34.659 195.503L33.7221 193.032Z"
                          fill="black"/>
                    <path
                        d="M32.6362 155.005L32.9547 157.628C32.2191 157.875 31.5894 158.227 31.0653 158.684C30.5405 159.134 30.1176 159.657 29.7966 160.254C29.4676 160.845 29.2447 161.484 29.1278 162.171C29.0108 162.857 28.996 163.56 29.0833 164.28C29.2426 165.591 29.7182 166.739 30.5102 167.723C31.3014 168.7 32.3802 169.424 33.7466 169.895C35.1122 170.359 36.7327 170.477 38.6081 170.249C40.4835 170.021 42.0287 169.519 43.2436 168.742C44.4577 167.957 45.3318 166.996 45.8662 165.858C46.3997 164.713 46.5868 163.485 46.4275 162.174C46.3402 161.454 46.1576 160.775 45.8797 160.137C45.6019 159.498 45.2361 158.931 44.7824 158.435C44.3208 157.933 43.7813 157.526 43.164 157.215C42.5388 156.897 41.8431 156.706 41.0769 156.642L40.7584 154.019C41.8893 154.082 42.9236 154.321 43.8612 154.737C44.7988 155.152 45.6214 155.711 46.3289 156.412C47.0294 157.114 47.597 157.928 48.0315 158.856C48.4652 159.776 48.7484 160.783 48.8811 161.876C49.1054 163.723 48.8536 165.42 48.1258 166.968C47.398 168.516 46.2522 169.804 44.6885 170.831C43.1247 171.857 41.2007 172.51 38.9163 172.787C36.6319 173.064 34.6077 172.892 32.8436 172.269C31.0796 171.646 29.659 170.67 28.5819 169.341C27.5048 168.013 26.8541 166.425 26.6298 164.577C26.4971 163.485 26.5312 162.439 26.732 161.442C26.932 160.438 27.2916 159.51 27.8108 158.66C28.323 157.811 28.9845 157.073 29.7954 156.445C30.5993 155.818 31.5462 155.338 32.6362 155.005Z"
                        fill="black"/>
                    <path
                        d="M47.7852 144.676L26.1261 142.046L26.4445 139.423L37.1895 140.728L37.2203 140.474L27.6568 129.44L28.0728 126.013L36.7404 136.295L49.7319 128.643L49.3467 131.816L38.3643 138.123L41.0814 141.2L48.1036 142.053L47.7852 144.676Z"
                        fill="black"/>
                    <path
                        d="M61.7472 97.8357L43.7912 85.4416L45.2921 83.2672L53.2881 88.7865L59.8967 79.2123L51.9007 73.693L53.4015 71.5187L71.3575 83.9128L69.8567 86.0872L61.8256 80.5437L55.217 90.1179L63.2481 95.6614L61.7472 97.8357Z"
                        fill="black"/>
                    <path
                        d="M77.8609 77.0962L63.3927 60.765L73.2488 52.0333L74.803 53.7876L66.9245 60.7674L71.8132 66.2855L79.1813 59.7579L80.7355 61.5122L73.3674 68.0398L78.2843 73.5899L86.2904 66.4971L87.8446 68.2514L77.8609 77.0962Z"
                        fill="black"/>
                    <path
                        d="M96.8724 62.0291L86.733 42.7101L93.2607 39.284C94.77 38.4919 96.1442 38.0995 97.3833 38.1069C98.6191 38.108 99.7041 38.4329 100.638 39.0817C101.572 39.7304 102.338 40.624 102.935 41.7622C103.533 42.9005 103.83 44.032 103.826 45.1566C103.823 46.2813 103.472 47.3477 102.774 48.3558C102.073 49.3576 100.974 50.2512 99.4771 51.0368L94.1946 53.8093L93.0856 51.6963L98.2927 48.9634C99.324 48.4221 100.075 47.8355 100.545 47.2035C101.022 46.5683 101.257 45.8997 101.249 45.1978C101.245 44.4863 101.04 43.7438 100.634 42.9702C100.228 42.1967 99.7282 41.5966 99.1353 41.1699C98.5423 40.7431 97.8458 40.5392 97.0456 40.5581C96.2421 40.5708 95.3184 40.851 94.2744 41.3989L90.1616 43.5575L99.2118 60.8013L96.8724 62.0291ZM101.411 48.578L110.72 54.7612L108.003 56.187L98.7698 49.9642L101.411 48.578Z"
                        fill="black"/>
                    <path
                        d="M120.107 51.5061L114.885 30.3219L127.67 27.1707L128.231 29.4464L118.011 31.9653L119.776 39.1232L129.333 36.7675L129.894 39.0431L120.337 41.3989L122.111 48.5982L132.496 46.0385L133.057 48.3141L120.107 51.5061Z"
                        fill="black"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_121">
                        <rect width="300" height="300" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

        </div>
    );
};

export {Greeting};
