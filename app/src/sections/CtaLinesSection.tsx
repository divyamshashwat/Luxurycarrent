
import React from 'react';

export function CtaLinesSection() {
    return (
        <section className="w-full bg-black py-10 overflow-hidden flex justify-center items-center">
            <div className="w-[80vw] mx-auto min-w-[300px]">
                {/* Responsive container for the SVG */}
                <div className="relative w-full" style={{ paddingBottom: '26.88%' /* Aspect ratio 648/2410 */ }}>
                    <svg
                        className="absolute top-0 left-0 w-full h-full"
                        viewBox="0 0 2410 648"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="ctaBlueGradient" x1="136.67" y1="0.714637" x2="0" y2="0.714637" gradientUnits="userSpaceOnUse">
                                <stop offset="0.51" stopColor="#1727FF" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>

                            <symbol id="BlueLineSymbol" viewBox="0 0 137 2">
                                <path d="M135.33 0.67C135.33 1.04003 135.63 1.34 136 1.34C136.37 1.34 136.67 1.04003 136.67 0.67C136.67 0.29997 136.37 0 136 0C135.63 0 135.33 0.29997 135.33 0.67Z" fill="url(#ctaBlueGradient)" />
                                <path d="M0.0107422 0.0010547C0.00437608 0.389935 0 0.779579 0 1.17C0 1.22633 0.000843587 1.28265 0.000976562 1.33895H135.999C135.999 1.28265 136 1.67 136 1.17C136 0.67 135.996 0.389935 135.989 0.0010547H0.0107422Z" fill="url(#ctaBlueGradient)" />
                            </symbol>
                        </defs>

                        {/* Background Paths (Grey Lines) */}
                        <path id="path1" d="M1204.58 323.73H1070.4C586.776 323.73 678.553 646.79 93.66 646.79H0" stroke="#999999" strokeWidth="1.338" />
                        <path id="path2" d="M0 0.669006H93.66C693.025 0.669006 587.224 323.729 1070.4 323.729H1204.58" stroke="#999999" strokeWidth="1.338" />
                        <path id="path3" d="M2409.58 0.669006H2315.92C1716.55 0.669006 1822.35 323.729 1339.18 323.729H1205" stroke="#999999" strokeWidth="1.338" />
                        <path id="path4" d="M1205 323.73H1339.18C1822.8 323.73 1731.02 646.79 2315.92 646.79H2409.58" stroke="#999999" strokeWidth="1.338" />
                        <path id="path5" d="M0 323.73H1070.4H1204.58" stroke="#999999" strokeWidth="1.338" />
                        <path id="path6" d="M2409.16 323.73H1338.76H1204.58" stroke="#999999" strokeWidth="1.338" />
                        <path id="path7" d="M2409.16 484.892H2315.5C1806.3 484.892 1806.3 323.73 1338.76 323.73H1204.58" stroke="#999999" strokeWidth="1.338" strokeDasharray="1.34 6.69" />
                        <path id="path8" d="M2409.16 162.567H2315.5C1806.3 162.567 1806.3 323.73 1338.76 323.73H1204.58" stroke="#999999" strokeWidth="1.338" strokeDasharray="1.34 6.69" />
                        <path id="path9" d="M0 484.892H93.66C583.813 484.892 583.813 323.73 1070.4 323.73H1204.58" stroke="#999999" strokeWidth="1.338" strokeDasharray="1.34 6.69" />
                        <path id="path10" d="M0 162.567H93.66C583.813 162.567 583.813 323.73 1070.4 323.73H1204.58" stroke="#999999" strokeWidth="1.338" strokeDasharray="1.34 6.69" />

                        {/* Animated Blue Lines */}
                        {/* Animating along various paths with different timings for a dynamic effect */}

                        <use href="#BlueLineSymbol" width="137" height="2" x="-68" y="-1">
                            <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path1" />
                            </animateMotion>
                        </use>

                        <use href="#BlueLineSymbol" width="137" height="2" x="-68" y="-1">
                            <animateMotion dur="5s" begin="1s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path2" />
                            </animateMotion>
                        </use>

                        <use href="#BlueLineSymbol" width="137" height="2" x="-68" y="-1">
                            <animateMotion dur="4.5s" begin="0.5s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path3" />
                            </animateMotion>
                        </use>

                        <use href="#BlueLineSymbol" width="137" height="2" x="-68" y="-1">
                            <animateMotion dur="6s" begin="2s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path4" />
                            </animateMotion>
                        </use>

                        <use href="#BlueLineSymbol" width="137" height="2" x="-68" y="-1">
                            <animateMotion dur="3s" begin="0s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path5" />
                            </animateMotion>
                        </use>

                        <use href="#BlueLineSymbol" width="137" height="2" x="-68" y="-1">
                            <animateMotion dur="7s" begin="1.5s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path6" />
                            </animateMotion>
                        </use>

                        {/* Dashed paths might need reversed direction if they look like returns, but let's just animate them forward first */}
                        <use href="#BlueLineSymbol" width="137" height="2" x="-68" y="-1">
                            <animateMotion dur="5.5s" begin="0.2s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path7" />
                            </animateMotion>
                        </use>
                        <use href="#BlueLineSymbol" width="137" height="2" x="-68" y="-1">
                            <animateMotion dur="4.8s" begin="0.8s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path8" />
                            </animateMotion>
                        </use>
                        <use href="#BlueLineSymbol" width="137" height="2" x="-68" y="-1">
                            <animateMotion dur="5.2s" begin="1.2s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path9" />
                            </animateMotion>
                        </use>
                        <use href="#BlueLineSymbol" width="137" height="2" x="-68" y="-1">
                            <animateMotion dur="6.1s" begin="2.5s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path10" />
                            </animateMotion>
                        </use>
                    </svg>
                </div>
            </div>
        </section>
    );
}
