export default function Logo() {
    return <div className="flex flex-row items-center gap-2 pl-0.5">
        <img src="/stein_logo.svg" alt="Logo" width={24} height={24} />
        <span className="font-bold text-lg">Stein</span>
    </div>;
}