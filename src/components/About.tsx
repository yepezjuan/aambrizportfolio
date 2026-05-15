import alejandro from "../assets/alej.webp";
import { InstagramIcon, TikTokIcon } from "./Icons";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col md:flex-row gap-8 items-center px-5">
            <img
              src={alejandro}
              alt="Alejandro Ambriz"
              width={1500}
              height={1500}
              className="rounded-lg w-full max-w-sm"
            />
            <div className="content-align-top">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                A. Ambriz
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Welcome to my website! I specialize in portraits, events, and
                visual storytelling. Over the last nine years, I have worked
                with individuals, brands, & companies to create authentic
                moments that feel purposeful, emotional, & true to each client's
                vision. Photography has always been part of my life in some
                capacity, but truly developed while studying in college. This
                expanded through event photography, which I got into after
                earning my degrees in Journalism & Communications. I love what I
                do, every day & all the time. My passion has allowed me to meet
                so many interesting people & given me the opportunity to make
                work that reflects what I value. My photos are sharp,
                expressive, moody, & rich in color. They are candid moments with
                intentional lighting & a polished presentation.
              </p>

              <div className="mt-6">
                <p className="text-xl text-muted-foreground mb-3">
                  Follow me here!
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/alex_takesvisuals"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@alextakesvisuals"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="TikTok"
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <TikTokIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
