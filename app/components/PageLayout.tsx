type PageLayoutProps = {
    title: React.ReactNode;
    children: React.ReactNode;
};

export default function PageLayout ({ title, children }: PageLayoutProps) {
    return(
        <div className="flex gap-30 mt-30 max-w-5xl mx-auto">
            <div className="w-1/3">
            {title}
            </div>
            <div className="w-2/3 mt-30">
            {children}
            </div>
        </div>
    );
}