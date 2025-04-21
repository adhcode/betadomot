"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet"
import { ScrollArea } from "../../components/ui/scroll-area"

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                    <div className="flex flex-col space-y-3">
                        <Link
                            href="/"
                            className="flex items-center space-x-2"
                            onClick={() => setOpen(false)}
                        >
                            <span className="font-bold">Betadomot</span>
                        </Link>
                        <Link
                            href="/products"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setOpen(false)}
                        >
                            Products
                        </Link>
                        <Link
                            href="/services"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setOpen(false)}
                        >
                            About
                        </Link>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
} 