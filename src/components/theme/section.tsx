import React from "react";

export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full space-y-4 md:space-y-8 max-w-screen-xl mx-auto flex flex-col rounded-lg overflow-hidden p-2 sm:p-3 md:p-4">
      {children}
    </section>
  );
};
