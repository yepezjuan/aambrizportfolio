import { buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container place-items-left px-10 py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-3xl md:text-6xl ">
          <h1 className="justify-left ">ALEX TAKES</h1>{" "}
          <h2 className="">VISUALS</h2>
        </main>

        <p className="text-blue-600 text-md  text-muted-foreground md:w-10/12 mx-auto lg:mx-0 ">
          San Gabriel Valley, CA
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="#booking"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Book a session
          </a>
        </div>
      </div>

      {/* Hero cards sections */}

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
