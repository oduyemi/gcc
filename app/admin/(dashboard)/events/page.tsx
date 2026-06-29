import { QuarterPlanner } from "@/components/admin/Meetings/QuarterPlanner";
import { MeetingStats } from "@/components/admin/Meetings/Stats";
import { MeetingTable } from "@/components/admin/Meetings/Tables";
import { UpcomingMeetingsCard } from "@/components/admin/Meetings/Upcoming";


export default function DashboardEvents() {
    return (
        <>
            <MeetingStats />
            <div className="grid gap-6 xl:grid-cols-3 mt-6">
                <div className="xl:col-span-2">
                <MeetingTable />
                </div>
                <UpcomingMeetingsCard />
            </div>
            <div className="mt-6">
                <QuarterPlanner />
            </div>
        </>
    )
}

