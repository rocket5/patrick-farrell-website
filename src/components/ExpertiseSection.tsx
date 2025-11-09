"use client";

import Image from "next/image";
import { useState } from "react";
import type { ExpertiseSection as ExpertiseSectionType } from "@/types/data";

interface ExpertiseSectionProps {
  sections: ExpertiseSectionType[];
}

export function ExpertiseSection({ sections }: ExpertiseSectionProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>("for-everyone");

  const introSection = sections.find(item => item.id === "introduction");
  const accordionSections = sections.filter(section => section.id !== "introduction");

  return (
    <section id="expertise" className="mb-12 sm:mb-16 lg:mb-24" aria-labelledby="expertise-heading">
      <h2 id="expertise-heading" className="text-xl font-bold font-sans border-b-2 border-bg-dark pb-2 mb-8">
        Editorial Expertise
      </h2>
      {introSection && (
        <p className="text-base leading-6 mb-8">
          {introSection.content}
        </p>
      )}
      <div className="space-y-8">
        {accordionSections.map((section) => (
          <div key={section.id} className="bg-bg-dark p-2">
            <button
              onClick={() => setOpenAccordion(openAccordion === section.id ? null : section.id)}
              className="w-full flex items-center justify-between text-left"
              aria-expanded={openAccordion === section.id}
              aria-controls={`accordion-${section.id}`}
            >
              <h3 className="text-xl font-bold font-sans">
                {section.title}
              </h3>
              <div className="w-6 h-6 shrink-0">
                <Image
                  src={openAccordion === section.id ? "/images/chevron-up.svg" : "/images/chevron-down.svg"}
                  alt={openAccordion === section.id ? "Collapse" : "Expand"}
                  width={24}
                  height={24}
                />
              </div>
            </button>
            {openAccordion === section.id && section.content && (
              <div id={`accordion-${section.id}`} className="mt-4 text-base leading-6">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
