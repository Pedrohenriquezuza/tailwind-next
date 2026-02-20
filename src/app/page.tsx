import * as Input from "./components/Input";

import { SettingsTabs } from "./components/SettingsTabs";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from "./components/Form/FileInput";
import { Select } from "./components/Form/Select";
import { SelectItem } from "./components/Form/Select/SelectItem";
import { TextArea } from "./components/Form/TextArea";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>

          <div className="flex items-center gap-2 ">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white
              hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
        >
          <div className="grid gap-3 grid-cols-(--grid-form) pb-5">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Diego" />
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue="Fernandes" />
              </Input.Root>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-(--grid-form) pb-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              E-mail address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="w-5 h-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="pedro@rocketseat.com.br"
              />
            </Input.Root>
          </div>

          <div className="grid gap-3 grid-cols-(--grid-form) pb-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 "
            >
              Your Photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                This will be displayed on your profile
              </span>
            </label>

            <div>
              <FileInput.Root className="flex items-start gap-5">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-(--grid-form) pb-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <div className="grid gap-3 grid-cols-(--grid-form) pb-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="BR" text="Brazil" />
              <SelectItem value="US" text="United States" />
              <SelectItem value="CA" text="Canada" />
              <SelectItem value="GB" text="United Kingdom" />
              <SelectItem value="JP" text="Japan" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-(--grid-form) pb-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a Timezone...">
              <SelectItem
                value="America/Sao_Paulo"
                text="América — São Paulo (UTC-03:00)"
              />
              <SelectItem
                value="America/New_York"
                text="América — Nova York (UTC-05:00)"
              />
              <SelectItem
                value="Europe/London"
                text="Europa — Londres (UTC+00:00)"
              />
              <SelectItem
                value="Europe/Berlin"
                text="Europa — Berlim (UTC+01:00)"
              />
              <SelectItem value="Asia/Tokyo" text="Ásia — Tóquio (UTC+09:00)" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-(--grid-form) pb-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 ">
              Bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Write a short Introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className=" p-2 hover:bg-zinc-50 rounded-md cursor-pointer"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className=" p-2 hover:bg-zinc-50 rounded-md cursor-pointer"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className=" p-2 hover:bg-zinc-50 rounded-md cursor-pointer"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className=" p-2 hover:bg-zinc-50 rounded-md cursor-pointer"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className=" p-2 hover:bg-zinc-50 rounded-md cursor-pointer"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <TextArea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.
"
              />
            </div>
          </div>

          <div className="grid gap-3 grid-cols-(--grid-form) pb-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 "
            >
              Portfolio Projects
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white
              hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
