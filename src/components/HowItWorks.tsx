import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { UserIcon, CameraIcon, BoxIcon } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <UserIcon className="w-10 h-10 text-primary" />,
    title: "Portrait",
    description:
      "Capturing authentic expressions and personality through natural, posed, and lifestyle portrait sessions. Ideal for individuals, couples, and personal branding.",
  },
  {
    icon: <CameraIcon className="w-10 h-10 text-primary" />,
    title: "Events",
    description:
      "Documenting moments as they unfold with a candid and storytelling approach. From intimate gatherings to large celebrations, every detail is preserved.",
  },
  {
    icon: <BoxIcon className="w-10 h-10 text-primary" />,
    title: "Commercial",
    description:
      "Clean, detail-focused imagery that highlights your product’s design and quality. Perfect for e-commerce, branding, and marketing materials.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl lg:text-4xl font-bold ">
        Areas of my{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Expertise
        </span>{" "}
        !
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-l text-muted-foreground">
        If you have something specific in mind, feel free to reach out and let's
        bring your vision to life.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
