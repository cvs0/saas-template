import { BarChart3, Diamond, Target, Users } from "lucide-react";

const CollaborationPoints = () => {
  const points = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Initiatives",
      description: "Coordinate strategic product efforts.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Cross-team projects",
      description: "Collaborate across teams and departments.",
    },
    {
      icon: <Diamond className="h-5 w-5" />,
      title: "Milestones",
      description: "Break projects down into concrete phases.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Progress insights",
      description: "Track scope, velocity, and progress over time.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-600/10 text-white px-10">
      <div className="border-t border-gray-400/10">
        <div className="w-full bg-black py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 gap-10">
              {points.map((point, index) => (
                <div key={index} className="flex flex-col">
                  <div className="inline-flex">
                    <div className="mb-3 text-white mr-2">{point.icon}</div>
                    <h3 className="text-white text-sm font-medium mb-2">
                      {point.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationPoints;
