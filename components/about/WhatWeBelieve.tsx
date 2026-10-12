"use client";
import { motion, useReducedMotion } from "framer-motion";


const beliefs = [
  {
    title: "The Bible",
    scripture: "2 Timothy 3:16",
    content:
      "The Bible is divinely inspired in both Old and New Testaments and is utterly trustworthy. It is infallible in its declaration, the final authority in all matters of faith and conduct, and comprehensive in its sufficiency.",
  },
  {
    title: "The Trinity",
    scripture: "Hebrews 9:14",
    content:
      "The eternal Godhead exists in three persons: Father, Son and Holy Spirit. These three are one God.",
  },
  {
    title: "God",
    scripture: "Jeremiah 32:17–19",
    content:
      "God is sovereign in creation, revelation and the final judgement.",
  },
  {
    title: "The Saviour – Jesus Christ",
    scripture:
      "Romans 1:3–4; Ephesians 4:8; Romans 3:23; Romans 6:23; Romans 10:10; John 3:16; Romans 5:1–2; John 14:6",
    content: [
      "Jesus Christ was born of a virgin, lived a sinless life, performed miracles through the power of the Holy Spirit, died an atoning death and was raised from the dead. He ascended into heaven and sits at the right hand of the Father.",
      "Humanity is universally sinful since the fall of Adam and Eve and stands under God's judgment. Salvation comes only through the sacrificial death and shed blood of Jesus Christ. Those who believe in their hearts and confess Him as Lord are saved from the penalty and power of sin.",
      "The work of the cross is fully sufficient for salvation, and Jesus Christ is the only way to salvation.",
    ],
  },
  {
    title: "The Holy Spirit",
    scripture: "Galatians 5:16",
    content:
      "The power and work of the Holy Spirit is seen in the regeneration of man and, through His indwelling presence, enables believers to live holy lives.",
  },
  {
    title: "The Baptizer",
    scripture: "1 Corinthians 14",
    content:
      "Jesus Christ is the Baptizer in the Holy Spirit. This experience, together with speaking in tongues, is promised to every believer.",
  },
  {
    title: "The Healer",
    scripture: "Matthew 8:16–17; James 5:14",
    content:
      "The Lord Jesus Christ is the healer of the body. Believers who walk in obedience to Him may seek His healing. Prayer, anointing with oil and faith in the Name of Jesus remain important expressions of this ministry.",
  },
  {
    title: "The Church",
    scripture:
      "Ephesians 5:23; Galatians 5:22–23; 1 Corinthians 12:7–11",
    content:
      "The Church consists of all who have been born again by the Holy Spirit and made new creations in Christ. Jesus is the Head of the Church. Believers are united regardless of race, nationality or social standing. Every believer should display the fruit of the Spirit while the Church should operate in the gifts of the Spirit.",
  },
  {
    title: "Ministry",
    scripture: "1 Corinthians 12:28",
    content:
      "God has given Apostles, Prophets, Evangelists, Pastors and Teachers for the work of ministry and the edification of the Church.",
  },
  {
    title: "The Ordinances",
    scripture:
      "1 Corinthians 11:24–28; Matthew 28:19; Luke 2:22; Mark 16:17–18; James 5:14–15; Matthew 8:16",
    content: [
      "The Lord’s Supper should be observed by all believers in remembrance of Christ's death.",
      "Believer's baptism is by immersion in the Name of the Father, Son and Holy Spirit. Children are dedicated to the Lord, while those who have confessed Jesus Christ as Saviour are baptized by immersion.",
      "The laying on of hands and anointing with oil are practiced for prayer, healing and ministry. Deliverance ministry is exercised through the power of the Holy Spirit and the authority of Jesus Christ.",
    ],
  },
  {
    title: "Financial Stewardship",
    scripture: "2 Corinthians 9:6–7",
    content:
      "Freewill offerings and giving are expressions of worship and obedience. Resources entrusted by God are used for Kingdom work, supporting ministry and caring for those in need. Giving should always be done cheerfully.",
  },
  {
    title: "Marriage",
    scripture:
      "Matthew 19:4–9; Ephesians 5:3; Hebrews 13:4",
    content:
      "Marriage is an institution established by God between one man and one woman. Fornication, adultery, polygamy and divorce are contrary to God's design and therefore not accepted as biblical standards for Christian living.",
  },
  {
    title: "The Next Life",
    scripture: "1 Thessalonians 4:16–17; John 5:28–29",
    content:
      "The Lord Jesus Christ will personally return to the earth. The dead will be raised, both saved and unsaved. Believers will enter eternal life and joy, while the unbelieving will face eternal judgment.",
  },
];

export const WhatWeBelieve = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary/[0.04] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[35%] h-96 w-96 rounded-full bg-amber-200/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Introduction */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-14 overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16 lg:mb-16 lg:rounded-[2rem] lg:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
              Our Statement of Faith
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              What We Believe
            </h1>

            <div
              aria-hidden="true"
              className="mx-auto mt-7 h-1 w-16 rounded-full bg-amber-600"
            />

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Our beliefs are firmly rooted in Scripture and centred
              on Jesus Christ. These foundational truths guide our
              worship, ministry, discipleship and daily lives.
            </p>

            <p className="mt-7 text-sm font-semibold tracking-wide text-primary/80">
              Scripture · Faith · Discipleship · Christian Living
            </p>
          </div>
        </motion.header>

        {/* Belief sections */}
        <div>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Foundational Truths
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                The foundations of our faith
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-500 sm:text-right">
              Explore the biblical convictions that shape our
              identity and life as a church.
            </p>
          </div>

          <div className="space-y-5">
            {beliefs.map((belief, index) => (
              <motion.article
                key={belief.title}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 18 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : (index % 3) * 0.06,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-slate-900/[0.04] sm:rounded-3xl"
              >
                {/* Primary accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100"
                />

                <div className="p-6 sm:p-8 lg:p-9">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary/65">
                        Belief {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                        {belief.title}
                      </h3>
                    </div>

                    <span className="inline-flex w-fit max-w-full rounded-lg border border-primary/10 bg-[#FAF8F4] px-3 py-2 text-xs font-semibold leading-6 text-primary sm:mt-1 sm:max-w-[55%] sm:justify-end sm:text-right sm:text-sm">
                      {belief.scripture}
                    </span>
                  </div>

                  <div
                    aria-hidden="true"
                    className="mb-5 mt-5 h-px w-full bg-slate-100"
                  />

                  <div className="max-w-4xl space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {Array.isArray(belief.content) ? (
                      belief.content.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{belief.content}</p>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-primary/10 bg-white px-6 py-8 text-center sm:px-10 sm:py-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Our Foundation
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-800 sm:text-xl">
            Rooted in the Word of God, centred on Jesus Christ, and
            committed to living out our faith in every area of life.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-1 w-12 rounded-full bg-amber-600"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;
