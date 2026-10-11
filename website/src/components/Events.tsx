import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MapPin, Clock, IndianRupee, Calendar, ArrowUpRight } from 'lucide-react'

const events = {
  upcoming: [
    {
      edition: 'Build & Blend #16',
      status: 'Upcoming',
      date: 'October 2026',
      venue: 'TBA, Chennai',
      time: '7:00 PM – 10:00 PM',
      entry: '₹250',
      desc: 'Developing ideas from concept to launch — prototyping, distribution, customer acquisition, revenue.',
      tags: ['Founders', 'Developers', 'Designers', 'Marketers', 'Students'],
    },
    {
      edition: 'Women Who Build #2',
      status: 'Upcoming',
      date: 'October 2026',
      venue: 'Chennai',
      time: 'TBA',
      entry: 'TBA',
      desc: 'A closed-door session for women who want to build, experiment, and ship with AI.',
      tags: ['Women builders', 'AI', 'Prototypes'],
    },
  ],
  past: [
    {
      edition: 'Build & Blend #15',
      status: 'Completed',
      date: 'Sep 30, 2026',
      venue: 'Madras Adda, Mylapore',
      time: '7:00 PM – 10:00 PM',
      entry: '₹250',
      desc: 'Edition 15. Mylapore. Hosted by Shankar K.',
      tags: ['Edition 15'],
    },
    {
      edition: 'Build & Blend #14',
      status: 'Completed',
      date: 'Sep 23, 2026',
      venue: 'Love Hope HQ, Adyar',
      time: '7:00 PM – 10:00 PM',
      entry: '₹250',
      desc: '"8 people. 3 hours. A lot happened in one room."',
      tags: ['Edition 14'],
    },
    {
      edition: 'Build & Blend #13',
      status: 'Completed',
      date: 'Sep 13, 2026',
      venue: 'Chennai',
      time: '7:00 PM – 10:00 PM',
      entry: '₹250',
      desc: '"Build something. Find users. Let\'s talk about money."',
      tags: ['Edition 13'],
    },
    {
      edition: 'Women Who Build #1',
      status: 'Completed',
      date: 'Sep 14, 2026',
      venue: 'Chennai',
      time: 'TBA',
      entry: '—',
      desc: 'Participants built prototypes, pitched to buyers, generated ₹4,300 combined revenue.',
      tags: ['Women builders'],
    },
    {
      edition: 'AgentCraft',
      status: 'Completed',
      date: 'Sep 19, 2026',
      venue: 'House of Cyces, Chennai',
      time: '10:00 AM – 5:00 PM',
      entry: '—',
      desc: 'One-day AI agent-builders event. DoingThingsAI as Community Partner.',
      tags: ['AI Agents', 'Community Partner'],
    },
    {
      edition: 'Build & Blend #12',
      status: 'Completed',
      date: 'Sep 6, 2026',
      venue: 'Time Café, Nungambakkam',
      time: '7:00 PM – 10:00 PM',
      entry: '₹250',
      desc: 'An afternoon of builders, coffee, and live shipping.',
      tags: ['Edition 12'],
    },
  ],
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function EventCard({ event, dark = false }: { event: typeof events.upcoming[0]; dark?: boolean }) {
  return (
    <motion.div
      variants={item}
      className={`group rounded-card p-5 border transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? 'bg-cream/5 border-cream/10 hover:border-cream/25'
          : 'bg-white border-navy/10 hover:border-navy/25 hover:shadow-lift'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex flex-wrap gap-2">
          {event.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="text-xs font-body px-2.5 py-0.5 rounded-pill bg-accent/15 border border-accent/25 text-accent"
            >
              {t}
            </span>
          ))}
        </div>
        <span className={`text-xs font-body px-2.5 py-0.5 rounded-pill ${
          event.status === 'Upcoming'
            ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-500'
            : dark
              ? 'bg-cream/10 text-cream/40 border border-cream/10'
              : 'bg-navy/8 text-navy/40 border border-navy/10'
        }`}>
          {event.status}
        </span>
      </div>

      <h3 className={`font-display font-bold text-lg mb-2 ${dark ? 'text-cream' : 'text-navy'}`}>
        {event.edition}
      </h3>
      <p className={`font-body text-sm leading-relaxed mb-4 ${dark ? 'text-cream/55' : 'text-navy/55'}`}>
        {event.desc}
      </p>

      <div className={`flex flex-col gap-1.5 text-xs font-body ${dark ? 'text-cream/40' : 'text-navy/40'}`}>
        <div className="flex items-center gap-1.5">
          <Calendar size={11} className="flex-shrink-0" />
          {event.date}
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin size={11} className="flex-shrink-0" />
          {event.venue}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={11} className="flex-shrink-0" />
          {event.time}
        </div>
        <div className="flex items-center gap-1.5">
          <IndianRupee size={11} className="flex-shrink-0" />
          {event.entry}
        </div>
      </div>
    </motion.div>
  )
}

export default function Events() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming')
  const { ref, inView } = useInView()

  return (
    <section id="events" className="bg-bg-light section-py" ref={ref}>
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="pill-tag">Past Events & Upcoming</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-h2 text-navy max-w-xl leading-heading">
              15 editions. One city. <span className="accent-text">Still building.</span>
            </h2>
            <a
              href="https://luma.com/h9p8dhgk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm font-medium text-cream bg-navy px-5 py-3 rounded-pill no-underline hover:bg-navy-mid transition-colors self-start md:self-auto flex-shrink-0"
            >
              RSVP Next Session
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          className="flex gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {(['upcoming', 'past'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-body text-sm font-medium px-5 py-2 rounded-pill transition-all duration-200 border ${
                tab === t
                  ? 'bg-navy text-cream border-navy'
                  : 'bg-transparent text-navy/60 border-navy/20 hover:border-navy/40'
              }`}
            >
              {t === 'upcoming' ? 'Upcoming' : `Past (${events.past.length})`}
            </button>
          ))}
        </motion.div>

        {/* Events grid */}
        <motion.div
          key={tab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {(tab === 'upcoming' ? events.upcoming : events.past).map((e, i) => (
            <EventCard key={i} event={e} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
