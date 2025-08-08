'use client';

import NavItem from './NavItem';

type NavMenuProps = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavMenu({ isOpen, setIsOpen }: NavMenuProps) {
  return (
    <>
      <NavItem href="/" title="Início" setIsOpen={setIsOpen} />
      <NavItem href="/artigos" title="Ensinamentos" setIsOpen={setIsOpen} />
      <NavItem href="/contato" title="Contato" setIsOpen={setIsOpen} />
      <NavItem href="#sobre" title="Sobre" setIsOpen={setIsOpen} />
    </>
  );
}
