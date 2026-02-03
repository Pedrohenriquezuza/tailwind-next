import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  Search,
  SquareStack,
  Users,
} from "lucide-react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";

export default function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
      <Logo />

      <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 tex-zinc-500" />
        <input
          type="text"
          className="flex-1  border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 "
          placeholder="Search"
        />
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashborad" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <UsedSpaceWidget />
    </aside>
  );
}
