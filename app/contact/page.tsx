export default function ContactPage() {
  return (
    <div>
      {/* Section Header */}
      <div className="mb-12 border-b border-border pb-8">
        <h1 className="font-serif text-4xl font-light tracking-wide text-text-dark">
          Get In Touch
        </h1>
      </div>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="max-w-md">
          <p className="mb-12 text-base leading-relaxed text-text-med">
            I&apos;m always interested in new projects, collaborations, and
            conversations. Whether you have a specific project in mind or just
            want to say hello, feel free to reach out.
          </p>

          <div className="space-y-8">
            <div className="border-b border-border pb-8">
              <div className="mb-2 text-xs uppercase tracking-widest text-text-med">
                Email
              </div>
              <a
                href="mailto:hello@lume.com"
                className="font-serif text-2xl text-text-dark transition-colors hover:text-accent"
              >
                hello@lume.com
              </a>
            </div>

            <div className="border-b border-border pb-8">
              <div className="mb-2 text-xs uppercase tracking-widest text-text-med">
                Instagram
              </div>
              <a
                href="https://instagram.com/lume"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-2xl text-text-dark transition-colors hover:text-accent"
              >
                @lume
              </a>
            </div>

            <div className="border-b border-border pb-8">
              <div className="mb-2 text-xs uppercase tracking-widest text-text-med">
                Location
              </div>
              <div className="font-serif text-2xl text-text-dark">
                New York / Los Angeles
              </div>
            </div>

            <div className="pb-8">
              <div className="mb-2 text-xs uppercase tracking-widest text-text-med">
                Availability
              </div>
              <div className="font-serif text-2xl text-text-dark">
                Open for projects
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:pl-8">
          <h2 className="mb-8 text-xs uppercase tracking-widest text-text-med">
            Send a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs uppercase tracking-widest text-text-med"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-b border-border bg-transparent py-3 text-text-dark outline-none transition-colors placeholder:text-text-med/50 focus:border-accent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs uppercase tracking-widest text-text-med"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-b border-border bg-transparent py-3 text-text-dark outline-none transition-colors placeholder:text-text-med/50 focus:border-accent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-xs uppercase tracking-widest text-text-med"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full border-b border-border bg-transparent py-3 text-text-dark outline-none transition-colors placeholder:text-text-med/50 focus:border-accent"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs uppercase tracking-widest text-text-med"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full resize-none border-b border-border bg-transparent py-3 text-text-dark outline-none transition-colors placeholder:text-text-med/50 focus:border-accent"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="mt-4 rounded-full border border-accent bg-accent px-8 py-3 text-xs uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-accent"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
