import React from "react";

interface GetStartedProps {
  className?: string;
}

export const GetStarted: React.FC<GetStartedProps> = ({ className }) => {
  const steps = [
    {
      title: "Sign up on Umurava Platform",
      description: "Submit your completed project for evaluation.",
      imageSrc: "/SignIn.png",
      step: "Step 1",
    },
    {
      title: "Browse Open Challenges",
      description: (
        <>
          Explore the range of challenges and hackathons and{" "}
          <span className="block">
            choose one that aligns with your interests and{" "}
          </span>
          career goals.
        </>
      ),
      imageSrc: "/cardPhoto4.webp",
      step: "Step 2",
    },
    {
      title: "Register and Participate",
      description:
        "Sign up for the challenge and start working on the project.",
      step: "Step 3",
    },
    {
      title: "Submit your work",
      description: "Submit your completed project for evaluation.",
      step: "Step 4",
    },
    {
      title: "Receive Feedback and Recognition",
      description: "Get feedback on your work and celebrate your achievements.",
      step: "Step 5",
    },
  ];
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          How to Get Started
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            {steps.slice(0, 2).map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 relative h-full"
              >
                <h3 className="bg-customBlue text-white font-bold text-sm text-center py-1 px-4 mb-4 rounded w-fit">
                  {step.step}
                </h3>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <img
                  src={step.imageSrc}
                  alt={step.title}
                  className={`absolute bottom-0  right-0 ${
                    index === 1 ? "w-48" : "w-1/3"
                  } h-auto rounded-md`}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {steps.slice(2, 5).map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 h-full"
              >
                <h3 className="bg-customBlue text-white font-bold text-sm text-center py-1 px-4 mb-4 rounded w-fit">
                  {step.step}
                </h3>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 mb-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
