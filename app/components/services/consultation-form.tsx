'use client'

import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Calendar } from "../../components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

export function ConsultationForm() {
    const [date, setDate] = useState<Date>()

    return (
        <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Preferred Date</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell us about your energy needs and any specific requirements" />
            </div>
            <Button type="submit" className="w-full bg-[#003366] hover:bg-[#002244]">
                Schedule Consultation
            </Button>
        </form>
    )
} 