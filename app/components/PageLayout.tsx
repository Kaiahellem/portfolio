type PageLayoutProps = {
    title: React.ReactNode;
    children: React.ReactNode;
};

export default function PageLayout ({ title, children }: PageLayoutProps) {
    return(
        <div className="flex gap-40 max-w-5xl mx-auto">
            <div className="w-1/2">
            {title}
            </div>
            <div className="w-1/2 mt-14">
            {children}
            </div>
        </div>
    );
}