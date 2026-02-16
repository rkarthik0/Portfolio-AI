export default function Work() {
  const work = [
    {
      name: "ZUPA Fashion E-commerce Website",
      icon: "./assets/work-1.jpg",
      description: "HTML, CSS, JavaScript",
      link: "https://zupa-e-commerce-website.vercel.app/",
    },
    {
      name: "AI-Augmented Developer Portfolio",
      icon: "./assets/work-2.png",
      description: "React, Tailwind CSS, GitHub Copilot",
      link: "https://portfolio-ai-rouge.vercel.app/",
    },
  ];

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Explore my portfolio of projects showcasing expertise in full-stack
        development, modern frameworks, and software engineering principles.
      </p>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {work.map((item) => (
          <div
            key={item.name}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group"
            style={{ backgroundImage: `url(${item.icon})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>

              {/* SEND ICON LINK */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border rounded-full border-black flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition cursor-pointer"
              >
                <img
                  src="./assets/send-icon.png"
                  alt="Open project"
                  className="w-5"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* SCROLL TO TOP */}
      <a
        href="#top"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
      >
        Show above
        <img
          src="./assets/right-arrow-bold.png"
          alt=""
          className="w-4 dark:hidden"
        />
        <img
          src="./assets/right-arrow-bold-dark.png"
          alt=""
          className="w-4 hidden dark:block"
        />
      </a>
    </div>
  );
}
