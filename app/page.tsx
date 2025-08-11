import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="419"
          name="James the bad guy"
          topic="labubu"
          subject="yahoo"
          duration={45}
          color="#ffda5e"
        />
        <CompanionCard
          id="478"
          name="James the bad guy"
          topic="labubu"
          subject="yahoo"
          duration={45}
          color="#ffda5e"
        />
        <CompanionCard
          id="467"
          name="James the bad guy"
          topic="labubu"
          subject="yahoo"
          duration={45}
          color="#ffda5e"
        />
      </section>

      <section className="home-section">
        <CompanionsList 
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
