import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Portrait",
    description:
      "Capturing authentic expressions and personality through natural, posed, and lifestyle portrait sessions. Ideal for individuals, couples, and personal branding.",
  },
  {
    icon: <MapIcon />,
    title: "Event",
    description:
      "Documenting moments as they unfold with a candid and storytelling approach. From intimate gatherings to large celebrations, every detail is preserved.",
  },
  {
    icon: <PlaneIcon />,
    title: "Product",
    description:
      "Clean, detail-focused imagery that highlights your product’s design and quality. Perfect for e-commerce, branding, and marketing materials.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Areas of my{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Expertise{" "}
        </span>
        !
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        If you have something specific in mind, feel free to reach out and let's
        bring your vision to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
