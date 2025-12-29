"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import teamData from "@/data/team.json";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function Team() {
  const team = teamData as TeamMember[];

  // Se não houver equipe, não renderiza a seção
  if (!team || team.length === 0) {
    return null;
  }

  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-display font-bold text-neutral-900 dark:text-orange-500 sm:text-4xl lg:text-5xl">
            Quem somos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-white">
            O time por trás de cada projeto, unindo criatividade, estratégia e
            paixão
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="mb-6 relative aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-full bg-gradient-to-br from-primary-100 to-primary-200">
                  {/* Quando houver imagens reais, usar:
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  */}
                  <div className="flex h-full items-center justify-center">
                    <span className="text-primary-700 font-medium text-sm">
                      {member.name.split(" ")[0]}
                    </span>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-display font-semibold text-neutral-900 dark:text-orange-500">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm font-medium text-primary-600 dark:text-white">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-600 dark:text-white leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

