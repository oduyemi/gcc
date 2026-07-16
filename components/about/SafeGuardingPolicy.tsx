"use client";
import { motion } from "framer-motion";
import {
  Shield,
  HeartHandshake,
  Users,
  BookOpen,
  BadgeCheck,
  AlertTriangle,
  Phone,
  CheckCircle2,
} from "lucide-react";

const principles = [
  "The welfare of a child, young person or vulnerable adult will always be paramount.",
  "The welfare of families will be promoted.",
  "The rights, wishes and feelings of children, young people, vulnerable adults and their families will be respected and listened to.",
  "Those in positions of responsibility will always act in the best interests of children, young people and vulnerable adults.",
  "Equal opportunities will be promoted and all differences between individuals will be treated with dignity and respect.",
];

const commitments = [
  "Adopting child and vulnerable adult protection guidelines through procedures and a code of conduct.",
  "Sharing information about child protection and good practice with children, parents and volunteers.",
  "Sharing safeguarding concerns with relevant agencies and involving parents and children appropriately.",
  "Providing regular safeguarding training for leaders and volunteers.",
  "Reviewing safeguarding policies and good practice on an ongoing basis.",
];

export const SafeguardingPolicy = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-primary">
            <Shield className="h-4 w-4" />
            Safeguarding & Protection
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Safeguarding Policy
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Global Crossfire Church is committed to creating a safe,
            welcoming and protective environment for children, young people,
            vulnerable adults and families involved in every aspect of church life.
          </p>
        </motion.div>

        {/* Policy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass glass-hover mb-10 rounded-4xl p-8 md:p-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <HeartHandshake className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold">
              Policy Statement
            </h2>
          </div>

          <div className="space-y-5 text-slate-700 leading-8">
            <p>
              Global Crossfire Church (GCC) is committed to creating a safe
              culture within the church and recognises its duty of care to
              safeguard all children, young people and vulnerable adults
              from harm.
            </p>

            <p>
              Every child has the right to protection, and the needs of
              those who may be vulnerable, whether temporarily or permanently,
              will always be considered when supporting their involvement in
              church life.
            </p>

            <p>
              GCC takes its responsibility for the care of children extremely
              seriously. Volunteers who work directly with children and young
              people are made aware of this policy, receive safeguarding
              training and undergo enhanced DBS checks.
            </p>

            <p>
              This policy exists to reassure parents, carers, volunteers and
              stakeholders that every reasonable step is taken to protect
              children, young people and vulnerable adults involved in the
              church's activities.
            </p>
          </div>
        </motion.div>

        {/* Principles + Commitments */}
        <div className="grid gap-8 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-4xl p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">
                Our Principles
              </h2>
            </div>

            <div className="space-y-5">
              {principles.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-slate-700 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-4xl p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <BadgeCheck className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">
                Our Commitments
              </h2>
            </div>

            <div className="space-y-5">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-slate-700 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Governance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass mt-10 rounded-4xl p-8 md:p-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold">
              Governance & Training
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 leading-8">
            <p>
              GCC is committed to ongoing safeguarding training for all
              children’s and youth workers, ministry leaders and volunteers.
            </p>

            <p>
              The church regularly reviews safeguarding procedures and
              operational guidelines to ensure best practice is maintained.
            </p>

            <p>
              Our safeguarding framework is based on recognised child
              protection standards and is reviewed regularly to ensure
              compliance and effectiveness.
            </p>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-10 rounded-4xl border border-primary/20 bg-primary/5 p-8 md:p-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold">
              Reporting a Concern
            </h2>
          </div>

          <p className="mb-6 text-slate-700 leading-8">
            If you have concerns regarding the welfare of a child,
            young person or vulnerable adult, or any safeguarding matter,
            please contact our designated safeguarding coordinator.
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold">
                Millicent — 07943 525114
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-primary/10 pt-6">
            <p className="text-sm text-muted-foreground">
              A full copy of the Safeguarding Policy is available
              from the church office upon request.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}