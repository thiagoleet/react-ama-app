import { useParams } from "react-router-dom";
import AmaLogo from "../assets/ama-logo.svg";
import { ArrowRight, ArrowUp, Share2 } from "lucide-react";

export function Room() {
  const { roomId } = useParams();

  function handleShareRoom() {
    const url = window.location.href.toString();

    if (navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);
    }
  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img
          src={AmaLogo}
          alt="AMA logo"
          className="h-5"
        />
        <span className="text-sm text-zinc-500 truncate">
          Código da Sala:&nbsp;
          <span className="text-zinc-300">{roomId}</span>
        </span>

        <button
          type="button"
          onClick={handleShareRoom}
          className="ml-auto bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-zinc-700"
        >
          Compartilhar
          <Share2 className="size-4" />
        </button>
      </div>

      <div className="h-px w-full bg-zinc-900"></div>

      <form className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1">
        <input
          type="text"
          name="theme"
          placeholder="Qual a sua pergunta?"
          autoComplete="off"
          className="flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500"
        />
        <button
          type="submit"
          className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500"
        >
          Criar Pergunta
          <ArrowRight className="size-4" />
        </button>
      </form>

      <ol className="list-decimal list-outside px-3 space-y-8">
        <li className="ml-4 leading-relaxed text-zinc-100">
          Conteúdo da pergunta
          <button
            type="button"
            className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-zinc-300"
          >
            <ArrowUp className="size-4" />
            Curtir pergunta (42)
          </button>
        </li>
        <li className="ml-4 leading-relaxed text-zinc-100">
          Conteúdo da pergunta
          <button
            type="button"
            className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-orange-500"
          >
            <ArrowUp className="size-4" />
            Curtir pergunta (42)
          </button>
        </li>
      </ol>
    </div>
  );
}
