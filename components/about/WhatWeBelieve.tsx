"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  Cross,
  Church,
  Heart,
  ShieldCheck,
  HandHelping,
  Landmark,
  Coins,
  Users,
  Crown,
  Sparkles,
  Baby,
} from "lucide-react";
import { GiDove } from "react-icons/gi";

const beliefs = [
  {
    icon: BookOpen,
    title: "The Bible",
    scripture: "2 Timothy 3:16",
    content:
      "The Bible is divinely inspired in both Old and New Testaments and is utterly trustworthy. It is infallible in its declaration, the final authority in all matters of faith and conduct, and comprehensive in its sufficiency.",
  },
  {
    icon: Sparkles,
    title: "The Trinity",
    scripture: "Hebrews 9:14",
    content:
      "The eternal Godhead exists in three persons: Father, Son and Holy Spirit. These three are one God.",
  },
  {
    icon: Crown,
    title: "God",
    scripture: "Jeremiah 32:17–19",
    content:
      "God is sovereign in creation, revelation and the final judgement.",
  },
  {
    icon: Cross,
    title: "The Saviour – Jesus Christ",
    scripture:
      "Romans 1:3–4, Ephesians 4:8, Romans 3:23, Romans 6:23, Romans 10:10, John 3:16, Romans 5:1–2, John 14:6",
    content: `
Jesus Christ was born of a virgin, lived a sinless life, performed miracles through the power of the Holy Spirit, died an atoning death and was raised from the dead. He ascended into heaven and sits at the right hand of the Father.

Humanity is universally sinful since the fall of Adam and Eve and stands under God's judgment. Salvation comes only through the sacrificial death and shed blood of Jesus Christ. Those who believe in their hearts and confess Him as Lord are saved from the penalty and power of sin.

The work of the cross is fully sufficient for salvation, and Jesus Christ is the only way to salvation.
    `,
  },
  {
    icon: GiDove,
    title: "The Holy Spirit",
    scripture: "Galatians 5:16",
    content:
      "The power and work of the Holy Spirit is seen in the regeneration of man and, through His indwelling presence, enables believers to live holy lives.",
  },
  {
    icon: GiDove,
    title: "The Baptizer",
    scripture: "1 Corinthians 14",
    content:
      "Jesus Christ is the Baptizer in the Holy Spirit. This experience, together with speaking in tongues, is promised to every believer.",
  },
  {
    icon: Heart,
    title: "The Healer",
    scripture: "Matthew 8:16–17, James 5:14",
    content:
      "The Lord Jesus Christ is the healer of the body. Believers who walk in obedience to Him may seek His healing. Prayer, anointing with oil and faith in the Name of Jesus remain important expressions of this ministry.",
  },
  {
    icon: Church,
    title: "The Church",
    scripture:
      "Ephesians 5:23, Galatians 5:22–23, 1 Corinthians 12:7–11",
    content:
      "The Church consists of all who have been born again by the Holy Spirit and made new creations in Christ. Jesus is the Head of the Church. Believers are united regardless of race, nationality or social standing. Every believer should display the fruit of the Spirit while the Church should operate in the gifts of the Spirit.",
  },
  {
    icon: Users,
    title: "Ministry",
    scripture: "1 Corinthians 12:28",
    content:
      "God has given Apostles, Prophets, Evangelists, Pastors and Teachers for the work of ministry and the edification of the Church.",
  },
  {
    icon: ShieldCheck,
    title: "The Ordinances",
    scripture:
      "1 Corinthians 11:24–28, Matthew 28:19, Luke 2:22, Mark 16:17–18, James 5:14–15, Matthew 8:16",
    content: `
The Lord’s Supper should be observed by all believers in remembrance of Christ's death.

Believer's baptism is by immersion in the Name of the Father, Son and Holy Spirit. Children are dedicated to the Lord, while those who have confessed Jesus Christ as Saviour are baptized by immersion.

The laying on of hands and anointing with oil are practiced for prayer, healing and ministry. Deliverance ministry is exercised through the power of the Holy Spirit and the authority of Jesus Christ.
    `,
  },
  {
    icon: Coins,
    title: "Financial Stewardship",
    scripture: "2 Corinthians 9:6–7",
    content:
      "Freewill offerings and giving are expressions of worship and obedience. Resources entrusted by God are used for Kingdom work, supporting ministry and caring for those in need. Giving should always be done cheerfully.",
  },
  {
    icon: Landmark,
    title: "Marriage",
    scripture:
      "Matthew 19:4–9, Ephesians 5:3, Hebrews 13:4",
    content:
      "Marriage is an institution established by God between one man and one woman. Fornication, adultery, polygamy and divorce are contrary to God's design and therefore not accepted as biblical standards for Christian living.",
  },
  {
    icon: Baby,
    title: "The Next Life",
    scripture:
      "1 Thessalonians 4:16–17, John 5:28–29",
    content:
      "The Lord Jesus Christ will personally return to the earth. The dead will be raised, both saved and unsaved. Believers will enter eternal life and joy, while the unbelieving will face eternal judgment.",
  },
];

export const WhatWeBelieve = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm font-semibold text-primary">
            <BookOpen className="h-4 w-4" />
            Our Statement of Faith
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            What We Believe
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Our beliefs are firmly rooted in Scripture and centered on
            Jesus Christ. These foundational truths guide our worship,
            ministry, discipleship and daily lives.
          </p>
        </motion.div>

        {/* Beliefs */}
        <div className="space-y-8">
          {beliefs.map((belief, index) => {
            const Icon = belief.icon;

            return (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="glass glass-hover rounded-4xl p-8 md:p-10"
              >
                <div className="flex flex-col gap-6 md:flex-row">

                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary glow-gold">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <h3 className="text-2xl font-bold">
                        {belief.title}
                      </h3>

                      <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        {belief.scripture}
                      </span>
                    </div>

                    <div className="h-1 w-24 rounded-full bg-primary mb-6" />

                    <div className="space-y-4 text-base leading-8 text-slate-700 whitespace-pre-line">
                      {belief.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}