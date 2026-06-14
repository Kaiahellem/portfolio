import Link from "next/link";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};

export default function NavLink ({href, children}: NavLinkProps) {
    return (
        <Link href={href} className="text-accent hover:underline">
            {children}
            </Link>
    );
}