// import React from "react";
//
// import { Link } from "react-router-dom";
// import {YouTubeVideo} from "./YouTubeVideo.jsx";
//
//
//
// export const CardPage = ({ conceptos }) => {
//     return (
//         <>
//             {conceptos.map(({ concepto, titulo, img,videoId,id }, i) => (
//                 <div class=" bg-light-accent-dark rounded-lg shadow  dark:bg-dark-accent dark:border-dark-accent p-3 ">
//                     <div class="sm:p-4">
//                         <h5 class="mb-2 sm:text-2xl font-bold tracking-tight text-txt-light dark:text-white  text-center">{titulo}</h5>
//                         <p class="font-normal text-txt-light  text-center ">{concepto}</p>
//                     </div>
//                     <div >
//                         {img && <img className="mx-auto p-6 hover:scale-150 transition-transform" src={img} alt={titulo} />}
//                     </div>
//                     <div >
//                         {videoId && <YouTubeVideo videoId={videoId} />}
//                     </div>
//                 </div>
//             ))}
//         </>
//     )
// }
//


