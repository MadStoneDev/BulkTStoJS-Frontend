import Link from "next/link";

const MainNavigation = () => {
  return (
    <nav className={`p-6 flex items-center justify-between w-full max-w-6xl`}>
      <section className={`text-black font-black`}>TypeSmith.</section>
      <section>
        <ul className={`flex text-lg gap-8`}>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/`}>About</Link>
          </li>
          <li>
            <Link href={`/`}>Contact</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </nav>
  );
};

export default MainNavigation;
