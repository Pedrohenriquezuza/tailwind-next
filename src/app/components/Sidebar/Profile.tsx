import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-(--grid-profile)">
      <img
        src="https://github.com/pedrohenriquezuza.png"
        className="w-10 h-10 rounded-full"
        alt=""
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Pedro Zuza</span>
        <span className="text-sm text-zinc-500 truncate">
          Pedrozuza@rocketseat.com.br
        </span>
      </div>

      <button
        type="button"
        className="ml-auto p-2 hover:bg-zinc-50 rounded-md cursor-pointer"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
