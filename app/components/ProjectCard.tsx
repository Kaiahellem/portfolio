import Link from "next/link";

type ProjectCardProps = {
    slug: string;
    title: string;
    description: string;
};

export default function ProjectCard({slug, title: title, description: description}: ProjectCardProps) {
    return(
        <div className="border border-neutral-200 rounded-lg">
            <Link href={`/projects/${slug}`} className="block border border-neutral-200 rounded-lg p-6 hover:border-neutral-400">
            <h2>{title}</h2>
            <p>{description}</p>
            </Link>
        </div>
    );
}