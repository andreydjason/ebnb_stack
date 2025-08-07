// app/page.tsx
import Image from "next/image";

export default function Inicio()
  {
  // const domNode = document.getElementById('app');
  // const root = ReactDOM.createRoot(domNode);
  // root.render(<h1>Develop. Preview. Ship.</h1>);

  return (
    <div id="app">
      <p className="flex p-6"></p>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <Image className="size-12 shrink-0" src="" alt="" />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">Teste</div>
          <p className="text-gray-500 dark:text-gray-400">Progredindo!</p>
        </div>
      </div>
    </div>
  );
};