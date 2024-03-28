import { Menu } from "@headlessui/react";

function ComputerDropdown() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items className="bg-white flex flex-col">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">
            Invite a friend (coming soon!)
          </span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default ComputerDropdown;
