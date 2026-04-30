'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import Link from "next/link"
import { usePathname } from "next/navigation"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="Menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
                        <Image
                            src="/icons/logo.svg"
                            width={34}
                            height={34}
                            alt='Logo'
                        />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                            Hasp
                        </h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white"></nav>
                        </SheetClose>
                    </div>
                    {sidebarLinks.map((item) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                        return <Link href={item.route} key={item.label} className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}>
                            <div className="relative size-6">
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({
                                        'brightness-[3] invert-0': isActive
                                    })}
                                />
                            </div>
                            <p className={cn(
                                'sidebar-label', {
                                '!text-white': isActive
                            }
                            )}>
                                {item.label}
                            </p>
                        </Link>
                    })}
                </SheetContent>
            </Sheet>
        </section>

    )
}

export default MobileNav