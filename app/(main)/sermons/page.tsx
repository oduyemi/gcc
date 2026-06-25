"use client";
import { useState } from "react";
import { SermonFilters } from "@/components/sermons/Filters";
import { SermonsGrid } from "@/components/sermons/Grid";
import { LiveStreamSpotlight } from "@/components/sermons/LivestreamSpotlight";
import { useLiveStream } from "@/hook/useLivestream";
import { JoinUsCTA } from "@/components/JoinUsCTA";

export default function SermonsPage() {
    const {stream} = useLiveStream();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <LiveStreamSpotlight
                isLive={stream.isLive}
                videoId={stream.videoId}
                title={stream.title}
            />
            <section id="sermons" className="container mx-auto px-4 py-8">
                <SermonFilters
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                />
            </section>
            <SermonsGrid searchTerm={searchTerm} />
            <JoinUsCTA />
        </>
    );
}



