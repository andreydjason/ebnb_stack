// import { use } from 'react';
// import { fetchTodosArtigos } from './todos_artigos_db';

// import Image from "next/image";

// export default function ComponentTodosArtigos() {
//   const todos_artigos = use(fetchTodosArtigos(`/${artigoId}/artigos`));
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <div className="a">
//         <h3 className="text-3xl font-bold underline">
//           Cards com Todos os Artigos
//         </h3>
//       </div>
//       <ul>
//         {todos_artigos.map(artigo => (
//           <li key={artigo.id}>
//             {artigo.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
