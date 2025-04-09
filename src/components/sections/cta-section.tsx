import { Button } from "../ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-center text-center gap-6">
        <h2 className="text-2xl md:text-4xl lg:text-4xl mb-4 md:mb-0 font-semibold text-white">
          Plan the present. Build the future.
        </h2>
        <div className="flex space-x-4 mt-2">
          <Button className="border border-gray-700">Talk to sales</Button>
          <Button variant="secondary">Get started</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
