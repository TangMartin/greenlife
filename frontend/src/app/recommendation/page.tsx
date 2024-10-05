import { SideNav } from "@/components/SideNav";
import { UserInput } from "@/components/UserInput";

// Define the UserData type
type UserData = {
    name: string;
    username: string;
    email: string;
    displayHistory: boolean;
    allowFollowing: boolean;
    showPlaylists: boolean;
};

export default async function Recommnedation() {

    return (
        <div className="flex h-screen">
            {/* Header */}
            <SideNav />
            {/* Body */}
            <UserInput />
            <div>
                <div>
                    {/* Rest of your main content */}
                </div>
            </div>
        </div>
    );
}