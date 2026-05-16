import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            A. Ambriz Visuals
          </a>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>Alex Takes Visuals &copy; 2026</h3>
      </section>
    </footer>
  );
};
