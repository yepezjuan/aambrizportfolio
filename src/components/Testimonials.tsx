import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://freesvg.org/img/abstract-user-flat-4.png",
    name: "Cassandra",
    userName: "@Cass_Doe",
    comment:
      "Working with Alex is always a pleasure! He provides such a fun, safe, creative space for every project. Alex brings great concepts/ideas to each session that really help the project come to life and produces beautifully unique and striking photos.",
  },
  {
    image: "https://freesvg.org/img/abstract-user-flat-4.png",
    name: "Gio",
    userName: "@gio__",
    comment:
      "I first met Alex when he was shooting for San Fernando Valley Pride 2024, and he was kind enough to email me the shots of me singing. Then, after a follow on Instagram, I realized this guy was the real deal. I loved his aesthetic. After a while, I was able to shoot with him, and not only does he have a clear vision, he’s a sweetheart and a total professional!",
  },

  {
    image: "https://freesvg.org/img/abstract-user-flat-4.png",
    name: "Kim",
    userName: "@kimk",
    comment:
      "I have worked with Alex for quite some time! While he allowed me to create my own ideas and expand my creativity, he also incorporated his own twist and creativity onto his work. He works well with others, is able to listen, and executes impeccably. He has grown as a photographer, his work is carefully crafted and well thought out. I am happy we still continue to work together.",
  },
  {
    image: "https://freesvg.org/img/abstract-user-flat-4.png",
    name: "Vero",
    userName: "@merovero",
    comment:
      "I’ve lost count how many times I’ve worked with Alex, I’ve worked with him on fashion shoots, creative shoots, brand shoots and even hired him and his team to photograph the most important day of my life, my wedding. Each time he has delivered exactly what I envisioned and more. His communication is clear he reaches out before the shoot with a mood board and suggestions so you’re not blindsided. His professionalism and open mindedness makes me feel comfortable in front of the camera! I look forward to many more projects with him",
  },
  {
    image: "https://freesvg.org/img/abstract-user-flat-4.png",
    name: "Sylvia",
    userName: "@sylvia1234",
    comment:
      "I recently had my graduation photos taken, and I couldn’t be happier with the entire experience! From start to finish, Alex was professional, creative, and made the whole session feel relaxed and enjoyable. He gave great direction on posing, which I appreciate because I am not photogenic. I especially appreciated the quick turnaround time and the quality of the edits. If you’re looking for someone to document a major milestone like graduation, I highly recommend Alex as a photographer!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Testimonials{" "}
        </span>
        About Ambriz Visuals
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        See what previous clients have to say:
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          ),
        )}
      </div>
    </section>
  );
};
