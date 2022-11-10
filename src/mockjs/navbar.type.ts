/**
 * @param { number } id Unique value -> start : 10
 * @param { string } hashId href Unique value
 * @param { string } title show current title
 * @param { string } routeName page find data
 */

interface Navbar {
  id: number;
  hashId?: string | number;
  title: string;
  children: Array<NavbarItem>;
}

interface NavbarItem {
  id: number;
  parentId: number;
  hashId?: string | number;
  title: string;
  disabled: boolean;
  routeName: string;
}

export { Navbar, NavbarItem };
