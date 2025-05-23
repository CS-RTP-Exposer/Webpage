import Link from "next/link"
import Image from "next/image"
import { Download, DollarSign, Eye, ArrowRight, Github, Puzzle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky mx-auto top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex mx-auto px-4 md:px-6 h-16 items-center justify-between max-w-7xl">
                    <div className="flex items-center gap-2">
                        <Eye className="h-6 w-6 text-purple-500" />
                        <span className="text-xl font-bold">OddsAware</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="#donate">
                            <Button variant="outline" size="sm" className="hidden md:flex">
                                <DollarSign className="mr-2 h-4 w-4" />
                                Donate
                            </Button>
                        </Link>
                        <Link href="#download">
                            <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                                <Download className="mr-2 h-4 w-4" />
                                Download
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <section className="py-20 md:py-32">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        See the <span className="text-purple-500">Real Odds</span> Behind Your Favorite Gambling Sites
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        OddsAware is a free Chrome extension that reveals the true odds behind popular gambling sites like
                                        CSGORoll, Rain.gg, and CSGOGem.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href="#download" id="download">
                                        <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
                                            <Download className="mr-2 h-5 w-5" />
                                            Download Extension
                                        </Button>
                                    </Link>
                                    <Link href="https://github.com/CS-RTP-Exposer/oddsaware-extension" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="lg">
                                            <Github className="mr-2 h-5 w-5" />
                                            View on GitHub
                                        </Button>
                                    </Link>
                                </div>
                                <div className="text-sm text-muted-foreground">Free and open source. No registration required.</div>
                            </div>
                            <div className="flex items-center justify-end">
                                <div className="relative w-full max-w-[500px] overflow-hidden rounded-lg border bg-background shadow-xl">
                                    <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                        <div className="h-3 w-3 rounded-full bg-green-500" />
                                        <div className="ml-2 text-xs text-muted-foreground">csgoroll.com</div>
                                    </div>
                                    <div className="relative aspect-[16/9] bg-black overflow-visible">
                                        <Image
                                            src="/skeleton-roll.png"
                                            alt="OddsViewer Chrome extension showing odds on a gambling site"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute cursor-default transform transition duration-300 hover:scale-150 hover:-translate-x-6 bottom-4 right-4 rounded-md bg-purple-500 px-2 py-1 text-xs font-medium text-white shadow-lg">
                                            True Odds: 48.2%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="bg-muted py-20">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-500">
                                    Features
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Make Informed Decisions</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    OddsViewer gives you the transparency you deserve when gambling online.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 pt-12 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                                <div className="rounded-full bg-purple-500/10 p-3">
                                    <Eye className="h-6 w-6 text-purple-500" />
                                </div>
                                <h3 className="text-xl font-bold">Real-Time Odds</h3>
                                <p className="text-center text-muted-foreground">
                                    See the actual odds of winning as you play, not what the sites want you to believe.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                                <div className="rounded-full bg-purple-500/10 p-3">
                                    <Puzzle className="h-6 w-6 text-purple-500" />
                                </div>
                                <h3 className="text-xl font-bold">Seamless Integration</h3>
                                <p className="text-center text-muted-foreground">
                                    Integrates naturally with all supported sites without disrupting your experience.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                                <div className="rounded-full bg-purple-500/10 p-3">
                                    <ArrowRight className="h-6 w-6 text-purple-500" />
                                </div>
                                <h3 className="text-xl font-bold">Instant Activation</h3>
                                <p className="text-center text-muted-foreground">
                                    Works immediately after installation with no configuration required.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sites" className="py-20">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                            {/* Text Section */}
                            <div className="md:w-4/6 space-y-4">
                                <div className="space-y-2">
                                    <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-500">
                                        Supported Sites
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Works With Your Favorite Sites
                                    </h2>
                                    <p className="max-w-[90%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        OddsViewer is currently in very early development, but we already support a few popular gambling sites. We are actively working on adding more sites and features to help you make informed decisions.
                                    </p>
                                </div>
                            </div>

                            {/* Logos Row */}
                            <div className="flex items-center gap-4">
                                <div className="group h-16 w-16 rounded-full bg-muted flex items-center justify-center cursor-pointer">
                                    <Image
                                        src="/csgoroll.jpg"
                                        alt="CSGORoll logo"
                                        width={64}
                                        height={64}
                                        className="rounded-full transition-transform duration-200 group-hover:scale-105"
                                    />
                                </div>
                                <div className="group h-16 w-16 rounded-full bg-muted flex items-center justify-center cursor-pointer">
                                    <Image
                                        src="/rain.jpg"
                                        alt="Rain.gg logo"
                                        width={64}
                                        height={64}
                                        className="rounded-full transition-transform duration-200 group-hover:scale-105"
                                    />
                                </div>
                                <div className="group h-16 w-16 rounded-full bg-muted flex items-center justify-center cursor-pointer">
                                    <Image
                                        src="/gem.jpg"
                                        alt="CSGOGem logo"
                                        width={64}
                                        height={64}
                                        className="rounded-full transition-transform duration-200 group-hover:scale-105"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </section>


                <section className="bg-muted py-20">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-500">
                                    How It Works
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Technology Behind OddsAware</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our extension uses advanced algorithms to give you the real odds behind gambling sites.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 pt-12 md:grid-cols-2">
                            <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                                <div className="flex items-center gap-2">
                                    <div className="rounded-full bg-purple-500/10 p-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6 text-purple-500"
                                        >
                                            <path d="M3 6h18" />
                                            <path d="M7 12h10" />
                                            <path d="M10 18h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold">RTP Calculation</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    We scan the page for all possible items you could get from a case or game and calculate the Return to
                                    Player (RTP) based on this data. This gives you a clear picture of the actual value you can expect to
                                    receive over time.
                                </p>
                                <div className="rounded-md bg-muted p-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Items scanned</span>
                                        <span className="text-sm font-medium">RTP calculated</span>
                                    </div>
                                    <div className="mt-2 h-2.5 w-full rounded-full bg-muted-foreground/20">
                                        <div className="h-2.5 rounded-full bg-purple-500" style={{ width: "67%" }}></div>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-xs text-muted-foreground">0%</span>
                                        <span className="text-xs font-medium text-purple-500">67% RTP</span>
                                        <span className="text-xs text-muted-foreground">100%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                                <div className="flex items-center gap-2">
                                    <div className="rounded-full bg-purple-500/10 p-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6 text-purple-500"
                                        >
                                            <path d="M12 22V2" />
                                            <path d="m9 5 3-3 3 3" />
                                            <path d="M5 12H2" />
                                            <path d="M22 12h-3" />
                                            <path d="m5 5 1.5 1.5" />
                                            <path d="M17.5 17.5 19 19" />
                                            <path d="M5 19l1.5-1.5" />
                                            <path d="M17.5 6.5 19 5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold">Chance at Profit</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    We combine the odds of winning with the average multiplier you can expect to show your real chance of
                                    making a profit. This helps you make informed decisions about which games offer the best value.
                                </p>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <div className="rounded-md bg-muted p-3 text-center">
                                        <div className="text-2xl font-bold text-purple-500">32%</div>
                                        <div className="text-xs text-muted-foreground">Win Probability</div>
                                    </div>
                                    <div className="rounded-md bg-muted p-3 text-center">
                                        <div className="text-2xl font-bold text-purple-500">2.1x</div>
                                        <div className="text-xs text-muted-foreground">Avg. Multiplier</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="getting-started" className="py-20">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid gap-2 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                            <div className="flex items-center justify-center">
                                <div className="space-y-4">
                                    <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-500">
                                        Getting Started
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Real Odds in Just a Few Clicks
                                    </h2>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-2">
                                            <div className="rounded-full bg-purple-500/20 p-1">
                                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                                                    1
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold">Install the Extension</h3>
                                                <p className="text-muted-foreground">
                                                    Download the extension from the Chrome Web Store.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="rounded-full bg-purple-500/20 p-1">
                                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                                                    2
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold">Visit Supported Sites</h3>
                                                <p className="text-muted-foreground">
                                                    Go to any supported gambling site and start playing as normal.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="rounded-full bg-purple-500/20 p-1">
                                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                                                    3
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold">See Real Odds</h3>
                                                <p className="text-muted-foreground">
                                                    Automatically get access to the actual odds of winning as you play.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="rounded-full bg-purple-500/20 p-1">
                                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                                                    4
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold">Make Better Decisions</h3>
                                                <p className="text-muted-foreground">
                                                    Make more informed gambling decisions based on real data.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                                        <Link href="#download">
                                            <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
                                                <Download className="mr-2 h-5 w-5" />
                                                Download Now
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end">
                                <div className="relative w-full max-w-[500px] overflow-hidden rounded-lg border bg-background shadow-xl">
                                    <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                        <div className="h-3 w-3 rounded-full bg-green-500" />
                                        <div className="ml-2 text-xs text-muted-foreground">rain.gg</div>
                                    </div>
                                    <div className="relative aspect-[16/9] bg-black">
                                        <Image
                                            src="/skeleton-rain.png"
                                            alt="OddsViewer Chrome extension showing odds on Rain.gg"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute cursor-default transform transition duration-300 hover:scale-150 hover:-translate-x-6 bottom-4 right-4 rounded-md bg-purple-500 px-2 py-1 text-xs font-medium text-white shadow-lg">
                                            True Odds: 32.7%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="donate" className="bg-muted py-12">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-500">
                                    Support The Project
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Help Us Keep OddsViewer Free</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    OddsViewer is completely free and open source. Your donations help us maintain and improve the
                                    extension.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <div className="grid grid-cols-3 gap-2">
                                    <Button variant="outline" className="w-full">
                                        $5
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        $10
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        $25
                                    </Button>
                                </div>
                                <Button className="w-full bg-purple-500 hover:bg-purple-600">
                                    <DollarSign className="mr-2 h-4 w-4" />
                                    Donate Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <footer className="border-t py-6 md:py-0">
                <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Eye className="h-5 w-5 text-purple-500" />
                        <p className="text-sm font-medium">OddsAware &copy; {new Date().getFullYear()}</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            Terms of Service
                        </Link>
                        <Link
                            href="https://github.com/CS-RTP-Exposer/oddsaware-extension"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:underline underline-offset-4"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </footer>
        </div >
    )
}
