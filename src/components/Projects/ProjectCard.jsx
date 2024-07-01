export default function ProjectCard({ link, src, name, description }) {
  return (
    <a
      className="w-fit text-[#222] [transition:transform_200ms_ease-in-out] hover:scale-105"
      href={link}
    >
      <img
        className="mx-auto max-w-64 cursor-pointer rounded-3xl"
        src={src}
        alt={`${name} logo`}
      />
      <h3>{name}</h3>
      <p className="mx-auto max-w-xs">{description}</p>
    </a>
  );
}
