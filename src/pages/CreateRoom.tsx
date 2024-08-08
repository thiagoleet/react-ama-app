import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AmaLogo from "../assets/ama-logo.svg";

export function CreateRoom() {
  const navigate = useNavigate();

  function handleCreateRoom(data: FormData) {
    const theme = data.get("theme")?.toString();

    console.log("Creating room with theme:", theme);

    navigate("/room/123");
  }

  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="max-w-[450px] flex flex-col gap-6">
        <img
          src={AmaLogo}
          alt="AMA logo"
          className="h-10"
        />
        <p className="leading-relaxed text-zinc-300 text-center">
          Crie uma sala pública de AMA (Ask Me Anything) e priorize as perguntas
          mais importantes para a comunidade.
        </p>

        <form
          action={handleCreateRoom}
          className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1"
        >
          <input
            type="text"
            name="theme"
            placeholder="Nome da Sala"
            autoComplete="off"
            className="flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500"
          />
          <button
            type="submit"
            className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500"
          >
            Criar Sala
            <ArrowRight className="size-4" />
          </button>
        </form>
      </div>
    </main>
  );
}
