import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Editor } from "@tiptap/react";
import { Fragment } from "react";
import { urlLocalPath } from "../../../lib/urlPath";

interface ColorMenuProps {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  editor: Editor | null;
}

export const ColorMenu = ({ color, setColor, editor }: ColorMenuProps) => {
  return (
    <>
      <Menu as="div" className="relative inline-block">
        <Menu.Button className="w-7 h-7 hover:bg-background-400 rounded transition ease-in-out">
          {/* <img src={`${urlLocalPath}/images/font-color.svg`} alt="font-color" title="Text Color" /> */}
          <div className="grid grid-rows-2">
            <div className="text-base">A</div>
            <div className="w-5 h-6">
              <input type="color" onInput={(event) => editor?.chain().focus().setColor(event.target.value).run()} value={editor?.getAttributes("textStyle").color} />
            </div>
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="fixed z-10 mt-2 w-30 select-none origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <table className="table-fixed">
                <tbody>
                  <tr>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#C00000").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#C00000" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#FF0000").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#FF0000" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#FFC000").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#FFC000" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#FFFF00").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#FFFF00" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#92D050").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#92D050" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#00B050").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#00B050" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#94FADB").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#94FADB" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#00B0F0").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#00B0F0" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#0070C0").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#0070C0" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#002060").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#002060" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#7030A0").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#7030A0" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                    <td>
                      <form
                        onClick={(event) => {
                          editor?.chain().focus().setColor("#000000").run();
                          editor?.commands.focus();
                        }}
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <div className={`flex items-center justify-start px-0.5 py-0.5 text-sm hover:bg-grey ${active ? "bg-gray-600" : "text-gray-700"}`}>
                              <input type="color" value="#000000" className="w-5 h-5" />
                            </div>
                          )}
                        </Menu.Item>
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
