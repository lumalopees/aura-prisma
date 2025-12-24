import { Metadata } from "next";
import History from "@/components/sections/about/History";
import MissionVision from "@/components/sections/about/MissionVision";
import Team from "@/components/sections/about/Team";
import Process from "@/components/sections/about/Process";
import { generatePageMetadata } from "@/components/seo/PageMetadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Sobre",
  description:
    "Conheça a história, missão, visão e valores do Aura Prisma. Um estúdio criativo que acredita em marcas construídas de dentro pra fora.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <History />
      <MissionVision />
      <Team />
      <Process />
    </>
  );
}

