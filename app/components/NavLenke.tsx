import Link from "next/link";

type NavLenkeProps = {
    href: string;
    children: React.ReactNode;
};

export default function NavLenke ({href, children}: NavLenkeProps) {
    return (
        <Link href={href} className="text-accent hover:underline">
            {children}
            </Link>
    );
}