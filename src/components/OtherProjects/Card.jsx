export default function Card({ link, src, description }) {
  return (
    <div className="mx-2 rounded bg-[var(--other-projects-bg-color)] font-['Roboto_Mono',_monospace] shadow-sm">
      <a href={link} className="focus:outline-none">
        <img
          className="w-full md:h-[200px]"
          src={src}
          alt="Sunset in the mountains"
        />
        <div className="py-4">
          <div className="px-2 text-xl font-bold text-[var(--text-color)]">
            {description}
          </div>
        </div>
      </a>
    </div>
  );
}
