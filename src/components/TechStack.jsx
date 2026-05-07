export default function TechStack() {
  const techs = ['HTML5', 'CSS', 'JAVASCRIPT', 'NODE.JS', 'REACT', 'GIT', 'GITHUB'];

  return (
    <section className="border-y border-stone-800 py-10 bg-stone-900/40" data-purpose="tech-stack">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
        <ul className="flex items-center justify-between min-w-[800px] text-brand-muted font-bold tracking-widest text-sm">
          {techs.map((tech) => (
            <li key={tech} className="hover:text-white transition-colors cursor-default">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
