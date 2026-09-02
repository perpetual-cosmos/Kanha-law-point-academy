import Image from "next/image";

export default function Methodology() {
  const steps = [
    {
      num: "01",
      title: "Conceptual Clarity",
      description:
        "We focus on deep understanding over rote memorization, ensuring foundational concepts are robust.",
    },
    {
      num: "02",
      title: "Current Affairs Integration",
      description:
        "Daily analysis of landmark judgments and contemporary legal issues to build analytical context.",
    },
    {
      num: "03",
      title: "Rigorous Assessment",
      description:
        "Weekly mock tests mirroring actual exam patterns, followed by personalized performance diagnostics.",
    },
  ];

  return (
    <section
      className="py-20 bg-surface-bright relative overflow-hidden"
      id="methodology"
    >
      {/* Decorative ambient blur */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Content */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-surface-container-low rounded-xl overflow-hidden ambient-shadow p-8 flex items-center justify-center border border-outline-variant/20">
            <div className="relative w-full h-full">
              <Image
                src="/assets/icons-set.png"
                alt="High-quality icon set for legal education: Gavel, Scales of Justice, Law Book, Graduation Cap, and Court Building"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="font-sans text-xs font-bold text-secondary tracking-widest uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-on-surface mb-8 leading-snug">
              A Proven Methodology for Legal Mastery
            </h2>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="font-sans font-bold text-on-secondary-container text-sm">
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-on-surface mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
