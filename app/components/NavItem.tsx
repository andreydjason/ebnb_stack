'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  href: string;
  title: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavItem({ href, title, setIsOpen }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  function handleClick() {
    if (setIsOpen) {
      setIsOpen(false);
    }
  }

  return (
    <li className="flex items-center">
      {isActive ? (
        <span className="w-full hover:cursor-default px-4 py-2 rounded-xl ring-sky-500 hover:bg-sky-600 hover:ring-1 hover:ring-sky-500 ring-1 bg-sky-600">
          {title}
        </span>
      ) : (
        <Link
          href={href}
          onClick={handleClick}
          className="w-full px-4 py-2 rounded-xl ring-gray-500 ring-1 ring-gray-500 hover:bg-sky-600 hover:ring-1 hover:ring-sky-500 bg-black"
        >
          {title}
        </Link>
      )}
    </li>
  );
}
