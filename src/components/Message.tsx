import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

interface MessageProps {
  text: string;
  ammountOfReactions: number;
  answered?: boolean;
}

export function Message({
  text,
  ammountOfReactions,
  answered = false,
}: MessageProps) {
  const [hasReacted, setHasReacted] = React.useState(false);

  function handeReactToMessage() {
    setHasReacted(true);
  }

  return (
    <li
      data-answered={answered}
      className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none"
    >
      {text}
      {hasReacted ? (
        <button
          onClick={handeReactToMessage}
          type="button"
          className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-zinc-300"
        >
          <ArrowUp className="size-4" />
          Curtir pergunta ({ammountOfReactions})
        </button>
      ) : (
        <button
          onClick={handeReactToMessage}
          type="button"
          className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-orange-500"
        >
          <ArrowDown className="size-4" />
          Curtir pergunta ({ammountOfReactions})
        </button>
      )}
    </li>
  );
}
